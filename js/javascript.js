//Create three boxes in your HTML / CSS
//Click on a box and have it rotate (45+ degrees each click)
//On the third click of each box change the color of the other two boxes
//On a click of a box, turn that box into a circle and have it move to the right
//Pseudo Code and Wireframes: Build a simple slot machine with minimum 5 items per reel and 3 reels - user should be able to bet min or max and have their total update aka how much money they have won or lost. Min bet does $5 and Max bet does $50. They should start with $1000. Matches of the three wheels = a win just like a normal slot machine and they win 10x their bet
document.querySelector("#fivebutton").addEventListener('click', minbet)
document.querySelector("#fiftybutton").addEventListener('click', maxbet)
const firstreel = document.getElementById('firstslot');
const secondreel = document.getElementById('secondslot');
const thirdreel = document.getElementById('thirdslot');
let moneyreward = document.getElementById('totalmoney')
let playerMoney = 1000

function minbet(){
    let firstslot = Math.ceil(Math.random() * 5);
    firstreel.innerText = firstslot;
    let secondslot = Math.ceil(Math.random() * 5);
    secondreel.innerText = secondslot;
    let thirdslot = Math.ceil(Math.random() * 5);
    thirdreel.innerText = thirdslot;
    if(firstslot === secondslot && secondslot === thirdslot){
        console.log('You win!')
        minwinner()
    } else {
        console.log('You lose!')
        minloser()
    }
}

function maxbet(){
    let firstslot = Math.ceil(Math.random() * 5);
    firstreel.innerText = firstslot;
    let secondslot = Math.ceil(Math.random() * 5);
    secondreel.innerText = secondslot;
    let thirdslot = Math.ceil(Math.random() * 5);
    thirdreel.innerText = thirdslot;
        if(firstslot === secondslot && secondslot === thirdslot){
        console.log('You win!')
        maxwinner()
    } else {
        console.log('You lose!')
        maxloser()
    }
}

function minwinner(){
    playerMoney += 50;
    moneyreward.innerText = playerMoney;
}

function minloser(){
    playerMoney -= 5
    moneyreward.innerText = playerMoney;
}

function maxwinner(){
    playerMoney += 500;
    moneyreward.innerText = playerMoney;
}

function maxloser(){
    playerMoney -= 50
    moneyreward.innerText = playerMoney;
}