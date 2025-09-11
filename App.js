const originalDiv = document.querySelector("#container")//retrieves the id container
const newDiv = document.createElement("div")//creates new div
newDiv.classList.add("newDiv")//adds class for styling
originalDiv.appendChild(newDiv)//attaches new created div to the container
//function that creates control buttons
function createButtons(num) {
    const btnLabel = ["start", "clear", "colour"]
    let BtnsArr = []

//array containing the three control button labels and the buttons itself
    //for loop to create the three button inside the function
   for (let i = 0; i < num; i++) {
        const Btns = document.createElement("button")//creates the three buttons
        Btns.classList.add("newBtns")//adds class to the three buttons
        Btns.textContent = btnLabel[i] //uses the arraay indexing to add name to buttons 
        originalDiv.appendChild(Btns)//attaches the buttons to the container
        BtnsArr.push(Btns)
}
 return BtnsArr
}
const newBtns = createButtons(3);//the function call
let input = Number(prompt("enter the number grid size(? by 16)"))//user input
const finalGridSize = input * input //calculate type of grid
function createGrids(finalGridSize){
    //loop to display number of grids
    for (let i = 0; i < finalGridSize; i++) {
        const moreDivs = document.createElement("div");//creates more grids
        moreDivs.classList.add("squareDivs")//adds class for styling along with the first grid in global
        newDiv.appendChild(moreDivs); //adds new divs to teh previous div already created 
    }}
//function for creating the grids
const grids = createGrids(finalGridSize)
