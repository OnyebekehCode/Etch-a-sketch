let originalDiv = document.getElementById("container");
let btns = document.getElementById("btn-container")


let startBtn = document.createElement("button");
let clearBtn = document.createElement("button");
let colorBtn = document.createElement("button")

startBtn.innerText = ("start");
clearBtn.innerText = ("clear");
colorBtn.innerText = ("color");

btns.appendChild(startBtn);
btns.appendChild(clearBtn);
btns.appendChild(colorBtn);


let inputSize = Number(prompt("Choose grid size from 10 to 100"));

function createSquares(){
    inputSize = inputSize**2;

    for (let i = 1; i <= inputSize; i++){
        const newDiv = document.createElement("div");
         newDiv.classList.add("squareDIvs");
         newDiv.textContent = ('box');
         originalDiv.appendChild(newDiv)
    };
};
createSquares();