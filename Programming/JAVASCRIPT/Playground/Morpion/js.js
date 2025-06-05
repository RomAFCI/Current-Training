// DÉCLARATION

const grid = document.querySelector(".grid");
console.log(grid);

const case1 = document.querySelector(".case1");
const case2 = document.querySelector(".case2");
const case3 = document.querySelector(".case3");
const case4 = document.querySelector(".case4");
const case5 = document.querySelector(".case5");
const case6 = document.querySelector(".case6");
const case7 = document.querySelector(".case7");
const case8 = document.querySelector(".case8");
const case9 = document.querySelector(".case9");

const cross = document.querySelector(".cross");
const round = document.querySelector(".round");

const buttonDepart = document.querySelector(".buttonDepart");

let pointsX = 0;
let pointsO = 0;
document.querySelector(".scoreX").textContent = pointsX;
document.querySelector(".scoreO").textContent = pointsO;

let player = 0;
let turn = 0;

let gameInProgress = false;

// EVENT

case1.addEventListener("click", () => {
  if (!gameInProgress) return;

  if (case1.classList.contains("cross") || case1.classList.contains("round")) {
    return;
  }

  if (player == 0) {
    case1.classList.add("cross");
    player = 1;
  } else {
    case1.classList.add("round");
    player = 0;
  }

  turn++;

  victory();

  if (turn >= 9) {
    gameInProgress = false;
  }
});

case2.addEventListener("click", () => {
  if (!gameInProgress) return;

  if (case2.classList.contains("cross") || case2.classList.contains("round")) {
    return;
  }

  if (player == 0) {
    case2.classList.add("cross");
    player = 1;
  } else {
    case2.classList.add("round");
    player = 0;
  }
  turn++;

  victory();

  if (turn >= 9) {
    gameInProgress = false;
    afficherMessage("Match nul !");
  }
});

case3.addEventListener("click", () => {
  if (!gameInProgress) return;

  if (case3.classList.contains("cross") || case3.classList.contains("round")) {
    return;
  }

  if (player == 0) {
    case3.classList.add("cross");
    player = 1;
  } else {
    case3.classList.add("round");
    player = 0;
  }

  turn++;

  victory();

  if (turn >= 9) {
    gameInProgress = false;
    afficherMessage("Match nul !");
  }
});

case4.addEventListener("click", () => {
  if (!gameInProgress) return;

  if (case4.classList.contains("cross") || case4.classList.contains("round")) {
    return;
  }
  if (player == 0) {
    case4.classList.add("cross");
    player = 1;
  } else {
    case4.classList.add("round");
    player = 0;
  }

  turn++;

  victory();

  if (turn >= 9) {
    gameInProgress = false;
    afficherMessage("Match nul !");
  }
});

case5.addEventListener("click", () => {
  if (!gameInProgress) return;

  if (case5.classList.contains("cross") || case5.classList.contains("round")) {
    return;
  }
  if (player == 0) {
    case5.classList.add("cross");
    player = 1;
  } else {
    case5.classList.add("round");
    player = 0;
  }

  turn++;

  victory();

  if (turn >= 9) {
    gameInProgress = false;
    afficherMessage("Match nul !");
  }
});

case6.addEventListener("click", () => {
  if (!gameInProgress) return;

  if (case6.classList.contains("cross") || case6.classList.contains("round")) {
    return;
  }
  if (player == 0) {
    case6.classList.add("cross");
    player = 1;
  } else {
    case6.classList.add("round");
    player = 0;
  }

  turn++;

  victory();

  if (turn >= 9) {
    gameInProgress = false;
    afficherMessage("Match nul !");
  }
});

case7.addEventListener("click", () => {
  if (!gameInProgress) return;

  if (case7.classList.contains("cross") || case7.classList.contains("round")) {
    return;
  }
  if (player == 0) {
    case7.classList.add("cross");
    player = 1;
  } else {
    case7.classList.add("round");
    player = 0;
  }

  turn++;

  victory();

  if (turn >= 9) {
    gameInProgress = false;
    afficherMessage("Match nul !");
  }
});

case8.addEventListener("click", () => {
  if (!gameInProgress) return;

  if (case8.classList.contains("cross") || case8.classList.contains("round")) {
    return;
  }
  if (player == 0) {
    case8.classList.add("cross");
    player = 1;
  } else {
    case8.classList.add("round");
    player = 0;
  }

  turn++;

  victory();

  if (turn >= 9) {
    gameInProgress = false;
    afficherMessage("Match nul !");
  }
});
case9.addEventListener("click", () => {
  if (!gameInProgress) return;

  if (case9.classList.contains("cross") || case9.classList.contains("round")) {
    return;
  }
  if (player == 0) {
    case9.classList.add("cross");
    player = 1;
  } else {
    case9.classList.add("round");
    player = 0;
  }

  turn++;

  victory();

  if (turn >= 9) {
    gameInProgress = false;
    afficherMessage("Match nul !");
  }
});

// FUNCTION
// Victoire X

