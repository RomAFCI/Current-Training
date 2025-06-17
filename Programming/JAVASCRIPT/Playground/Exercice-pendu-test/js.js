// DeCLARATION

let words = [
  "console",
  "pixel",
  "manette",
  "boss",
  "niveaux",
  "joueur",
  "multijoueur",
  "solo",
  "quetes",
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
  "allie",
  "equipe",
  "serveur",
  "recompense",
  "glitch",
  "succes",
  "trophee",
  "cinematique",
  "pause",
  "option",
  "attaque",
  "defense",
  "strategie",
  "simulation",
  "interface",
  "mode",
  "graphismes",
  "niveau",
  "bataille",
  "competence",
  "vie",
  "energie",
  "armure",
];

let letter;
let answer = document.querySelector(".answer");
let input = document.querySelector(".input");
let error = 0;

let wordsRandom = Math.floor(Math.random() * words.length);
let wordsFound = words[wordsRandom];
console.log(wordsFound);

let tabWordsTransform = wordsFound.split("");
console.log(tabWordsTransform);

let tabAnswer = new Array(tabWordsTransform.length);
let check = false;

let announcement = document.querySelector(".announcement");

// FUNCTION

function searchGoodLetters() {
  for (let i = 0; i < tabWordsTransform.length; i++) {
    if (letter == tabWordsTransform[i]) {
      tabAnswer[i] = letter;
      console.log(tabAnswer);
      answer.textContent = tabAnswer.toString("");
      announcement.textContent = "Bonne reponse";
      check = true;
    }
  }
  if (check == false) {
    announcement.textContent = "Essaye encore";
    error++;
  }

  if (tabWordsTransform.toString() == tabAnswer.toString()) {
    console.log("Gagné");
    announcement.textContent = "Gagné";
    input.disabled = true;
  }

  if (error >= 12) {
     announcement.textContent = "Perdu";
    input.disabled = true;
  }

  check = false;
}

// EVENT

input.addEventListener("keypress", (event) => {
  letter = event.key;
  console.log(input.value);

  input.value = "";

  //console.log(letter);

  if (!letter.match(/^[a-zA-Z]$/)) {
    announcement.textContent = "ecrit une lettre entre a et z";

    return;
  }

  searchGoodLetters();
});

//   })

// }

// TABLEAU

// words.forEach (function (words){
//   console.log(words);

// })

// 📓 NOTES:

// toString
// La méthode toString() renvoie une chaîne de caractères représentant l'objet.

// Verifier la longueur du mot en tableau peu importe sa taille avec lenght
// console.log(answer[2]);
// console.log(answer.length);

// 💡❔ Spread operator ❔💡
