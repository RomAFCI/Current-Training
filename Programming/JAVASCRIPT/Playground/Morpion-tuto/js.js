const grid = document.querySelector(".grid");
const cells = document.querySelectorAll(".case");
const win = document.querySelector(".win");
console.log(grid);

let player = 'x';

const winner = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

function check() {
   return winner.some(combo => {
    return combo.every((index) => cells[index].textContent === player);

    })
}

function switchPlayer(){
    if (player === 'x') {
        player = 'o';
    }
    else if (player === 'o') {
        player = 'x'
    }
}


function clickable(event) {
    const cell = event.target;

    if (!cell.classList.contains("case") || cell.textContent !== "") return;
   cell.textContent = player;

   if(check()){
    win.textContent = player + " gagne !";
   }
   else {
      switchPlayer();
    }
}

grid.addEventListener("click", clickable);