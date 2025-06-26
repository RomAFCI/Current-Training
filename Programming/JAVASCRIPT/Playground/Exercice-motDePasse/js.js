let range = document.querySelector(".range");
let info = document.querySelector(".info");

let check = false;

let btnSubmit = document.querySelector(".btnSubmit");

let min = document.querySelector(".min");
let maj = document.querySelector(".maj");
let nbr = document.querySelector(".nbr");
let sym = document.querySelector(".sym");

range.addEventListener("input", () => {
  console.log(range.value);

  info.textContent = range.value;
});

function chooseLetterNumberSymbol() {
  min.addEventListener("click", () => {
    min.style.backgroundColor = "white";
    check = true;
    if (check == false) {
      min.style.backgroundColor = "red";
    }
  });

  maj.addEventListener("click", () => {
    maj.style.backgroundColor = "white";
  });

  nbr.addEventListener("click", () => {
    nbr.style.backgroundColor = "white";
  });

  sym.addEventListener("click", () => {
    sym.style.backgroundColor = "white";
  });
}

chooseLetterNumberSymbol();

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
});
