let form = document.querySelector("form");

let prenom = document.querySelector(".prenom");
let nom = document.querySelector(".nom");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(prenom.value);
  console.log(nom.value);

  fetch(`https://685a93639f6ef9611156f49a.mockapi.io/form-identity`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prenom: prenom.value,
      nom: nom.value,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      alert(`Utilisateur créé avec succès : ${JSON.stringify(data)}`);
    });
});
