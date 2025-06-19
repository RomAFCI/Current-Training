// Tableau fetch
// fetch("https://rickandmortyapi.com/api/character")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

let cards = document.querySelector(".cards");

//   Récupére l'API en ligne de Rick&Morty.
fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => {
    // data.results contient un tableau de personnages
    data.results.forEach((perso) => {
      // Création d'élément p et img en HTML
      const p = document.createElement("p");
      const img = document.createElement("img");
      // Affiche le nom et l'image du personnage
      p.textContent = perso.name;
      img.src = perso.image;

      cards.appendChild(p);
      cards.appendChild(img);
    });
  });

//   fetch("https://rickandmortyapi.com/api/character")
//   .then((response) => response.json())
//   .then((data) => {
//     const container = document.querySelector(".perso1");

//     data.results.forEach((perso) => {
//       const img = document.createElement("img");
//       img.src = perso.image;
//       img.alt = perso.name;
//       img.width = 100;
//       img.style.margin = "10px";

//       container.appendChild(img);
//     });
//   });
