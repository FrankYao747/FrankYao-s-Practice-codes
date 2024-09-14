// const p1 = document.querySelector('#p1');
// const p2 = document.querySelector('#p2');
// const reset = document.querySelector('#reset');

// const h1 = document.querySelector('h1');


// p1.addEventListener('click', function (e) {
//     h1.innerText = `${Number(h1.innerText[0].slice(0, 1)) + 1} ${h1.innerText.slice(1)}`;
// })

// p2.addEventListener('click', function (e) {
//     h1.innerText = `${h1.innerText.slice(0, 5)} ${Number(h1.innerText.slice(5)) + 1}`;
// })

// reset.addEventListener('click', function (e) {
//     h1.innerText = '0 to 0';
// })


// ///////////////////////////////////////////////////////

const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#resetButton');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playto');

let winningScore = 3;
let p1Score = 0;
let p2Score = 0;
let isGameOver = false;

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;

        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;

        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;

        if (p2Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('has-text-danger');
            p2Display.classList.add('has-text-success');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener('click', scoreReset);


winningScoreSelect.addEventListener('change', function () {
    // winningScore = parseInt(this.value);
    winningScore = Number(this.value);
    scoreReset();
});



function scoreReset() {
    isGameOver = false;
    p1Score = 0;
    p1Display.textContent = 0;
    p2Score = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
}
