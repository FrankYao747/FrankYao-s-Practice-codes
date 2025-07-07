//  call back hell

const buyFruit = function (fruit, callbback) {
    setTimeout(() => {
        console.log(fruit)
        callbback()
    }, 1000);
}

buyFruit('apple', function () {
    buyFruit('banana', function () {
        buyFruit('orange', function () {
            console.log('end')
        })
    })
})


const buyFruit_p = function (fruit) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(fruit);
            resolve()
        }, 1000);
    })
}
// When the status is 'resolved', then the function in 'then ' will be run, if the status is 'reject', the 'catch' function will be run.
// the return of then() is also a promise object
// reject() will be  via catch(), another point, when  the callback of resolve be wrong, it also will via catch()
// then()must have a return value, or the next then() will not get the results from the previous one.
buyFruit_p('apple')
    .then((res) => {
        return buyFruit_p('banana')
    })
    .then((res) => {
        console.log(res)
        return buyFruit_p('orange')
    })
    .then(() => {
        console.log('end')
    })
    .catch(function (err) {
        console.log(err)
    })


