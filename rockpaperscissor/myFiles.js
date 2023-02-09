const sC = document.getElementById("systemChoice")
const mC = document.getElementById("myChoice")
const finalResult = document.getElementById("result")
const allButtons = document.querySelectorAll("button")
let userChoice
let sCs
allButtons.forEach(choices => choices.addEventListener('click', (e) => {
    userChoice = e.target.id
    mC.innerHTML = userChoice
    generationOfChoices()
    getResult()
}))

function generationOfChoices() {
    const rN = Math.floor(Math.random() * 3) + 1


    if (rN === 1) {
        sCs = "Rock"
    }
    if (rN === 2) {
        sCs = "Scissors"
    }
    if (rN === 3) {
        sCs = 'Paper'
    }
    sC.innerHTML = sCs
}

function getResult() {
    if (sCs === userChoice) {
        result = "Its draw!"
    }
    if (sCs === "Rock" && userChoice === "Paper") {
        result = "You Win!"
    }
    if (sCs === "Rock" && userChoice === "Scissors") {
        result = "You Lose!"
    }
    if (sCs === "Paper" && userChoice === "Rock") {
        result = "You Lose!"
    }
    if (sCs === "Paper" && userChoice === "Scissors") {
        result = "You Win!"
    }
    if (sCs === "Scissors" && userChoice === "Rock") {
        result = "You Win!"
    }
    if (sCs === "Scissors" && userChoice === "Paper") {
        result = "You Lose!"
    }
    finalResult.innerHTML = result

}