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
let février = 2 ;
let mars = 3 ;
let avril = 4 ;
let mai = 5 ;
let juin = 6 ;
let juillet = 7 ;
let aout = 8 ;
let septembre = 9 ;
let octobre = 10 ;
let novembre = 11 ;
let decembre = 12 ;



function calendar () {
  
}