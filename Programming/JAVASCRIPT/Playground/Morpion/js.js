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

let player = 0;

// EVENT

case1.addEventListener("click", () => {
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
  victory();
});

case2.addEventListener("click", () => {
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
  victory();
});

case3.addEventListener("click", () => {
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
  victory();
});

case4.addEventListener("click", () => {
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
  victory();
});

case5.addEventListener("click", () => {
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
  victory();
});

case6.addEventListener("click", () => {
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
  victory();
});

case7.addEventListener("click", () => {
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
  victory();
});

case8.addEventListener("click", () => {
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
  victory();
});
case9.addEventListener("click", () => {
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
  victory();
});

// FUNCTION
// Victoire X

function victory() {
  if (
    case1.classList.contains("cross") &&
    case2.classList.contains("cross") &&
    case3.classList.contains("cross")
  ) {
    console.log("C'est gagné pour les X!")
    return true;
  }

  if (
    case4.classList.contains("cross") &&
    case5.classList.contains("cross") &&
    case6.classList.contains("cross")
  ) {
    console.log("C'est gagné pour les X!");
    return true;
  }

  if (
    case7.classList.contains("cross") &&
    case8.classList.contains("cross") &&
    case9.classList.contains("cross")
  ) {
    console.log("C'est gagné pour les X!");
    return true;
  }

  if (
    case1.classList.contains("cross") &&
    case4.classList.contains("cross") &&
    case7.classList.contains("cross")
  ) {
    console.log("C'est gagné pour les X!");
    return true;
  }

  if (
    case2.classList.contains("cross") &&
    case5.classList.contains("cross") &&
    case8.classList.contains("cross")
  ) {
    console.log("C'est gagné pour les X!");
    return true;
  }

  if (
    case3.classList.contains("cross") &&
    case6.classList.contains("cross") &&
    case9.classList.contains("cross")
  ) {
    console.log("C'est gagné pour les X!");
    return true;
  }

  if (
    case1.classList.contains("cross") &&
    case5.classList.contains("cross") &&
    case9.classList.contains("cross")
  ) {
    console.log("C'est gagné pour les X!");
    return true;
  }

  if (
    case3.classList.contains("cross") &&
    case5.classList.contains("cross") &&
    case7.classList.contains("cross")
  ) {
    console.log("C'est gagné pour les X!");
    return true;
  }

  // Victoire O

  if (
    case1.classList.contains("round") &&
    case2.classList.contains("round") &&
    case3.classList.contains("round")
  ) {
    console.log("C'est gagné pour les O!");
    return true;
  }

  if (
    case4.classList.contains("round") &&
    case5.classList.contains("round") &&
    case6.classList.contains("round")
  ) {
    console.log("C'est gagné pour les O!");
    return true;
  }

  if (
    case7.classList.contains("round") &&
    case8.classList.contains("round") &&
    case9.classList.contains("round")
  ) {
    console.log("C'est gagné pour les O!");
    return true;
  }

  if (
    case1.classList.contains("round") &&
    case4.classList.contains("round") &&
    case7.classList.contains("round")
  ) {
    console.log("C'est gagné pour les O!");
    return true;
  }

  if (
    case2.classList.contains("round") &&
    case5.classList.contains("round") &&
    case8.classList.contains("round")
  ) {
    console.log("C'est gagné pour les O!");
    return true;
  }

  if (
    case3.classList.contains("round") &&
    case6.classList.contains("round") &&
    case9.classList.contains("round")
  ) {
    console.log("C'est gagné pour les O!");
    return true;
  }

  if (
    case1.classList.contains("round") &&
    case5.classList.contains("round") &&
    case9.classList.contains("round")
  ) {
    console.log("C'est gagné pour les O!");
    return true;
  }

  if (
    case3.classList.contains("round") &&
    case5.classList.contains("round") &&
    case7.classList.contains("round")
  ) {
    console.log("C'est gagné pour les O!");
    return true;
  }

}


function egality (tour) {
if (victory != true && tour == 9) {return true} ;

else (return )
}


for (let tour = 1; tour <= 9; i++) {
    console.log(tour);
}