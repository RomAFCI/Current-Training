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
// MIS EN COMMENTAIRES POUR EVITER CONFLIT
// let secretNumber = 0;

// while (secretNumber != 77) {
//   secretNumber = prompt("Devine entre 1 et 100");

//   if (secretNumber < 77) {
//     alert("C'est plus !");
//   }

//   if (secretNumber > 77) {
//     alert("C'est moins !");
//   }

//   if (secretNumber == 77) {
//     alert("Bravo ! Vous avez deviné le bon nombre !");
//   }
// }




// EXO FUNCTION MOIS / ANNÉE :

// let janvier = 1;
// let février = 2;
// let mars = 3;
// let avril = 4;
// let mai = 5;
// let juin = 6;
// let juillet = 7;
// let aout = 8;
// let septembre = 9;
// let octobre = 10;
// let novembre = 11;
// let decembre = 12;

let mois;
let nombreDeJour;

const bouton = document.querySelector("button");

bouton.addEventListener("click", () => {
  calendar();
});

function calendar() {
  mois = parseInt(prompt("choisis un mois pour connaître le nombre de jour"));

  switch (mois) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      nombreDeJour = 31;
      break;

    case 2:
      let year = parseInt(
        prompt("choisis l'année car le chiffre peux changer")
      );
      if (year % 4 === 0 && year % 100!=0) {
        nombreDeJour = 29;
      } else {
        nombreDeJour = 28;
      }
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      nombreDeJour = 30;
      break;

    default:
      nombreDeJour = "Mois invalide";
  }

  alert(nombreDeJour);
}


// correction switch

function nombreJours (month){

  
  switch (month){
    case 1:
      console.log("31 jours")
      return 31;
    
      case 2:
      console.log("31 jours")
      return 28;
    }
  }

  let jour = nombreDeJour(1);
  console.log(jour);
    