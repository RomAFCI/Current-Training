//  🔁 Compter de 1 à 10 Objectif :
// Utiliser une boucle while pour afficher les nombres de 1 à 10 dans la console.

let number = 1;

while (number <= 10) {
  console.log(number);
  number++;
}

// 🔁 Somme des nombres de 1 à 100 Objectif :
// Calcule la somme des nombres de 1 à 100.

let somme = 1;
let sommeTotal = 0;

while (somme <= 100) {
  sommeTotal = sommeTotal + somme;
  somme++;
}

console.log(sommeTotal);

// 🔁 Deviner un nombre Objectif :
// Demander à l'utilisateur de deviner un nombre entre 1 et 10
// jusqu'à ce qu’il trouve la bonne réponse.

// ⚠️ MIS EN COMMENTAIRE POUR EVITER CONFLIT ⚠️
// let secretNumber = 0;

// while (secretNumber != 7) {
//   secretNumber = prompt("Devine entre 1 et 10");

//   if (secretNumber < 7) {
//     alert("C'est plus !");
//   }

//   if (secretNumber > 7) {
//     alert("C'est moins !");
//   }

//   if (secretNumber == 7) {
//     alert("Bravo ! Vous avez deviné le bon nombre !");
//   }
// }

//   🔁 Entrée valide Objectif :
//   Demander à l'utilisateur d'entrer "oui" ou "non",
//   jusqu'à ce qu'il donne une réponse valide.


let réponse;
let oui = "oui";
let non = "non";

while (réponse !== oui && réponse !== non) {
  réponse = prompt("oui ou non ?");

  if (réponse !== oui && réponse !== non) {
    alert("répond par oui ou non");
  }

}

//   🔁 Afficher les nombres pairs jusqu’à un nombre donné Objectif :
//   Demander un nombre à l'utilisateur et afficher tous
//   les nombres pairs jusqu'à ce nombre. -->

