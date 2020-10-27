let play = confirm("do u want to play the game?")
let ties = 0
let wins = 0
let losses = 0

if(play){
   game()
}

function game () {
    let userChoice = prompt("r p s")
    let computerChoices = ["r", "p", "s"]
    let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]
    if (userChoice === computerChoice) {
        ties++
        alert(`you tie, ties ${ties}`)
        let again = confirm("play again?")
        if(again){
            game()
        }
    } else if ((userChoice === "r" && computerChoice === "s") || (userChoice === "p" && computerChoice === "r") || (userChoice === "s" && computerChoice === "p")) {
        wins++
        alert(`you won!!!, wins ${wins}`)
        let again = confirm("play again?")
        if(again){
            game()
        }
    } else {
        losses++
        alert(`you lost, yikes, losses ${losses}`)
        let again = confirm("play again?")
        if(again){
            game()
        }
    }
    
}


