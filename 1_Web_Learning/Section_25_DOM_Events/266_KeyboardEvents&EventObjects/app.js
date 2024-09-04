document.querySelector('button').addEventListener('click', function (evt) {
    // alert("Clicked!");
    console.log(evt);
});

// MDN docs "pointer events"

// The part that helped me: "Much of today's web content assumes the user's pointing device will be a mouse. However, since many devices support other types of pointing input devices, such as pen/stylus and touch surfaces, extensions to the existing pointing device event models are needed. Pointer events address that need."

const input = document.querySelector('input');
// input.addEventListener('keydown', function (evt) {
//     console.log(evt.key);
//     console.log(evt.code);
//     // console.log(evt);
// })
// input.addEventListener('keyup', function () {
//     console.log("Keyup!");
// })

window.addEventListener('keydown', function (evt) {
    // console.log(evt.key);
    // console.log(evt.code);
    // console.log(evt);
    switch (evt.code) {
        case 'ArrowUp':
            console.log("Up!");
            break;
        case 'ArrowDown':
            console.log("Down!");
            break;
        case 'ArrowRight':
            console.log("Right!");
            break;
        case 'ArrowLeft':
            console.log("Left!");
            break;
        default:
            console.log("Ignored!")
    }
})







