// Tableau fetch
// fetch("https://rickandmortyapi.com/api/character")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// DÉCLARATION
let body = document.querySelector("body");
let cards = document.querySelector(".cards");

for (let page = 1; p <= data.info.pages; page++) {
  // API
  //   Récupére l'API en ligne de Rick&Morty.
  fetch("https://rickandmortyapi.com/api/character?page=${page})")
    .then((response) => response.json())
    .then((data) => {
      // data.results contient un tableau de personnages
      data.results.forEach((perso) => {
        // Création d'élément "div" en HTML
        let div = document.createElement("div");

        div.classList.add("cards");
        body.appendChild(div);

        let p = document.createElement("p");
        p.textContent = perso.name;
        div.appendChild(p);

        let img = document.createElement("img");
        img.src = perso.image;
        div.appendChild(img);
      });
    });
}
