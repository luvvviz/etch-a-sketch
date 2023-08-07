const container = document.querySelector('#container');
const btn = document.querySelector('button');
btn.addEventListener("click", getPlayerChoice);
const btnBlack = document.querySelector('.black');
const btnColor = document.querySelector('.color');
createGrid(16, 16);

let activeButton = null;

btnBlack.addEventListener('click', () => {
    toggleButtonState(btnBlack);
});
btnColor.addEventListener('click', () => {
    toggleButtonState(btnColor);
});

function toggleButtonState(button) {
    if (button === activeButton) {
        activeButton.classList.remove('pressed');
        activeButton = null;
    } else {
        if (activeButton) {
            activeButton.classList.remove('pressed');
        }
        activeButton = button;
        activeButton.classList.add('pressed');
    }
    return activeButton;
}

function getPlayerChoice() {
    let playerChoice = prompt('What is your dimensions of choice?', '');
    if (playerChoice > 64) {
        alert("Too many squares");
        return;
    }
    createGrid(playerChoice, playerChoice);
}

function createGrid(rows, columns) {
    container.replaceChildren();
    container.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    for (let i = 0; i < rows * columns; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
        
        square.addEventListener("mouseover", () => {
            if (btnBlack === activeButton) {
                square.style.backgroundColor = 'black';
            } else if (btnColor === activeButton) {
                const randomColor = getRandomColor();
                square.style.backgroundColor = randomColor;
            }
        });
    }
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
