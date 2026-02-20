    const square1 = document.getElementById("square1")
    const square2 = document.getElementById("square2")
    const square3 = document.getElementById("square3")
    const square4 = document.getElementById("square4")
    const square5 = document.getElementById("square5")
    const square6 = document.getElementById("square6")
    const square7 = document.getElementById("square7")
    const square8 = document.getElementById("square8")
    const square9 = document.getElementById("square9")
    const square10 = document.getElementById("square10")
    const square11 = document.getElementById("square11")
    const square12 = document.getElementById("square12")
    const square13 = document.getElementById("square13")
    const square14 = document.getElementById("square14")
    const square15 = document.getElementById("square15")
    const square16 = document.getElementById("square16")
    const square17 = document.getElementById("square17")
    const square18 = document.getElementById("square18")
    const square19 = document.getElementById("square19")
    const square20 = document.getElementById("square20")
    const square21 = document.getElementById("square21")
    const square22 = document.getElementById("square22")
    const square23 = document.getElementById("square23")
    const square24 = document.getElementById("square24")
    const square25 = document.getElementById("square25")
    const square26 = document.getElementById("square26")
    const square27 = document.getElementById("square27")
    const square28 = document.getElementById("square28")
    const square29 = document.getElementById("square29")
    const square30 = document.getElementById("square30")

    const div = document.getElementById("input_text")


    let wordarr = []

