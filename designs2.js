//Select color input 

const colorInput = document.querySelector('#colorPicker'); 
colorInput.addEventListener("click",colorSelection, false);

const canvas = document.querySelector("#pixelCanvas");

function colorSelection(){
    let colorChoise = colorInput.value;
    canvas.style.color = colorChoice;
    return colorChoice;
}

//Select size input

const submit = document.querySelector("[type='submit']");
submit.addEventListener("click", makeGrid());
 
// When size is submitted by the user, call makeGrid()

function makeGrid(event) {

    canvas.removeChildren();

    const height = document.getElementsById("inputHeight").value;
    const width = document.getElementsById("inputWidth").value;
    event.preventDefault();

for (let rows = 0; rows < height; rows++ ) {
    let createRow = document.querySelectorn("#pixelCanvas").insertRow(); 
    }
    for (let columns = 0; columns < width; columns++){
        createRow.insertCell();
    }
}

document.getElementById('pixelCanvas').
$("#submit").on("click", makeGrid);