const case0 = document.querySelector('.case0')
const case1 = document.querySelector('.case1')
const case2 = document.querySelector('.case2')
const case3 = document.querySelector('.case3')
const case4 = document.querySelector('.case4')
const case5 = document.querySelector('.case5')
const case6 = document.querySelector('.case6')
const case7 = document.querySelector('.case7')
const case8 = document.querySelector('.case8')

let turnPlayer = 0;

case0.addEventListener('click', () => {

    if (case0.style.backgroundImage !== ""){
        return
    }

    if (turnPlayer == 0){
        case0.style.backgroundImage = "url('images/x.png')";
        turnPlayer = 1
    }
    else {
        case0.style.backgroundImage = "url('images/o.png')";
        turnPlayer = 0     
    }

verifVictoire()


})
case1.addEventListener('click', () => {
    if (case1.style.backgroundImage !== ""){
        return
    }
    if (turnPlayer == 0){
        case1.style.backgroundImage = "url('images/x.png')";
        turnPlayer = 1
    }
    else {
        case1.style.backgroundImage = "url('images/o.png')";
        turnPlayer = 0     
    }
    
  


verifVictoire()




})
case2.addEventListener('click', () => {
    if (case2.style.backgroundImage !== ""){
        return
    }
    if (turnPlayer == 0){
        case2.style.backgroundImage = "url('images/x.png')";
        turnPlayer = 1
    }
    else {
        case2.style.backgroundImage = "url('images/o.png')";
        turnPlayer = 0     
    }
 

    verifVictoire()
})
case3.addEventListener('click', () => {
    if (case3.style.backgroundImage !== ""){
        return
    }    
    if (turnPlayer == 0){
        case3.style.backgroundImage = "url('images/x.png')";
        turnPlayer = 1
    }
    else {
        case3.style.backgroundImage = "url('images/o.png')";
        turnPlayer = 0     
    }

    verifVictoire()
    
})
case4.addEventListener('click', () => {
    if (case4.style.backgroundImage !== ""){
        return
    }
    if (turnPlayer == 0){
        case4.style.backgroundImage = "url('images/x.png')";
        turnPlayer = 1
    }
    else {
        case4.style.backgroundImage = "url('images/o.png')";
        turnPlayer = 0     
    }
    
    verifVictoire()
})

case5.addEventListener('click', () => {
    if (case5.style.backgroundImage !== ""){
        return
    }
    if (turnPlayer == 0){
        case5.style.backgroundImage = "url('images/x.png')";
        turnPlayer = 1
    }
    else {
        case5.style.backgroundImage = "url('images/o.png')";
        turnPlayer = 0     
    }

    verifVictoire()
    
})
case6.addEventListener('click', () => {
    if (case6.style.backgroundImage !== ""){
        return
    }
    if (turnPlayer == 0){
        case6.style.backgroundImage = "url('images/x.png')";
        turnPlayer = 1
    }
    else {
        case6.style.backgroundImage = "url('images/o.png')";
        turnPlayer = 0     
    }
    
    verifVictoire()
})

case7.addEventListener('click', () => {
    if (case7.style.backgroundImage !== ""){
        return
    }
    if (turnPlayer == 0){
        case7.style.backgroundImage = "url('images/x.png')";
        turnPlayer = 1
    }
    else {
        case7.style.backgroundImage = "url('images/o.png')";
        turnPlayer = 0     
    }
    verifVictoire()
})

case8.addEventListener('click', () => {
    if (case8.style.backgroundImage !== ""){
        return
    }
    if (turnPlayer == 0){
        case8.style.backgroundImage = "url('images/x.png')";
        turnPlayer = 1
    }
    else {
        case8.style.backgroundImage = "url('images/o.png')";
        turnPlayer = 0     
    }
    verifVictoire()
})