function victory() {
  if (
    case1.classList.contains("cross") &&
    case2.classList.contains("cross") &&
    case3.classList.contains("cross")
  ) {
    console.log("C'est gagné pour les X!");
    pointsX++; // ✖️ ajoute 1 point à X
    document.querySelector(".scoreX").textContent = pointsX;
    case1.style.backgroundColor = "#ff8f2d";
    case2.style.backgroundColor = "#ff8f2d";
    case3.style.backgroundColor = "#ff8f2d";
    console.log("Points X :", pointsX);

    gameInProgress = false;
    return;
  }

  if (
    case4.classList.contains("cross") &&
    case5.classList.contains("cross") &&
    case6.classList.contains("cross")
  ) {
    console.log("C'est gagné pour les X!");
    pointsX++; // ✖️ ajoute 1 point à X
    document.querySelector(".scoreX").textContent = pointsX;
    case4.style.backgroundColor = "#ff8f2d";
    case5.style.backgroundColor = "#ff8f2d";
    case6.style.backgroundColor = "#ff8f2d";
    console.log("Points X :", pointsX);

    gameInProgress = false;
    return;
  }

  if (
    case7.classList.contains("cross") &&
    case8.classList.contains("cross") &&
    case9.classList.contains("cross")
  ) {
    console.log("C'est gagné pour les X!");
    pointsX++; // ✖️ ajoute 1 point à X
    document.querySelector(".scoreX").textContent = pointsX;
    case7.style.backgroundColor = "#ff8f2d";
    case8.style.backgroundColor = "#ff8f2d";
    case9.style.backgroundColor = "#ff8f2d";
    console.log("Points X :", pointsX);

    gameInProgress = false;
    return;
  }

  if (
    case1.classList.contains("cross") &&
    case4.classList.contains("cross") &&
    case7.classList.contains("cross")
  ) {
    console.log("C'est gagné pour les X!");
    pointsX++; // ✖️ ajoute 1 point à X
    document.querySelector(".scoreX").textContent = pointsX;
    case1.style.backgroundColor = "#ff8f2d";
    case4.style.backgroundColor = "#ff8f2d";
    case7.style.backgroundColor = "#ff8f2d";
    console.log("Points X :", pointsX);

    gameInProgress = false;
    return;
  }

  if (
    case2.classList.contains("cross") &&
    case5.classList.contains("cross") &&
    case8.classList.contains("cross")
  ) {
    console.log("C'est gagné pour les X!");
    pointsX++; // ✖️ ajoute 1 point à X
    document.querySelector(".scoreX").textContent = pointsX;
    case2.style.backgroundColor = "#ff8f2d";
    case5.style.backgroundColor = "#ff8f2d";
    case8.style.backgroundColor = "#ff8f2d";
    console.log("Points X :", pointsX);

    gameInProgress = false;
    return;
  }

  if (
    case3.classList.contains("cross") &&
    case6.classList.contains("cross") &&
    case9.classList.contains("cross")
  ) {
    console.log("C'est gagné pour les X!");
    pointsX++; // ✖️ ajoute 1 point à X
    document.querySelector(".scoreX").textContent = pointsX;
    case3.style.backgroundColor = "#ff8f2d";
    case6.style.backgroundColor = "#ff8f2d";
    case9.style.backgroundColor = "#ff8f2d";
    console.log("Points X :", pointsX);

    gameInProgress = false;
    return;
  }

  if (
    case1.classList.contains("cross") &&
    case5.classList.contains("cross") &&
    case9.classList.contains("cross")
  ) {
    console.log("C'est gagné pour les X!");
    pointsX++; // ✖️ ajoute 1 point à X
    document.querySelector(".scoreX").textContent = pointsX;
    case1.style.backgroundColor = "#ff8f2d";
    case5.style.backgroundColor = "#ff8f2d";
    case9.style.backgroundColor = "#ff8f2d";
    console.log("Points X :", pointsX);

    gameInProgress = false;
    return;
  }

  if (
    case3.classList.contains("cross") &&
    case5.classList.contains("cross") &&
    case7.classList.contains("cross")
  ) {
    console.log("C'est gagné pour les X!");
    pointsX++; // ✖️ ajoute 1 point à X
    document.querySelector(".scoreX").textContent = pointsX;
    case3.style.backgroundColor = "#ff8f2d";
    case5.style.backgroundColor = "#ff8f2d";
    case7.style.backgroundColor = "#ff8f2d";
    console.log("Points X :", pointsX);

    gameInProgress = false;
    return;
  }

  // Victoire O

  if (
    case1.classList.contains("round") &&
    case2.classList.contains("round") &&
    case3.classList.contains("round")
  ) {
    console.log("C'est gagné pour les O!");
    pointsO++; // ⭕ ajoute 1 point à O
    document.querySelector(".scoreO").textContent = pointsO;
    case1.style.backgroundColor = "#ff8f2d";
    case2.style.backgroundColor = "#ff8f2d";
    case3.style.backgroundColor = "#ff8f2d";
    console.log("Points O :", pointsO);

    gameInProgress = false;
    return;
  }

  if (
    case4.classList.contains("round") &&
    case5.classList.contains("round") &&
    case6.classList.contains("round")
  ) {
    console.log("C'est gagné pour les O!");
    pointsO++; // ⭕ ajoute 1 point à O
    document.querySelector(".scoreO").textContent = pointsO;
    case4.style.backgroundColor = "#ff8f2d";
    case5.style.backgroundColor = "#ff8f2d";
    case6.style.backgroundColor = "#ff8f2d";
    console.log("Points O :", pointsO);

    gameInProgress = false;
    return;
  }

  if (
    case7.classList.contains("round") &&
    case8.classList.contains("round") &&
    case9.classList.contains("round")
  ) {
    console.log("C'est gagné pour les O!");
    pointsO++; // ⭕ ajoute 1 point à O
    document.querySelector(".scoreO").textContent = pointsO;
    case7.style.backgroundColor = "#ff8f2d";
    case8.style.backgroundColor = "#ff8f2d";
    case9.style.backgroundColor = "#ff8f2d";
    console.log("Points O :", pointsO);

    gameInProgress = false;
    return;
  }

  if (
    case1.classList.contains("round") &&
    case4.classList.contains("round") &&
    case7.classList.contains("round")
  ) {
    console.log("C'est gagné pour les O!");
    pointsO++; // ⭕ ajoute 1 point à O
    document.querySelector(".scoreO").textContent = pointsO;
    case1.style.backgroundColor = "#ff8f2d";
    case4.style.backgroundColor = "#ff8f2d";
    case7.style.backgroundColor = "#ff8f2d";
    console.log("Points O :", pointsO);

    gameInProgress = false;
    return;
  }

  if (
    case2.classList.contains("round") &&
    case5.classList.contains("round") &&
    case8.classList.contains("round")
  ) {
    console.log("C'est gagné pour les O!");
    pointsO++; // ⭕ ajoute 1 point à O
    document.querySelector(".scoreO").textContent = pointsO;
    case2.style.backgroundColor = "#ff8f2d";
    case5.style.backgroundColor = "#ff8f2d";
    case8.style.backgroundColor = "#ff8f2d";
    console.log("Points O :", pointsO);

    gameInProgress = false;
    return;
  }

  if (
    case3.classList.contains("round") &&
    case6.classList.contains("round") &&
    case9.classList.contains("round")
  ) {
    console.log("C'est gagné pour les O!");
    pointsO++; // ⭕ ajoute 1 point à O
    document.querySelector(".scoreO").textContent = pointsO;
    case3.style.backgroundColor = "#ff8f2d";
    case6.style.backgroundColor = "#ff8f2d";
    case9.style.backgroundColor = "#ff8f2d";
    console.log("Points O :", pointsO);

    gameInProgress = false;
    return;
  }

  if (
    case1.classList.contains("round") &&
    case5.classList.contains("round") &&
    case9.classList.contains("round")
  ) {
    console.log("C'est gagné pour les O!");
    pointsO++; // ⭕ ajoute 1 point à O
    document.querySelector(".scoreO").textContent = pointsO;
    case1.style.backgroundColor = "#ff8f2d";
    case5.style.backgroundColor = "#ff8f2d";
    case9.style.backgroundColor = "#ff8f2d";
    console.log("Points O :", pointsO);

    gameInProgress = false;
    return;
  }

  if (
    case3.classList.contains("round") &&
    case5.classList.contains("round") &&
    case7.classList.contains("round")
  ) {
    console.log("C'est gagné pour les O!");
    pointsO++; // ⭕ ajoute 1 point à O
    document.querySelector(".scoreO").textContent = pointsO;
    case3.style.backgroundColor = "#ff8f2d";
    case5.style.backgroundColor = "#ff8f2d";
    case7.style.backgroundColor = "#ff8f2d";
    console.log("Points O :", pointsO);

    gameInProgress = false;
    return;
  }
}

