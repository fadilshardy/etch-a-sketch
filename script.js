const container = document.querySelector('#sketch-container');


function createSketch(rows = 16, cols = 16) {

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (let i = 0; i < (rows * cols); i++){
        const div = document.createElement('div');
        div.classList = 'grid-box';
        container.appendChild(div);
    
    }
}

function createNewSketch() {

    const rows = prompt('Enter new rows grid');
    const cols = prompt('Enter new cols grid');

    createSketch(rows, cols);
}

const newBtn = document.querySelector('#new-sketch');

newBtn.addEventListener('click', createNewSketch);


createSketch();