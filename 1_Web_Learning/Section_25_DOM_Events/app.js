const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log("You Clicked Me!");
    console.log("I hope it worked!!");
}

function scream() {
    console.log("AAAAAAAAHHHHHH");
    console.log("Stop!");
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('Clicking the h1!!!')
}



// Because we can't have two functions, so we need addEventListener
const btn3 = document.querySelector('#v3');
btn3.addEventListener('mouseup', function () {
    alert('Clicked!');
})

// //////////////// For Example //////////////////////////////

function twist() {
    console.log("Twist!");
}

function shout() {
    console.log("Shout!");
}

const tasButton = document.querySelector('#tas');

tasButton.addEventListener('click', shout, { once: true });
tasButton.addEventListener('click', twist);





