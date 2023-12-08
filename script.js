const container = document.querySelector('.container');

for(let i = 1; i <= 256; i++) {
    const gridItem = document.createElement('div');

    gridItem.style.border = '1px solid black';
    gridItem.style.width = '16px';
    gridItem.style.height = '16px';
    container.appendChild(gridItem);
}