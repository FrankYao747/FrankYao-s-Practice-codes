const button = document.querySelector('button');
const h1 = document.querySelector('h1');

const randomColor = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`
}
// button.style.display = "flex";
// button.style.alignItems = "center";

button.addEventListener('click', function () {
    let col = randomColor();
    document.body.style.backgroundColor = col;
    h1.textContent = col;



})


