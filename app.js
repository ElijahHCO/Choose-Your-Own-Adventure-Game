const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);

let playerHealth = 100;
let playerItems = [];
let playerPoints = 0;
console.log("You are about to board the gondola, and head up to the top of the mountain.")
console.log("What will you choose to ride down?")
const equipmentChoice = prompt("Will you ride a snowboard or skis? Enter [S] for snowboard or [K] for skis.");
console.log(`The user chose ${equipmentChoice}`);
equipmentChoiceEncounter();
displayStatus();
console.log("Alright we have your equipment picked out and you are ready to go!");
console.log("Now lets hop on the gondola and head to the top.");
const routeChoice = prompt("Will we go down a blue run or a green run? Enter [B] for Blue or [G] for Green");
routeChoiceEncounter()
displayStatus()






function routeChoiceEncounter(){
    if (routeChoice === "B"){
        console.log("Thats great!")
        playerPoints += 50
    } else {
        console.log("That sucks. I think you may not be ready for a snowboard.")
        playerPoints -= 50
        playerHealth -= 100
    } 
}
function displayStatus() {
    console.log(`You have ${playerPoints} points`)
    console.log(`You have ${playerHealth} health left`)
    for (let i = 0; i < playerItems.length; i++) {
        console.log(`You are riding ${playerItems[i]}`)
    }
}
function equipmentChoiceEncounter() {
    if (equipmentChoice === "S") {
        console.log("That is a terrific choice. I snowboard as well and could give you some pointers if it is your first time.");
        console.log("You are going to be riding the K2 WorldWideWeapon. It is a great all-mountain board.");
        playerPoints += 100;
        playerItems.push("snowboard");
    } else {
        console.log("Oh well. I guess that will be fun...");
        console.log("You are going to be riding the old rental skis from the shop.");
        console.log("They are a bit worn and broken, but you should make it down with some luck...");
        playerPoints -= 20;
        playerItems.push("skis");
    }
}
