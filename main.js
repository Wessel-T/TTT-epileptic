console.log('Main.js is working...');

let rulesButton = document.querySelector(".rules-button");
const blocks = document.querySelectorAll('.block');
console.log(blocks);

let player = prompt("Enter player 1 name:");
let playerTwo = prompt("Enter player 2 name:");


let playerOne = document.querySelector(".playerOne");
playerOne.textContent = player;


let playerSecond = document.querySelector(".playerTwo");
playerSecond.textContent = playerTwo;






rulesButton.addEventListener("click", function () 
{
    let x = document.querySelector(".rules");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    
})




