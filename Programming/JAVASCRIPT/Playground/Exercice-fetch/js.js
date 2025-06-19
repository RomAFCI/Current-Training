//  API Pour trouver des mots
// fetch("https://trouve-mot.fr/api/random/2")
//     .then((response) => response.json())
//     .then((words) => console.log(words))

function exoFetch() {
  let h1 = document.createElement("h1");
  let h1Text = document.createTextNode("Liste de mots");
  h1.appendChild(h1Text);
  document.body.appendChild(h1);

  fetch("https://trouve-mot.fr/api/startwith/A")
    .then((response) => response.json())
    .then((data) => {
      let mot = data;
      let p1 = document.createElement("p");
      let p1Text = document.createTextNode(mot);
      p1.appendChild(p1Text);
      document.body.appendChild(p1);
      console.log(data);
      
    });
}

exoFetch();

// 📓 NOTES
// EXEMPLE -> trouver un mot aléatoire avec une API,
// tout en créant un élément html en JS
// fetch("https://trouve-mot.fr/api/random/2")
//   .then((response) => response.json())
//   .then((data) => {
//     const word = data[0]; // Le mot récupéré
//     const p = document.createElement("p"); // Création de <p>
//     const pText = document.createTextNode(word); // Création du texte
//     p.appendChild(pText); // Ajout du texte dans le <p>
//     document.body.appendChild(p); // Ajout du <p> dans la page

// --> n'affiche pas le mot 
// autre exemple pour affcicher le mot en HTML :

//   fetch("https://trouve-mot.fr/api/startwith/A")
//     .then((response) => response.json())
//     .then((data) => {
//       // data est un tableau de mots
//       data.forEach((mot) => {
//         let p = document.createElement("p");
//         p.textContent = mot; // plus simple que createTextNode
//         document.body.appendChild(p);
//       });

//       console.log(data);
//     });


