const myButton = document.querySelector(".my-button");

myButton.onclick = function () {
  const myList = document.querySelector(".my-list");
  const myInput = document.querySelector(".my-input");

  let table = `<li><p><span class="value">${myInput.value}</span> <span class="x-button">[X]</span></p></li>`;

  myList.insertAdjacentHTML("afterbegin", table);
  myInput.value = "";
};

document.onclick = function (e) {
  if (e.target.classList.contains("value")) {
    e.target.classList.toggle("value-onclick");
  }

  if (e.target.classList.contains("x-button")) {
    e.target.parentNode.remove();
  }
};
