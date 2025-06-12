// Exercice :

// forEach : Affiche chaque nombre du tableau avec ce message :
// "Le nombre est : X"

const nombres = [1, 5, 12, 8, 130, 44];

nombres.forEach(function (nombre) {
  console.log(`Le nombre est : ${nombre}`);
});

// filter : Crée un nouveau tableau grandsNombres
//  qui contient uniquement les nombres supérieurs à 10.

const grandsNombres = [11, 15, 17, 8, 12, 2, 3, 7, 19];

const filtered = grandsNombres.filter((nombres) => {
  return nombres >= 10;
});

console.log(filtered);

// map : Crée un nouveau tableau doubles
// qui contient le double de chaque nombre du tableau de base.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const doubled = numbers.map((number)=> {
  return number * 2;
})

console.log(doubled);
