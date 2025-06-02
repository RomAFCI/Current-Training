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

let cross = document.querySelector(".cross");

console.log(cross);

cross.addEventListener(
    "click",
     () => {
    cross.style.opacity = "1";
     })