function start_game(){
    
    const words = ["brisa", "canto", "digno", "forte", "gesto", "honra", "jovem", "livre", "mente", "nobre", "oeste", "plano", "quase", "sabio", "tempo", "uniao", "vento", "zebra", "valor", "peixe"]
    const randomNumber = Math.floor(Math.random() * words.length);
    const randomWord = words[randomNumber]


    const squareOne = randomWord[0]
    const squareTwo = randomWord[1]
    const squareThree = randomWord[2]
    const squareFour = randomWord[3]
    const squareFive = randomWord[4]

    wordarr = [squareOne, squareTwo, squareThree, squareFour, squareFive]
}
start_game()
function player_guess(){
    
    const guess = document.getElementById("guess").value
    let verification1 = false
    let verification2 = false
    let verification3 = false
    let verification4 = false
    let verification5 = false

    const squareOne2 = guess[0]
    const squareTwo2 = guess[1]
    const squareThree2 = guess[2]
    const squareFour2 = guess[3]
    const squareFive2 = guess[4]

    if(wordarr[0] == squareOne2){
        square1.style.backgroundColor = "green"
        square1.value = squareOne2
        verification1 = true
    }
    else if(wordarr[0].includes(squareOne2)){
        square1.style.backgroundColor = "yellow"
        square1.value = squareOne2
        verification1 = false
    }
    else{
        square1.value = squareOne2
        verification1 = false
    }
    if(wordarr[1] == squareTwo2){
        square2.style.backgroundColor = "green"
        square2.value = squareTwo2
        verification2 = true
    }
    else if(wordarr[1].includes(squareTwo2)){
        square2.style.backgroundColor = "yellow"
        square2.value = squareTwo2
        verification2 = false
    }
    else{
    square2.value = squareTwo2
    verification2 = false
    }
    if(wordarr[2] == squareThree2){
        square3.style.backgroundColor = "green"
        square3.value = squareThree2
        verification3 = true
    }
    else if(wordarr[0].includes(squareThree2)){
        square3.style.backgroundColor = "yellow"
        square3.value = squareThree2
        verification3 = false
    }
    else{
        square3.value = squareThree2
        verification3 = false
    }
    if(wordarr[3] == squareFour2){
        square4.style.backgroundColor = "green"
        square4.value = squareFour2
        verification4 = true
    }
    else if(wordarr[3].includes(squareFour2)){
        square4.style.backgroundColor = "yellow"
        square4.value = squareFour2
        verification4 = false
    }
    else{
        square4.value = squareFour2
        verification4 = false
    }
    if(wordarr[4] == squareFive2){
        square5.style.backgroundColor = "green"
        square5.value = squareFive2
        verification5 = true
    }
    else if(wordarr[4].includes(squareFive2)){
        square5.style.backgroundColor = "yellow"
        square5.value = squareFive2
        verification5 = false
    }
    else{
        square5.value = squareFive2
        verification5 = false
    }
    if(verification1 == true && verification2 == true && verification3 == true && verification4 == true && verification5 == true){
        alert("Parabéns você ganhou!")
    }
    else{
        let try2 = document.createElement("input")
        try2.type = "text"
        try2.id = "try2"
        div.appendChild(try2)
        let button2 = document.createElement("button")
        button2.textContent = "Adivinhar"
        button2.id = "try2_button"
        div.appendChild(button2)
        

 let button2out = document.getElementById("try2_button")

button2out.addEventListener('click',() => {
 let try2value = document.getElementById("try2").value
    let verification1 = false
    let verification2 = false
    let verification3 = false
    let verification4 = false
    let verification5 = false

    const squareOne2 = try2value[0]
    const squareTwo2 = try2value[1]
    const squareThree2 = try2value[2]
    const squareFour2 = try2value[3]
    const squareFive2 = try2value[4]

    if(wordarr[0] == squareOne2){
        square6.style.backgroundColor = "green"
        square6.value = squareOne2
        verification1 = true
    }
    else if(wordarr[0].includes(squareOne2)){
        square6.style.backgroundColor = "yellow"
        square6.value = squareOne2
        verification1 = false
    }
    else{
        square6.value = squareOne2
        verification1 = false
    }
    if(wordarr[1] == squareTwo2){
        square7.style.backgroundColor = "green"
        square7.value = squareTwo2
        verification2 = true
    }
    else if(wordarr[1].includes(squareTwo2)){
        square7.style.backgroundColor = "yellow"
        square7.value = squareTwo2
        verification2 = false
    }
    else{
    square7.value = squareTwo2
    verification2 = false
    }
    if(wordarr[2] == squareThree2){
        square8.style.backgroundColor = "green"
        square8.value = squareThree2
        verification3 = true
    }
    else if(wordarr[0].includes(squareThree2)){
        square8.style.backgroundColor = "yellow"
        square8.value = squareThree2
        verification3 = false
    }
    else{
        square8.value = squareThree2
        verification3 = false
    }
    if(wordarr[3] == squareFour2){
        square9.style.backgroundColor = "green"
        square9.value = squareFour2
        verification4 = true
    }
    else if(wordarr[3].includes(squareFour2)){
        square9.style.backgroundColor = "yellow"
        square9.value = squareFour2
        verification4 = false
    }
    else{
        square9.value = squareFour2
        verification4 = false
    }
    if(wordarr[4] == squareFive2){
        square10.style.backgroundColor = "green"
        square10.value = squareFive2
        verification5 = true
    }
    else if(wordarr[4].includes(squareFive2)){
        square10.style.backgroundColor = "yellow"
        square10.value = squareFive2
        verification5 = false
    }
    else{
        square10.value = squareFive2
        verification5 = false
    }
    if(verification1 == true && verification2 == true && verification3 == true && verification4 == true && verification5 == true){
        alert("Parabéns você ganhou!")
    }
    else{
       let try2 = document.createElement("input")
        try2.type = "text"
        try2.id = "try2_2"
        div.appendChild(try2)
        let button2 = document.createElement("button")
        button2.textContent = "Adivinhar"
        button2.id = "try2_button2"
        div.appendChild(button2)
        

 let button2out = document.getElementById("try2_button2")

button2out.addEventListener('click',() => {
 let try2value = document.getElementById("try2_2").value
    let verification1 = false
    let verification2 = false
    let verification3 = false
    let verification4 = false
    let verification5 = false

    const squareOne2 = try2value[0]
    const squareTwo2 = try2value[1]
    const squareThree2 = try2value[2]
    const squareFour2 = try2value[3]
    const squareFive2 = try2value[4]

    if(wordarr[0] == squareOne2){
        square11.style.backgroundColor = "green"
        square11.value = squareOne2
        verification1 = true
    }
    else if(wordarr[0].includes(squareOne2)){
        square11.style.backgroundColor = "yellow"
        square11.value = squareOne2
        verification1 = false
    }
    else{
        square11.value = squareOne2
        verification1 = false
    }
    if(wordarr[1] == squareTwo2){
        square12.style.backgroundColor = "green"
        square12.value = squareTwo2
        verification2 = true
    }
    else if(wordarr[1].includes(squareTwo2)){
        square12.style.backgroundColor = "yellow"
        square12.value = squareTwo2
        verification2 = false
    }
    else{
    square12.value = squareTwo2
    verification2 = false
    }
    if(wordarr[2] == squareThree2){
        square13.style.backgroundColor = "green"
        square13.value = squareThree2
        verification3 = true
    }
    else if(wordarr[0].includes(squareThree2)){
        square13.style.backgroundColor = "yellow"
        square13.value = squareThree2
        verification3 = false
    }
    else{
        square13.value = squareThree2
        verification3 = false
    }
    if(wordarr[3] == squareFour2){
        square14.style.backgroundColor = "green"
        square14.value = squareFour2
        verification4 = true
    }
    else if(wordarr[3].includes(squareFour2)){
        square14.style.backgroundColor = "yellow"
        square14.value = squareFour2
        verification4 = false
    }
    else{
        square14.value = squareFour2
        verification4 = false
    }
    if(wordarr[4] == squareFive2){
        square15.style.backgroundColor = "green"
        square15.value = squareFive2
        verification5 = true
    }
    else if(wordarr[4].includes(squareFive2)){
        square15.style.backgroundColor = "yellow"
        square15.value = squareFive2
        verification5 = false
    }
    else{
        square15.value = squareFive2
        verification5 = false
    }
    if(verification1 == true && verification2 == true && verification3 == true && verification4 == true && verification5 == true){
        alert("Parabéns você ganhou!")
    }
    else{
       let try2 = document.createElement("input")
        try2.type = "text"
        try2.id = "try2_3"
        div.appendChild(try2)
        let button2 = document.createElement("button")
        button2.textContent = "Adivinhar"
        button2.id = "try2_button3"
        div.appendChild(button2)
        

 let button2out = document.getElementById("try2_button3")

button2out.addEventListener('click',() => {
 let try2value = document.getElementById("try2_3").value
    let verification1 = false
    let verification2 = false
    let verification3 = false
    let verification4 = false
    let verification5 = false

    const squareOne2 = try2value[0]
    const squareTwo2 = try2value[1]
    const squareThree2 = try2value[2]
    const squareFour2 = try2value[3]
    const squareFive2 = try2value[4]

    if(wordarr[0] == squareOne2){
        square16.style.backgroundColor = "green"
        square16.value = squareOne2
        verification1 = true
    }
    else if(wordarr[0].includes(squareOne2)){
        square16.style.backgroundColor = "yellow"
        square16.value = squareOne2
        verification1 = false
    }
    else{
        square16.value = squareOne2
        verification1 = false
    }
    if(wordarr[1] == squareTwo2){
        square17.style.backgroundColor = "green"
        square17.value = squareTwo2
        verification2 = true
    }
    else if(wordarr[1].includes(squareTwo2)){
        square17.style.backgroundColor = "yellow"
        square17.value = squareTwo2
        verification2 = false
    }
    else{
    square17.value = squareTwo2
    verification2 = false
    }
    if(wordarr[2] == squareThree2){
        square18.style.backgroundColor = "green"
        square18.value = squareThree2
        verification3 = true
    }
    else if(wordarr[0].includes(squareThree2)){
        square18.style.backgroundColor = "yellow"
        square18.value = squareThree2
        verification3 = false
    }
    else{
        square18.value = squareThree2
        verification3 = false
    }
    if(wordarr[3] == squareFour2){
        square19.style.backgroundColor = "green"
        square19.value = squareFour2
        verification4 = true
    }
    else if(wordarr[3].includes(squareFour2)){
        square19.style.backgroundColor = "yellow"
        square19.value = squareFour2
        verification4 = false
    }
    else{
        square19.value = squareFour2
        verification4 = false
    }
    if(wordarr[4] == squareFive2){
        square20.style.backgroundColor = "green"
        square20.value = squareFive2
        verification5 = true
    }
    else if(wordarr[4].includes(squareFive2)){
        square20.style.backgroundColor = "yellow"
        square20.value = squareFive2
        verification5 = false
    }
    else{
        square20.value = squareFive2
        verification5 = false
    }
    if(verification1 == true && verification2 == true && verification3 == true && verification4 == true && verification5 == true){
        alert("Parabéns você ganhou!")
    }
    else{
       let try2 = document.createElement("input")
        try2.type = "text"
        try2.id = "try2_4"
        div.appendChild(try2)
        let button2 = document.createElement("button")
        button2.textContent = "Adivinhar"
        button2.id = "try2_button4"
        div.appendChild(button2)
        

 let button2out = document.getElementById("try2_button4")

button2out.addEventListener('click',() => {
 let try2value = document.getElementById("try2_4").value
    let verification1 = false
    let verification2 = false
    let verification3 = false
    let verification4 = false
    let verification5 = false

    const squareOne2 = try2value[0]
    const squareTwo2 = try2value[1]
    const squareThree2 = try2value[2]
    const squareFour2 = try2value[3]
    const squareFive2 = try2value[4]

    if(wordarr[0] == squareOne2){
        square21.style.backgroundColor = "green"
        square21.value = squareOne2
        verification1 = true
    }
    else if(wordarr[0].includes(squareOne2)){
        square21.style.backgroundColor = "yellow"
        square21.value = squareOne2
        verification1 = false
    }
    else{
        square21.value = squareOne2
        verification1 = false
    }
    if(wordarr[1] == squareTwo2){
        square22.style.backgroundColor = "green"
        square22.value = squareTwo2
        verification2 = true
    }
    else if(wordarr[1].includes(squareTwo2)){
        square22.style.backgroundColor = "yellow"
        square22.value = squareTwo2
        verification2 = false
    }
    else{
    square22.value = squareTwo2
    verification2 = false
    }
    if(wordarr[2] == squareThree2){
        square23.style.backgroundColor = "green"
        square23.value = squareThree2
        verification3 = true
    }
    else if(wordarr[0].includes(squareThree2)){
        square23.style.backgroundColor = "yellow"
        square23.value = squareThree2
        verification3 = false
    }
    else{
        square23.value = squareThree2
        verification3 = false
    }
    if(wordarr[3] == squareFour2){
        square24.style.backgroundColor = "green"
        square24.value = squareFour2
        verification4 = true
    }
    else if(wordarr[3].includes(squareFour2)){
        square24.style.backgroundColor = "yellow"
        square24.value = squareFour2
        verification4 = false
    }
    else{
        square24.value = squareFour2
        verification4 = false
    }
    if(wordarr[4] == squareFive2){
        square25.style.backgroundColor = "green"
        square25.value = squareFive2
        verification5 = true
    }
    else if(wordarr[4].includes(squareFive2)){
        square25.style.backgroundColor = "yellow"
        square25.value = squareFive2
        verification5 = false
    }
    else{
        square25.value = squareFive2
        verification5 = false
    }
    if(verification1 == true && verification2 == true && verification3 == true && verification4 == true && verification5 == true){
        alert("Parabéns você ganhou!")
    }
    else{
       alert("Você perdeu!")
    }
})
    }
})
    }
})
    }
})

    }
}



console.log(wordarr)
