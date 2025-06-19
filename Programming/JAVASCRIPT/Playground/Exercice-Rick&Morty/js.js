// Tableau fetch
// fetch("https://rickandmortyapi.com/api/character")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// DÉCLARATION
let body = document.querySelector("body");
let cards = document.querySelector(".cards");

// API
//   Récupére l'API en ligne de Rick&Morty.
fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => {
    // data.results contient un tableau de personnages
    data.results.forEach((perso) => {
      // Création d'élément "div" en HTML
      let div = document.createElement("div");
      body.appendChild(div);

    //   div.appendChild(cards);

      let p = document.createElement("p");
      p.textContent = perso.name;
      body.appendChild(p);

      let img = document.createElement("img");
      img.src = perso.image;
      body.appendChild(img);
    });
  });
