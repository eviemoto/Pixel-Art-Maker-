//Select color input 

const colorInput = document.querySelector('#colorPicker'); 
colorInput.addEventListener("click",colorSelection, false);

const canvas = document.querySelector("#pixelCanvas");

function colorSelection(){
    let colorChoise = colorInput.value;
    canvas.style.color = colorChoice;
    return colorChoice;
}

// Select size input
var sizePicker = getElementByld('sizePicker');

sizePicker.addEventListener("submit",funtion (event)) 
    console.log("Size Picker is running");
    event.preventDefault();
    makeGrid();

    
// When size is submitted by the user, call makeGrid()

function makeGrid() {
        console.log("makeGrid is running");
// define size variables 
    const width = document.getElementById("inputHeight").value;
    const height = document.getElementById("inputWidth").value;

    const table = document.createElement("TABLE");

    var pixelCanvasGrid = document.getElementById("pixelCanvas");

    for (let r=0; r < width; r++){
        var row = table.insertRow(0);
    }

    for (let c=0; c < width; c++){
        var row = table.insertCell(0);
    }

    // table.innerHTML= ? not sure how to reset the html table to append the new table to it
    document.body.appendChild(table); 

} 

  // 1. We get the reference where we should place the table
  // 2. We get the sizes of our inputs
  // 3. We create a new empty table on the reference we get on step 1
  // 4. We do a loop to create a new <tr> (row) for each number on our height input
  // 5. We do a loop, inside the loop of step 4, to create a new column <td> for each number on the input width
  // 6. Reset html table(.innerhtml='' and append new table to it)