function verifVictoire(){
    // Condition de victoire
    // Victoire pour les X
    if ((case0.style.backgroundImage === 'url("images/x.png")' && case1.style.backgroundImage === 'url("images/x.png")' && case2.style.backgroundImage) === 'url("images/x.png")'){      
        console.log("c'est gagne pour les X");
        
    }
    if (case3.style.backgroundImage === 'url("images/x.png")' && case4.style.backgroundImage === 'url("images/x.png")' && case5.style.backgroundImage === 'url("images/x.png")'){
        console.log("c'est gagne pour les X");
        
    }
    if (case6.style.backgroundImage === 'url("images/x.png")' && case7.style.backgroundImage === 'url("images/x.png")' && case8.style.backgroundImage === 'url("images/x.png")'){
        console.log("c'est gagne pour les X");
        
    }
    if (case0.style.backgroundImage === 'url("images/x.png")' && case3.style.backgroundImage === 'url("images/x.png")' && case6.style.backgroundImage === 'url("images/x.png")'){
        console.log("c'est gagne pour les X");
        
    }
    if (case1.style.backgroundImage === 'url("images/x.png")' && case4.style.backgroundImage === 'url("images/x.png")' && case7.style.backgroundImage === 'url("images/x.png")'){
        console.log("c'est gagne pour les X");
        
    }
    if (case2.style.backgroundImage === 'url("images/x.png")' && case5.style.backgroundImage === 'url("images/x.png")' && case8.style.backgroundImage === 'url("images/x.png")'){
        console.log("c'est gagne pour les X");
        
    }
    if (case0.style.backgroundImage === 'url("images/x.png")' && case4.style.backgroundImage === 'url("images/x.png")' && case8.style.backgroundImage === 'url("images/x.png")'){
        console.log("c'est gagne pour les X");
        
    }
    if (case2.style.backgroundImage === 'url("images/x.png")' && case4.style.backgroundImage === 'url("images/x.png")' && case6.style.backgroundImage === 'url("images/x.png")'){
        console.log("c'est gagne pour les X");
        
    }

    // Victoire pour les O
    if (case0.style.backgroundImage === 'url("images/o.png")' && case1.style.backgroundImage === 'url("images/o.png")' && case2.style.backgroundImage === 'url("images/o.png")'){
        console.log("c'est gagne pour les O");
        
    }
    if (case3.style.backgroundImage === 'url("images/o.png")' && case4.style.backgroundImage === 'url("images/o.png")' && case5.style.backgroundImage === 'url("images/o.png")'){
        console.log("c'est gagne pour les O");
        
    }
    if (case6.style.backgroundImage === 'url("images/o.png")' && case7.style.backgroundImage === 'url("images/o.png")' && case8.style.backgroundImage === 'url("images/o.png")'){
        console.log("c'est gagne pour les O");
        
    }
    if (case0.style.backgroundImage === 'url("images/o.png")' && case3.style.backgroundImage  === 'url("images/o.png")'&& case6.style.backgroundImage === 'url("images/o.png")'){
        console.log("c'est gagne pour les O");
        
    }
    if (case1.style.backgroundImage === 'url("images/o.png")' && case4.style.backgroundImage === 'url("images/o.png")' && case7.style.backgroundImage === 'url("images/o.png")'){
        console.log("c'est gagne pour les O");
        
    }
    if (case2.style.backgroundImage === 'url("images/o.png")' && case5.style.backgroundImage === 'url("images/o.png")' && case8.style.backgroundImage === 'url("images/o.png")'){
        console.log("c'est gagne pour les O");
        
    }
    if (case0.style.backgroundImage === 'url("images/o.png")' && case4.style.backgroundImage === 'url("images/o.png")' && case8.style.backgroundImage === 'url("images/o.png")'){
        console.log("c'est gagne pour les O");
        
    }
    if (case2.style.backgroundImage === 'url("images/o.png")' && case4.style.backgroundImage === 'url("images/o.png")' && case6.style.backgroundImage === 'url("images/o.png")'){
        console.log("c'est gagne pour les O");
        
    }

}