/*const container = document.querySelector('.container');
const gridSizeButton = document.querySelector('#grid-size');

let size = Number(prompt('Type a new size between 15, 20 or 25:'));;

const maxWidth = size ** 2;
gridSizeButton.addEventListener('click', () => {
    size = Number(prompt('Type a new size between 15, 20 or 25:'));  
});

container.style.maxWidth = `${maxWidth}px`;

for(let i = 1; i <= maxWidth; i++) {
    const gridItem = document.createElement('div');
    
    
    gridItem.style.border = '1px solid black';
    gridItem.style.width = `${size}px`;
    gridItem.style.height = `${size}px`;

    gridItem.classList.add('grid-background-color');
    
    container.appendChild(gridItem);
}

const grid = document.querySelectorAll('.grid-background-color');

grid.forEach(target => target.addEventListener('mouseover', () => {
    target.style.backgroundColor = 'black';
}));*/

/*const container = document.querySelector('.container');
const gridSmall = document.querySelector('#grid-small');
const gridMedium = document.querySelector('#grid-medium');
const gridLarge = document.querySelector('#grid-large');

let size = 15;
let maxWidth = size ** 2;

gridSmall.addEventListener('click', () => {
    size = 15;
    maxWidth = size ** 2;
    createGrid();
});

gridMedium.addEventListener('click', () => {
    size = 20;
    maxWidth = size ** 2;
    createGrid();
});

gridLarge.addEventListener('click', () => {
    size = 25;
    maxWidth = size ** 2;
    createGrid();
});

function createGrid() {
    container.style.maxWidth = `${maxWidth}px`;

    for(let i = 1; i <= maxWidth; i++) {
        const box = document.createElement('div');

        box.style.border = '1px solid black';
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;

        box.classList.add('paint-box');

        container.appendChild(box);
    }
}

function paintBox() {
    const grid = document.querySelectorAll('.paint-box');

    grid.forEach(target => target.addEventListener('mouseover', () => {
        target.style.backgroundColor = 'black';
    }));
}

createGrid();
paintBox();*/

const container = document.querySelector('.container');
const slider = document.querySelector('#grid-range');

function createGrid(size) {
    const maxWidth = 600;

    container.style.maxWidth = `${maxWidth}px`;

    for(let i = 1; i <= size ** 2; i++) {
        const div = document.createElement('div');

        div.style.border = '1px solid black';
        div.style.width = `${maxWidth/size}px`;
        div.style.height = `${maxWidth/size}px`;

        div.classList.add('paint');

        container.appendChild(div);
    }
}

function paint(color) {
    const gridSquares = document.querySelectorAll('.paint');

    gridSquares.forEach(target => target.addEventListener('mouseover', () => {
        target.style.backgroundColor = 'black';
    }));
}

function randomNumber() {
    return Math.floor(Math.random() * 256);
}

function randomColor() {
    const red = randomNumber(),
          green = randomNumber(),
          blue = randomNumber();
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;

    return rgbColor;
}

slider.addEventListener('input', (e) => {
    container.innerHTML = "";

    createGrid(e.target.value);
    paint();
});

createGrid(slider.value);
paint();