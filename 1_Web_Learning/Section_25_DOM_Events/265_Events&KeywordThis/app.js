const randomColor = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`
}


function colorize() {
    let col = randomColor();
    this.style.backgroundColor = col;
    this.textContent = col;
    this.style.color = randomColor();
}


const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', colorize);
}

const h1s = document.querySelectorAll('h1');

for (let h1 of h1s) {
    h1.addEventListener('click', colorize);
}














