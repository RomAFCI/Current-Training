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

let letter;

const wordsRandom = Math.floor(Math.random() * words.length);
const wordsFound = words[wordsRandom];
console.log(wordsFound);

const tabWordsTransform = wordsFound.split("");
console.log(tabWordsTransform);

const input = document.querySelector(".input");

// const goodLetters = [];
// const triedLetters = [];
// const error = 0;

const announcement = document.querySelector(".announcement");

// EVENT

input.addEventListener("keypress", (event) => {
  letter = event.key;
  
  console.log(letter);
  
  if (!letter.match(/^[a-zA-Z]$/)) {
    announcement.textContent = "écrit une lettre entre a et z";

    return;
  }

  searchGoodLetters();
});

// FUNCTION

function searchGoodLetters() {

for (let i = 0; i < tabWordsTransform.length; i++) {
   
if (letter == [i]){

}
console.log([i]);

}

    
 
}
//   })

// }

// TABLEAU

// words.forEach (function (words){
//   console.log(words);

// })

// 📓 NOTES:

// Verifier la longueur du mot en tableau peu importe sa taille avec lenght
// console.log(answer[2]);
// console.log(answer.length);
// 💡❔ Spread operator ❔💡
