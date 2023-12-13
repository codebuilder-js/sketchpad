const container = document.querySelector('.container');
const slider = document.querySelector('#grid-range');
const rainbow = document.querySelector('#random-color');

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