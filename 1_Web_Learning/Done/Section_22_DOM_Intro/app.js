const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOUR CODE GOES HERE:
const allSpans = document.querySelectorAll('h1 span');
i = 0;
for (let spa of allSpans) {
    spa.style.color = colors[i];
    i++;
}

// const spans = document.querySelectorAll('h1 span');
// for (let i = 0; i < spans.length; i++) {
//     spans[i].style.color = colors[i];
// }


// const allLinks = document.querySelectorAll('a');
// for (let link of allLinks) {
//     link.style.color = 'rgb(0,108,134)';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy';
// }







// WRITE YOUR CODE IN HERE:

// const lis = document.querySelectorAll('ul li');

// // li.classList.toggle('.highlight');
// for (let i = 0; i < lis.length; i++) {
//     if (lis[i].classList.contains('highlight')) {
//         lis[i].classList.remove('highlight');
//     } else { lis[i].classList.add('highlight'); }
// }


// for (let i = 0; i < 100; i++) {
//     const b1 = document.createElement('button');
// b1.innerText = 'Hey!';
//     document.querySelector('#container').appendChild(b1);
// }