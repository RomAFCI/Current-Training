let bouton = document.querySelector("button");
let text = document.querySelector("p");

bouton.addEventListener("click", () => {
  text.textContent = "Hello, world !";
});

let bouton2 = document.querySelector(".button2");
let text2 = document.querySelector(".text2");

bouton2.addEventListener("click", () => {
  text2.style.color = "red";
});

let bouton3 = document.querySelector(".button3");
let liste = document.querySelector(".liste");

bouton3.addEventListener("click", () => {
  let li = document.createElement("li");
  liste.appendChild(li);
  li.textContent = "Nouvel élément";
});

let bouton4 = document.querySelector(".button4");
let liste2 = document.querySelector(".liste2");
let li2 = document.querySelector(".li2");

bouton4.addEventListener("click", () => {
  liste2.removeChild(li2);
  // liste2.removeChild(liste2.firstElementChild);
  // Autre utilisation pour éviter conflit et pouvoir tout supprimer un par un.
});

// 1er Test 🔧 :

let button5 = document.querySelector("#button5");
let button6 = document.querySelector("#button6");
let button7 = document.querySelector("#button7");

function gestionEvent() {
  button5.addEventListener("click", (event) => {
    console.log("Bouton cliqué : " + event.target.id);
  });

  button6.addEventListener("click", (event) => {
    console.log("Bouton cliqué : " + event.target.id);
  });

  button7.addEventListener("click", (event) => {
    console.log("Bouton cliqué : " + event.target.id);
  });
}

gestionEvent();

// Correction ⬇️

// let bouton5 = document.querySelector("#button5");
// let bouton6 = document.querySelector("#button6");
// let bouton7 = document.querySelector("#button7");

// function gestionEvent(event) {
//   console.log(`L'Id est : ` + event.target.id);
// }

// bouton5.addEventListener("click", gestionEvent);
// bouton6.addEventListener("click", gestionEvent);
// bouton7.addEventListener("click", gestionEvent);
