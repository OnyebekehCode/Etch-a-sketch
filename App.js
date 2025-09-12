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


newBtns[0].addEventListener("click", function createGrids(){
    let input = Number(prompt("enter the number grid size(? by 16)"))//user input
    let finalGrid = input * input //calculate type of grid
    //loop to display number of grids
    for (let i = 0; i < finalGrid; i++) {
        const moreDivs = document.createElement("div");//creates more grids
        moreDivs.classList.add("squareDivs")//adds class for styling along with the first grid in global
        newDiv.appendChild(moreDivs); //adds new divs to teh previous div already created 
    }
    drawonGrid();//calling the drawongrid function after the final grids has been created
    return finalGrid;
})
//function for changing grid to color to effect the draw on grid animation
function drawonGrid(){
    const gridAffected = document.getElementsByClassName("squareDivs")//get the targeted grids
    for (const div of gridAffected) 
        //loop to change the color of the divs to another color
    {
        //event listener to capture when mouse enters a grid and changes its css style to the new one i added
        div.addEventListener("mouseenter", function(){
        this.classList.add("changeColor") 
    });
}}
newBtns[1].addEventListener("click", function clearGrid(){
    const gridPainted = document.getElementsByClassName("changeColor")//get the targeted grids for coloured divs
    for (const div of gridPainted) 
    {
        div.classList.add("clearColor") 
    };
    return gridPainted;
})
