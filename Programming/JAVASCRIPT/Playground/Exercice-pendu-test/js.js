// DÉCLARATION

const words = [
  "console",
  "pixel",
  "manette",
  "boss",
  "niveaux",
  "joueur",
  "multijoueur",
  "solo",
  "quêtes",
  "loot",
  "inventaire",
  "respawn",
  "checkpoint",
  "fps",
  "rpg",
  "arcade",
  "score",
  "gameplay",
  "bonus",
  "combo",
  "mission",
  "aventure",
  "gamer",
  "joystick",
  "skin",
  "avatar",
  "ennemi",
  "allié",
  "équipe",
  "serveur",
  "recompense",
  "glitch",
  "succès",
  "trophée",
  "cinématique",
  "pause",
  "option",
  "attaque",
  "défense",
  "stratégie",
  "simulation",
  "interface",
  "mode",
  "graphismes",
  "niveau",
  "bataille",
  "compétence",
  "vie",
  "energie",
  "armure",
];

const wordsRandom = Math.floor(Math.random() * words.length);
const wordsFound = words[wordsRandom];
const input = document.querySelector(".input");
const goodLetters = [];
const triedLetters = [];

console.log(wordsFound);

// EVENT

input.addEventListener("keydown", () => {
  let text = input.value;
  input.value = "";

  console.log((input.value = text));

  if ((text = wordsFound)) {
    console.log("bravo!");
  }
});

// FUNCTION 

// 💡❔ Spread operator ❔💡

function searchGoodLetters () {

}

// TABLEAU


words.forEach (function (words){
  console.log(words);
  
})

// 📓 NOTES:

// Verifier la longueur du mot en tableau peu importe sa taille avec lenght
// console.log(answer[2]);
// console.log(answer.length);
