// Création d'un menu burger :

// A l'aide de toggle(), ajoutez ou supprimez une classe
// qui permettra l'affichage ou non d'un menu burger

let menuBurger = document.querySelector(".responsive");

document.addEventListener("click", () => {
  menuBurger.classList.toggle("addBurger");
});
