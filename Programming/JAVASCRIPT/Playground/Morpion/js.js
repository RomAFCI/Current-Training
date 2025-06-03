// 1er projet : Faire un jeu de morpion

// première étape : le brainstorming

// Résultat : 
// Croix,(img ou background)
// Rond,(img ou background)
// Grille, (grid)
// Système de tour par tour croix = 0(joueur1), rond= 1(joueur2) (selon le départ change les background image à changer)
// Gérer la condition de victoire et de match nul (compteur 9 tour ou comparaison entre les cases),
// Compteur de points (text box),
// Animation en cas de victoire (Ligne par exemple pour valider la victoire visuellement),
// Bouton "Démarrer la partie"(reset joueur, initialiser la partie, reset point cases img),

// Optionnel :
// Choix des noms,
// Pizza à la place des ronds


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

const cross = document



let playerOne = '0';


function clickable(event){
    const cell = event.target;

    if(cell.classList.contains('case1'))
        console.log('1');
     if(cell.classList.contains('case2'))
        console.log('2');
    if(cell.classList.contains('case3'))
        console.log('3');
    if(cell.classList.contains('case4'))
        console.log('4');
    if(cell.classList.contains('case5'))
        console.log('5');
    if(cell.classList.contains('case6'))
        console.log('6');
    if(cell.classList.contains('case7'))
        console.log('7');
    if(cell.classList.contains('case8'))
        console.log('8');
    if(cell.classList.contains('case9'))
        console.log('9');

}

grid.addEventListener("click", clickable)