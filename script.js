const container = document.querySelector('#sketch-container');


function createSketchGrid(rows = 16, cols = 16) {

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (let i = 0; i < (rows * cols); i++){
        const div = document.createElement('div');
        div.classList = 'grid-box';
        container.appendChild(div);
    
    }
}

createSketchGrid();