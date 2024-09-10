const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");

form.addEventListener("submit", function (e) {

    e.preventDefault();
    // console.log(input.value);
    let catName = input.value;
    let newLI = document.createElement("LI");
    newLI.innerText = catName;
    list.append(newLI);
    input.value = "";
});


/////////////////////////////////////////////////////


const tweetForm = document.querySelector("#tweetForm");

const tweetsContainer = document.querySelector("#tweets");

// const lis = document.querySelectorAll('li');
// for (let li of lis) {
//     li.addEventListener('click', function () {
//         li.remove();
//     })
// }

tweetsContainer.addEventListener('click', function (e) {
    // this.remove();
    // console.log("Click On UL!");
    // console.log(e); 


    e.target.nodeName === 'LI' && e.target.remove(); // if  nodeName === 'LI'
});


tweetForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const userNameInput = this.elements.username;
    const tweetInput = this.elements.tweet;
    if (userNameInput.value || tweetInput.value) {
        addTweet(userNameInput.value, tweetInput.value);
        userNameInput.value = "";
        tweetInput.value = "";
    } else {
        console.log("Null!!!");
    };
});

const addTweet = (userName, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(userName);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    console.log(newTweet);
    tweetsContainer.append(newTweet);
}


const qtyforms = document.querySelector('#qtyform');
const qtylist = document.querySelector('#qtylist');

qtyforms.addEventListener("submit", function (e) {
    e.preventDefault();
    const productInput = this.elements.product.value;
    const qtyInput = this.elements.qty.value;
    console.log(`${qtyInput} ${productInput}`);
    const item = document.createElement('li');
    // const bTag = document.createElement('b');
    item.innerText = `${qtyInput} ${productInput}`;
    qtylist.append(item);
    this.elements.product.value = "";
    this.elements.qty.value = "";

});

/////////////////////////////////////////////////////////////////


const inputEvent = document.querySelector('#inputEvent');

const h1E = document.querySelector('#h2E');



inputEvent.addEventListener('input', function (e) {
    // console.log("Inputed!");

    if (inputEvent.value == "") {
        h1E.innerText = "Enter Your Username";
    } else h1E.innerText = `Welcome, ${inputEvent.value}`;
})




const bubbling = document.querySelector('#bub');

bubbling.addEventListener('click', function (e) {
    console.log('clicked!');
    e.stopPropagation();
})











