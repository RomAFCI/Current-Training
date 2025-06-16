// DECLARATION DU PENDU
// let divBase = document.querySelector(".divBase");
// let divPoteau = document.querySelector(".divPoteau");
// let divPoutre = document.querySelector(".divPoutre");
// let divSquare = document.querySelector(".divSquare");
// let divCorde = document.querySelector(".divCorde");
// let divTete = document.querySelector(".divTete");
// let divCorps = document.querySelector(".divCorps");
// let divJambeGauche = document.querySelector(".divJambeGauche");
// let divJambeDroite = document.querySelector(".divJambeDroite");
// let divBrasGauche = document.querySelector(".divBrasGauche");
// let divBrasDroit = document.querySelector(".divBrasDroit");
// let divVisage = document.querySelector(".divVisage");

let answer = "test";
let goodLetters = [];
let triedLetters = [];

let error = 0;

// DECLARATION DU PENDU EN TABLEAU

let divPendu = [
  document.querySelector(".divBase"),
  document.querySelector(".divPoteau"),
  document.querySelector(".divPoutre"),
  document.querySelector(".divSquare"),
  document.querySelector(".divCorde"),
  document.querySelector(".divTete"),
  document.querySelector(".divCorps"),
  document.querySelector(".divBrasGauche"),
  document.querySelector(".divBrasDroit"),
  document.querySelector(".divJambeGauche"),
  document.querySelector(".divJambeDroite"),
  document.querySelector(".divVisage"),
];

let saisie = document.querySelector(".inputStyle");
let envoi = document.querySelector(".btnStyle");
let motSecret = document.querySelector(".motSecret");
let info = document.querySelector(".info");
let proposition = document.querySelector(".proposition");

// Fonction pour afficher le mot
// A revoir ⚠️
function afficherMot() {
  let affichage = "";

  // On parcourt chaque lettre du mot secret
  for (let i = 0; i < answer.length; i++) {
    let lettre = answer[i];

    // Si la lettre est devinée, on l'affiche
    if (goodLetters.includes(lettre)) {
      affichage += lettre + " ";
    } else {
      // Sinon, on affiche un underscore (_)
      affichage += "_ ";
    }
  }

  // On affiche le résultat dans le HTML
  motSecret.textContent = affichage;
}
//  A revoir ⚠️
function afficherPropositions() {
  proposition.textContent = "Lettres proposées : " + triedLetters.join(", ");
}

// EVENT
// evenement pour les bonnes et mauvaises reponses du pendu

envoi.addEventListener("click", (event) => {
  event.preventDefault();

  let texte = saisie.value;
  saisie.value = "";

  if (!texte.match(/^[a-zA-Z]$/)) {
    info.textContent = "Entre une seule lettre entre a et z !";
    return;
  }
  //  A revoir ⚠️
  // vérification pour empêcher les doublons
  if (triedLetters.includes(texte)) {
    info.textContent = "Tu as déjà essayé cette lettre !";
    return;
  }
  //  A revoir ⚠️
  // Lettre jamais tentée : on l’ajoute
  triedLetters.push(texte);
  afficherPropositions();

  if (answer.includes(texte)) {
    motSecret.textContent = goodLetters;

    if (!goodLetters.includes(texte)) {
      goodLetters.push(texte);
    }

    afficherMot();
    //  A revoir ⚠️
    // Condition de victoire
    if (!motSecret.textContent.includes("_")) {
      info.textContent = "Félicitations !";
      saisie.disabled = true;
      envoi.disabled = true;
    }
  } else {
    // A revoir ⚠️
    // Affiche la prochaine image du pendu
    if (error < divPendu.length) {
      divPendu[error].style.display = "block";
      error++;
      info.textContent = `Essaye encore`;
    }

    // Si toutes les parties sont affichées : perdu
    if (error === divPendu.length) {
      info.textContent = "Perdu !";
      saisie.disabled = true;
      envoi.disabled = true;
    }
  }
});

// 📓 NOTES:

// .join(", ") La concaténation utilise la virgule ou une autre chaîne,
//  fournie en argument, comme séparateur. - permet d'ajouter un espace et une virgule
//  au propositions de lettre.

// preventDefault();  empêche le rechargement de la page

// match(/^[a-zA-Z]$/) - Vérifie si c’est une lettre (a-z)

// Verifier la longueur du mot en tableau peu importe sa taille avec lenght
// console.log(answer[2]);
// console.log(answer.length);
