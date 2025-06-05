let age = 30;

const ageminimum = 18;

console.log(age >= ageminimum);

// document.querySelector("p").style.backgroundColor("red");

// document.querySelector("p").style.backgroundColor = "red";

// let plus = "+";

// let moins = "-";

// let multiplier = "*";

// let diviser = "/";

// VARIABLES ET OPERATIONS

let cinq = 5;
let trois = 3;

let résultat;

résultat = cinq + trois;

console.log(résultat);

let dix = 10;
let sept = 7;

résultat = dix - sept;

console.log(résultat);

let quatre = 4;
let six = 6;

résultat = quatre * six;

console.log(résultat);

let deux = 2;

résultat = 10 % 7;

console.log(résultat);

résultat = sept ** deux;

console.log(résultat);

// CONCATÉNAGE

let text = "Bonjour";

text = text + " je m'apelle Romain";

console.log(text);

let prenom = "John";

let nom = " Doe";

texte = prenom + nom;

console.log(texte);

let sujet = `Le chat`;

let verbe = " mange";

let objet = " la souris";

texte = sujet + verbe + objet;

console.log(texte);

// FONCTION

let bjr = `Bonjour, `;

function saluer(a) {
  return bjr + a;
}

console.log(saluer("Alice !"));

let nombre7 = 7;
let nombre8 = 8;

function multiplier(a, b) {
  return a * b;
}

let resultat = multiplier(7, 8);

console.log("Résultats de l'addition :", resultat);

// TABLEAU

let tableau = [1, 2, 3, 4, 5];

console.log(tableau);
console.table(tableau);

console.log(tableau[0]);
console.log(tableau[1]);
console.log(tableau[2]);
console.log(tableau[3]);
console.log(tableau[4]);

let tab = [];
tab.push(10, 20, 30);
tab.shift();

console.log(tab);

let personne = {
  nom: `Alice`,
  age: 25,
  ville: `Paris`,
};

console.log(personne);

let compte = {
  solde: 1000,
  titulaire: `John Doe`,
};

// let ajout = 500;

compte.solde = compte.solde + 500;

console.log(compte);

//  CONDITION & BOUCLES

let years = 19;

function ageRequired(years) {
  if (years >= 18) {
    console.log("Majeur");
  } else {
    console.log("Mineur");
  }
}

ageRequired(years);

// OPTIMISER RETURN POUR LES FONCTIONS

// function verifAge(age){
//     if (age >= 18){
//         return "majeur";
//     }
//     else {
//         return "mineur";
//     }
// }

// let verif = verifAge(18);
// console.log(verif);

// EXEMPLE BOUCLES

// let tab = ["Bordeaux", "Montpellier", "Toulouse", "Dunkerque"]
// console.log(tab.length);

// let mot = ""
// console.log(tab[0].length);

// for (let i = 0; i < tab[0].length; i = i + 1) {
//     mot += tab[0][i]
//     console.log(mot);
// }


// BOUCLES :

for (let i = 0; i <= 20; i += 2) console.log(i);

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// BOUCLES WHILE :

let secretNumber = 0;

while (secretNumber != 7) {
  secretNumber = prompt("Devine entre 1 et 100");

  if (secretNumber < 7) {
    alert("C'est plus !");
  } else if (secretNumber > 7) {
    alert("C'est moins !");
  }

  if (secretNumber == 7) {
    alert("Bravo ! Vous avez deviné le bon nombre !");
  }
}

// EXO FUNCTION MOIS / ANNÉE :


let janvier = 1 ;
let 1 = 31 ;