function afficherMessage(msg) {
  document.querySelector(".message").textContent = msg;
}

// BOUTON DEMARRAGE RESET :

buttonDepart.addEventListener("click", function () {
  // Réinitialise les cases
  case1.classList.remove("cross", "round");
  case2.classList.remove("cross", "round");
  case3.classList.remove("cross", "round");
  case4.classList.remove("cross", "round");
  case5.classList.remove("cross", "round");
  case6.classList.remove("cross", "round");
  case7.classList.remove("cross", "round");
  case8.classList.remove("cross", "round");
  case9.classList.remove("cross", "round");

  case1.style.backgroundColor = "#5294a8";
  case2.style.backgroundColor = "#5294a8";
  case3.style.backgroundColor = "#5294a8";
  case4.style.backgroundColor = "#5294a8";
  case5.style.backgroundColor = "#5294a8";
  case6.style.backgroundColor = "#5294a8";
  case7.style.backgroundColor = "#5294a8";
  case8.style.backgroundColor = "#5294a8";
  case9.style.backgroundColor = "#5294a8";

  // 🔄 Réinitialiser le message
  document.querySelector(".message").textContent = "";

  // Réinitialise les variables
  player = 0;
  turn = 0;
  gameInProgress = true;

  // Change le texte du bouton
  buttonDepart.textContent = "Relancer";

  console.log("Nouvelle partie !");
});
