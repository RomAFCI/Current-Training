let divBase = document.querySelector(".divBase");
let divPoteau = document.querySelector(".divPoteau");
let divPoutre = document.querySelector(".divPoutre");
let divSquare = document.querySelector(".divSquare");
let divCorde = document.querySelector(".divCorde");
let divTete = document.querySelector(".divTete");
let divCorps = document.querySelector(".divCorps");
let divJambeGauche = document.querySelector(".divJambeGauche");
let divJambeDroite = document.querySelector(".divJambeDroite");
let divBrasGauche = document.querySelector(".divBrasGauche");
let divBrasDroit = document.querySelector(".divBrasDroit");
let divVisage = document.querySelector(".divVisage");

let saisie = document.querySelector(".inputStyle");
let envoi = document.querySelector(".btnStyle");

let motSecret = document.querySelector(".motSecret");

let answer = "trucmuche";
let goodLetters = [];

// Verifier la longueur du mot en tableau peu importe sa taille avec lenght
// console.log(answer[2]);
// console.log(answer.length);

// NOTES:
// preventDefault();  empêche le rechargement de la page
// match(/^[a-zA-Z]$/) - Vérifie si c’est une lettre (a-z)

envoi.addEventListener("click", (event) => {
  event.preventDefault();

  let texte = saisie.value;
  saisie.value = "";

  if (!texte.match(/^[a-zA-Z]$/)) {
    motSecret.textContent = "Entre une seule lettre entre a et z !";
    return;
  }
  if (answer.includes(texte)) {
    motSecret.textContent = goodLetters;

    if (!goodLetters.includes(texte)) {
      goodLetters.push(texte);
    }
    console.log(goodLetters);
  } else {
    motSecret.textContent = `Essaye encore`;
  }
});
