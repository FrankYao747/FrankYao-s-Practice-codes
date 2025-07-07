//Verify that multiple request results meet the criteria

const dataOne = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = 'first data';
            // resolve(data);
            reject('first data validation failed');
        }, 800);
    })
}

const dataTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = 'second data';
            // resolve(data);
            reject('Second data validation failed')
        }, 700);
    })
}


//The parameter of promise.all is an array, each item of the array must be a promise object, only when the state of all items becomes resolve, all() will run then(), otherwise catch (), then the result is the first error thrown by reject().

const handleBtnClick = () => {
    Promise.all([dataOne(), dataTwo()])
        .then((res) => {
            console.log('Pass validation')
        })
        .catch(err => console.log(err))
}


