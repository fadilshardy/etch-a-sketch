const container = document.querySelector('#container');

const row = 16;
const cell = 16;

for (let i = 0; i < row * cell; i++){
    const div = document.createElement('div');
    div.classList = 'grid-box';
    container.appendChild(div);
}