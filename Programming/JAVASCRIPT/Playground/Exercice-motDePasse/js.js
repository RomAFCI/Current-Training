let range = document.querySelector(".range");
let info = document.querySelector(".info");

// récupére les input checked
let boxChecked = document.querySelectorAll(".boxChecked");

let min = document.querySelector(".min");
let maj = document.querySelector(".maj");
let nbr = document.querySelector(".nbr");
let sym = document.querySelector(".sym");

let dataTab = [];
let minTab = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
let majTab = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
];
let nbrTab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let symTab = ["!", "@", "#", "$", "%"];

let btnSubmit = document.querySelector(".btnSubmit");
let passwordCreated = "";

// RANGE affichage html définition du nombre de caractére dans le mot
range.addEventListener("input", () => {
  console.log(range.value);

  info.textContent = range.value;
});

// Ajout de donnée dans un tableu pour tout les caractere avec les boxchecked

boxChecked.forEach((element) => {
  element.addEventListener("input", () => {
    dataTab = [];
    if (min.checked) {
      minTab.forEach((element) => {
        dataTab.push(element);
      });
    }
    if (maj.checked) {
      majTab.forEach((element) => {
        dataTab.push(element);
      });
    }
    if (nbr.checked) {
      nbrTab.forEach((element) => {
        dataTab.push(element);
      });
    }
    if (sym.checked) {
      symTab.forEach((element) => {
        dataTab.push(element);
      });
    }
    console.log(dataTab);
    return dataTab;
  });
});

// bouton d'envoi pour la génération de mot de passe
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  passwordCreated = "";

  for (let index = 0; index < range.value; index++) {
    let letterPassword = Math.floor(Math.random() * dataTab.length);
    passwordCreated += dataTab[letterPassword];
  }

  // if ? -> si le mot de passe ne comporte pas les caractères demandé ⁉️

  console.log(passwordCreated);
});
