const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const reset = document.querySelector('#reset');

const h1 = document.querySelector('h1');


p1.addEventListener('click', function (e) {
    h1.innerText = `${Number(h1.innerText[0].slice(0, 1)) + 1} ${h1.innerText.slice(1)}`;
})

p2.addEventListener('click', function (e) {
    h1.innerText = `${h1.innerText.slice(0, 5)} ${Number(h1.innerText.slice(5)) + 1}`;
})

reset.addEventListener('click', function (e) {
    h1.innerText = '0 to 0';
})


// ///////////////////////////////////////////////////////

const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

let winningScore = 5;
let p1Score = 0;
let p2Score = 0;
let isGameOver = false;

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;

        if (p1Score === winningScore) {
            isGameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;

        if (p2Score === winningScore) {
            isGameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});









