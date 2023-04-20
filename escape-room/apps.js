const readline = require("readline-sync");

const nameQuestion = readline.question("Welcome fellow adventurer what is your name? ");

readline.question(`Welcome ${nameQuestion}, OH NO! You're trapped in a room. 
What would you like to do? press Enter to continue`)

let user = {
    name: nameQuestion,
    hasKey: false,
    isAlive: true,
}

function gameRunning (){
const options =[ 'Stick your hand in the hole', 'Find the key', 'Check the door' ]
let option = readline.keyInSelect(options, "Choose your option")

if (options[option] === "Find the key"){
    findKey()
 } else if (options[option] === "Stick your hand in the hole"){
    handInHole()
 } else if (options[option] === "Check the door"){
    openDoor()
 }
}

gameRunning() 

function handInHole () {
    user.isAlive = false
    readline.question("The hole closes on your hand, cutting your hand, you bleed out, and  Game Over")
}

function openDoor (){
    if (user.hasKey === false){
        readline.question("The door is locked")
        gameRunning()
    } else if (user.hasKey === true){
        readline.question("You unlock the door using the key and escape the room!")
    }
}

function findKey (){
    readline.question("you look around the room and you see... press Enter to continue")
    let places = [ "the hole", "the book", "the barrel", "the mat" ]
    let search = readline.keyInSelect(places, "Where would you like to search?")
    
    if (places[search] === "the hole"){
        handInHole()
    } else if (places[search] === "the book"){
        user.hasKey = true
        readline.question("you look inside the book and find the key")
        gameRunning2()
    } else if (places[search] === "the barrel"){
        readline.question("you search through the barrel but find nothing, press Enter")
        findKey()
    } else if (places[search] === "the mat"){
        readline.question("you look under the mat, and find a hole filled with skeletons, press Enter")
        findKey()
    }
}

function gameRunning2 () {
    const options = ["Check the door","stick your hand in the hole"]
    let option = readline.keyInSelect(options, "Choose your option")
    if (options[option] === "Check the door"){
        openDoor()
    }
}

