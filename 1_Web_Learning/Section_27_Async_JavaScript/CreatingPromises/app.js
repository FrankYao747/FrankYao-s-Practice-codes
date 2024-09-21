const fakeRequest = (url) => {
    return new Promise((OK, Bad) => {
        // return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                OK('Your fake data here!');
            }
            Bad('Request error!!!');
        }, 1000)
    })
}

fakeRequest('/dogs/1')
    .then((data) => {
        console.log("Done with request!");
        console.log('data is: ', data);
    })
    .catch((err) => {
        console.log("OH NO!", err);
    })

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

login('akjsdhsa', '')
    .then(msg => {
        console.log("Logged In!")
        console.log(msg)
    })
    .catch(err => {
        console.log("Error!")
        console.log(err)
    })















