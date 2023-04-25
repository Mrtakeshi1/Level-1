var readlineSync = require('readline-sync');

readlineSync.question(`Welcome Player! 

The game begins on the night of Friday 24 July 1998. 
The Special Tactics and Rescue Service, a police special forces unit consisting of ex-soldiers and scientists, 
has been assigned into the Arklay Mountains to investigate a series of cannibalistic homicides conducted by an 
unidentified group of people. (Press Enter to Continue) 
`)

let username = readlineSync.question(`What is your name player?
`)
enemyOptions = ["run ", "fight "]
rewards = ["Combat Knife", "Rocket Launcher", "Shotgun", "", "Flamethrower"]

let player = {
    name: username,
    hp: 100,
    attackPower: 25,
    monstersDefeated: 0
}

let zombies = {
    name: "zombies",
    hp: 75,
    attackPower: 15
}

let cerberus = {
    name: "Cerberus",
    hp: 100,
    attackPower: 20
}

let crows = {
    name: "Crows",
    hp: 50,
    attackPower: 10
}

let tyrant = {
    name: "T-002 Tyrant",
    hp: 350,
    attackPower: 25
}

let enemy = {
    name: "#",
    hp: 0,
    attackPower: 0
}
let inventory = ["Hand Gun"]

if (readlineSync.keyInYN(`
Will you help us escape the Spencer Mansion ` + username +` (Press) `)){
    console.log("Thank you! " + username)
    readlineSync.question(`
    (Back Story)
    The Spencer Mansion was constructed in the Arklay Mountains in the 1960s by George Trevor,
    an architect who subsequently disappeared. The mansion housed an underground laboratory used by Umbrella Pharmaceuticals 
    for top-secret bio-weapons development on behalf of the US military. Soon after the completion of the "ε strain" virus in 1998, 
    the virus broke out and infected the staff, causing noticeable necrosis of the skin and severe brain damage that limits their 
    intelligence and triggers the excessive production of hormones, making them murderously angry, obsessively hungry, 
    and causing them to grow several inches. In their volatile state, they were unable to prevent their mutant test subjects from escaping, 
    leading to a number of deaths of hikers and suburban factories. In July 1998, the Raccoon Police Department, 
    unable to solve the murder and animal attack cases, handed over the investigation to S.T.A.R.S., 
    an elite law enforcement unit funded by Umbrella. (Press Enter to Continue) 
    `) 

    walk()
} else {
    console.log("You couldn't escape the Spencer Mansion, and got infected with T-Virus! Game Over! ")
    player.hp = 0
}


while(player.hp > 0 && player.monstersDefeated < 3){
    walk()
}

if (player.monstersDefeated > 2){
    console.log("You escaped the treacherous Spencer Mansion and return to Raccoon City! Game Over!")
}

function walk() {
    const move = readlineSync.question(`Press "w" to walk forward or "i" to see your inventory 
    `)
        if(move === "w"){
            readlineSync.question(`You move further into the Mansion (Press Enter to Continue)
            `)
            enemyType()
        } else if(move === "i"){
            console.log(player.name + "\n HP=",player.hp + "\n Inventory:", inventory )
            console.log("Attack Power:", + player.attackPower) 
            console.log("Monsters Defeated:", + player.monstersDefeated)
        }
    
}

function enemyType(){
    var enemyChance = Math.floor(Math.random() * 100)
    if (enemyChance < 40 && enemyChance > 25){
        readlineSync.question("A Zombie Appears!")
        enemy.name = zombies.name
        enemy.hp = zombies.hp
        enemy.attackPower = zombies.attackPower
        fightChoice()
    } else if(enemyChance < 35 && enemyChance > 18){
        readlineSync.question("A Cerberus Appears!")
        enemy.name = cerberus.name
        enemy.hp = cerberus.hp
        enemy.attackPower = cerberus.attackPower
        fightChoice()
    } else if(enemyChance < 30 && enemyChance > 3){
        readlineSync.question("A Murder of Crows Appears!")
        enemy.name = crows.name
        enemy.hp = crows.hp
        enemy.attackPower = crows.attackPower
        fightChoice()
    } else if(enemyChance < 20){
        readlineSync.question("Tryant got activated!!")
        enemy.name = tyrant.name
        enemy.hp = tyrant.hp
        enemy.attackPower = tyrant.attackPower
        fightChoice()
    }
}

function fightChoice(){
    var choice = readlineSync.keyInSelect(enemyOptions, "What do you decide to do?")
    if (choice === 0){
        run()
    } else if(choice === 1) {
        fight()
}}

function run(){
    var runChance = Math.floor(Math.random() * 100)
    if(runChance > 40){
        readlineSync.question("You escaped Run! A " + enemy.name + " is chasing  you now!!")
    } else if(runChance < 35) {
        readlineSync.question( "You cant escape the enemy, no choice but to fight!")
    fight()
}}

function fight(){
    while( enemy.hp > 0 && player.hp > 0){
        
        let playerAttackPower = Math.floor(Math.random() * player.attackPower) + 10
        console.log( "The ", enemy.name , " charges you ")
        console.log( "You attack the ", enemy.name, " causing ", playerAttackPower, " damage! ")
        enemy.hp = enemy.hp - playerAttackPower
        console.log(enemy.hp)
       
        let enemyAtk = Math.floor(Math.random() * 100) 
        if(enemyAtk < 35){
            console.log("The ", enemy.name, " attacks you causing ", enemy.attackPower, " damage! ")
            player.hp = player.hp - enemy.attackPower
        } else { 
            console.log("the enemy missed its attack!")
        }
        console.log(player.hp)
        if (enemy.hp > 0 && player.hp > 0){
            readlineSync.question("The enemy attacks again! ")
        }  else if(enemy.hp <= 0 && player.hp > 0) {
            readlineSync.question("You have defeated the enemy! ")
            readlineSync.question("The enemy dropped a G+G Herb, after consuming it your hp goes up +50")
            readlineSync.question("You also find an item the emeny dropped, and store it in your inventory")
            randomReward = Math.floor(Math.random() * 4) 
            inventory.push(rewards[randomReward])
            item()
            player.hp = player.hp + 50
            player.monstersDefeated = player.monstersDefeated +1
        } else {
            readlineSync.question("You got biten and, turn in to zombie Game Over!")
        }
        
    }
} 

function item(){
    if (inventory.includes("Combat Knife")){
        player.attackPower = player.attackPower + 10
}

    if (inventory.includes("Rocket Launcher")){
     player.attackPower = player.attackPower + 90
}

    if (inventory.includes("Shotgun")){
        player.attackPower = player.attackPower + 25
}
    if (inventory.includes("Flamethrower")){
        player.attackPower = player.attackPower + 35
}
}