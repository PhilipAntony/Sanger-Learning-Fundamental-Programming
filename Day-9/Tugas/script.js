function newMotorcycle(merk, jenis, warna, harga) {
  this.merk = merk;
  this.jenis = jenis;
  this.warna = warna;
  this.harga = harga;
}

const motorList = [];
let myNums = 0;
let tableContent = "";

const mySubmitButton = document.querySelector(".my-submit-button");

mySubmitButton.addEventListener("click", function () {
  myNums++;
  const merk = document.querySelector("#merk");
  const jenis = document.querySelector("#jenis");
  const warna = document.querySelector("#warna");
  const harga = document.querySelector("#harga");

  let newMotor = new newMotorcycle(merk.value, jenis.value, warna.value, harga.value);
  motorList.push(newMotor);

  merk.value = "";
  jenis.value = "";
  warna.value = "";
  harga.value = "";

  const tableContainer = document.querySelector(".table-container");
  let newRow = tableContainer.insertRow(myNums);
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  let cell4 = newRow.insertCell(3);
  let cell5 = newRow.insertCell(4);

  motorList.forEach(function (motor, i) {
    cell1.innerHTML = motor.merk;
    cell2.innerHTML = motor.jenis;
    cell3.innerHTML = motor.warna;
    cell4.innerHTML = motor.harga;
    cell5.innerHTML = `<span class="ubah" data-index="${i}" data-bs-toggle="modal" data-bs-target="#modalUbah">Ubah</span> | <span class="hapus" data-index="${i}">Hapus</span>`;
  });
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("hapus")) {
    myNums--;
    const myIndex = e.target.dataset.index;
    e.target.parentNode.parentNode.remove();

    motorList.splice(myIndex, 1);
  }

  if (e.target.classList.contains("ubah")) {
    const myIndex = e.target.dataset.index;

    const merk = document.querySelector("#merkUbah");
    const jenis = document.querySelector("#jenisUbah");
    const warna = document.querySelector("#warnaUbah");
    const harga = document.querySelector("#hargaUbah");
    const motorIndex = document.querySelector("#motorIndex");

    motorIndex.value = myIndex;
    merk.value = motorList[myIndex].merk;
    jenis.value = motorList[myIndex].jenis;
    warna.value = motorList[myIndex].warna;
    harga.value = motorList[myIndex].harga;
  }
});

const saveChangeButton = document.querySelector(".save-change");
const hideMotorIndex = document.querySelector(".motor-index");
hideMotorIndex.style.display = "none";

saveChangeButton.addEventListener("click", function () {
  const merk = document.querySelector("#merkUbah");
  const jenis = document.querySelector("#jenisUbah");
  const warna = document.querySelector("#warnaUbah");
  const harga = document.querySelector("#hargaUbah");
  const motorIndex = document.querySelector("#motorIndex");

  console.log(motorIndex.value);

  motorList[motorIndex.value].merk = merk.value;
  motorList[motorIndex.value].jenis = jenis.value;
  motorList[motorIndex.value].warna = warna.value;
  motorList[motorIndex.value].harga = harga.value;

  const tableContainer = document.querySelector(".table-container");

  tableContainer.rows[Number(motorIndex.value) + 1].cells[0].innerHTML = merk.value;
  tableContainer.rows[Number(motorIndex.value) + 1].cells[1].innerHTML = jenis.value;
  tableContainer.rows[Number(motorIndex.value) + 1].cells[2].innerHTML = warna.value;
  tableContainer.rows[Number(motorIndex.value) + 1].cells[3].innerHTML = harga.value;
});
