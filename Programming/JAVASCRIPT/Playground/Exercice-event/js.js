// EXEMPLE EVENT

// const carre = document.getElementById('test');
// const body = document.body

// function changeSize(elem,w,h){
//     const carre = document.getElementById(elem);

//     carre.addEventListener("click", () => {
//     carre.style.backgroundColor = "yellow";
//     carre.style.width = w + "px";
//     carre.style.height = h + "px";

// })
// }

// changeSize("test", 300, 500)
// changeSize("demo2", 600, 10)

// carre.addEventListener(
//     "click",
//     () => {
//     carre.style.backgroundColor = "yellow";
//     carre.style.width = w + "px";
//     carre.style.height = h + "px";
//     },

// )

// ⚠️MIS EN COMMENTAIRE POUR EVITER CONFLIT⚠️

const rond = document.querySelector(".rond");

// console.log(rond);
// rond.addEventListener(
//     "click",
//      () => {
//     rond.style.backgroundColor = "black";
//      })



document.addEventListener("mousemove", (event) => {
  
  const x = event.clientX;
  const y = event.clientY;

  rond.style.left = x + "px"
  rond.style.top = y + "px"

});
