const container = document.querySelector('#sketch-container');

function hoverColorEffect(div) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);

    div.style.backgroundColor = `#${randomColor}`

    currentBrightness = window.getComputedStyle(div).filter;

    brightnessNumber = currentBrightness.match(/\((.*?)\)/)[1];

    div.style.filter = `brightness(${brightnessNumber - 0.1})`;
    
}


function createSketch(squares = 16) {

    container.style.setProperty('--grid-rows', squares);
    container.style.setProperty('--grid-cols', squares);

    for (let i = 0; i < (squares * squares); i++){
        const div = document.createElement('div');
       
        div.classList = 'grid-box';
        div.style.filter = "brightness(100%)";

        div.addEventListener('mouseenter', () => hoverColorEffect(div))
        container.appendChild(div);
    
    }
}

function createNewSketch() {

    const squares = prompt('Please enter a number from 1 to 100 for how many squares grid you want.');

    if(squares > 100) {
        alert('Your request exceed the limit. please input from 1 to 100');
    } else if (squares <= 0) {
        squares = 16;
    }

    document.querySelectorAll('.grid-box').forEach(e => e.remove());

    createSketch(squares);
}

const newBtn = document.querySelector('#new-sketch');

newBtn.addEventListener('click', createNewSketch);


createSketch();