const fakeRequest = (url) => {
    return new Promise((OK, Bad) => {
        // return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 2000) {
                Bad('Request error!!!');
            }
            OK(`Your fake data here! ${url}`);
        }, 1000)
    })
}

// fakeRequest('/dogs/1')
//     .then((data) => {
//         console.log("Done with request!");
//         console.log('data is: ', data);
//     })
//     .catch((err) => {
//         console.log("OH NO!", err);
//     })

/////////////////////////////////////////////////////////////


const delayColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayColorChange('red', 1000)
    .then(() => delayColorChange('orange', 1000))
    .then(() => delayColorChange('yellow', 1000))
    .then(() => delayColorChange('green', 1000))
    .then(() => delayColorChange('blue', 1000))
    .then(() => delayColorChange('indigo', 1000))
    .then(() => delayColorChange('violet', 1000))


////////////////////////////////

const login = async (username, password) => {
    if (!username || !password) throw "Missing Credentials"
    if (password === 'corgifeetarecute') return "Welcome!"
    throw "Invalid Password"
}

// login('akjsdhsa', 'corgifeetarecute')
//     .then(msg => {
//         console.log("Logged In!")
//         console.log(msg)
//     })
//     .catch(err => {
//         console.log("Error!")
//         console.log(err)
//     })

//////////////////////////////


async function rainbow() {
    await delayColorChange('red', 1000)
    await delayColorChange('orange', 1000)
    await delayColorChange('yellow', 1000)
    await delayColorChange('green', 1000)
    await delayColorChange('blue', 1000)
    await delayColorChange('indigo', 1000)
    await delayColorChange('violet', 1000)
    return "ALL Done!"
}

// rainbow().then(() => console.log("END of RAINBOW!!!"))


async function printRainbow() {
    await rainbow();
    console.log("END of RAINBOW!!!")
}


// printRainbow();


async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1');
        console.log(data1);
        let data2 = await fakeRequest('/page2');
        console.log(data2);
    } catch (e) {
        console.log("Caught An Error!", e);
        console.log("It's OK", e);
    }
}


