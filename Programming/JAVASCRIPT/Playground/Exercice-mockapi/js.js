let form = document.querySelector("form");
let text = document.querySelector(".text");

form.addEventListener("submit", (event) => {
    event.preventDefault()

    console.log(text.value);
    
})

