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
    
    const guess = document.getElementById("guess").value


}