function start_game(){
    const words = ["Brisa", "Canto", "Digno", "Forte", "Gesto", "Honra", "Jovem", "Livre", "Mente", "Nobre", "Oeste", "Plano", "Quase", "Sábio", "Tempo", "União", "Vento", "Zebra", "Valor", "Peixe"]
    const randomNumber = Math.floor(Math.random() * words.length);
    const randomWord = words[randomNumber]


    const squareOne = randomWord[0]
    const squareTwo = randomWord[1]
    const squareThree = randomWord[2]
    const squareFour = randomWord[3]
    const squareFive = randomWord[4]

    console.log(randomWord)
    console.log(squareOne)
    console.log(squareTwo)
}


function player_guess(){
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

    const guess = document.getElementById("guess").value

    const squareOne2 = guess[0]
    const squareTwo2 = guess[1]
    const squareThree2 = guess[2]
    const squareFour2 = guess[3]
    const squareFive2 = guess[4]




}