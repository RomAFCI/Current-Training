let form = document.querySelector("form");
let prenom = document.querySelector(".prenom");
let nom = document.querySelector(".nom");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(prenom.value);
  console.log(nom.value);

  let data = new FormData(form);

  console.log(data.get("prenom"));
  console.log(data.get("nom"));
  
});

// const inputPrenom = document.querySelector('.inputPrenom')
// const inputNom = document.querySelector('.inputNom')
// let form = document.querySelector('form')

// form.addEventListener('submit', (e) =>{
//     e.preventDefault();
//     let data = new FormData(form)

//     console.log(data.get("inputNom"));

// })
