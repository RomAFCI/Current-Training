let range = document.querySelector(".range");
let info = document.querySelector(".info");

let min = document.querySelector(".min");
let maj = document.querySelector(".maj");
let nbr = document.querySelector(".nbr");
let car = document.querySelector(".car");

range.addEventListener("input", () => {
  console.log(range.value);

  info.textContent = range.value;
});
