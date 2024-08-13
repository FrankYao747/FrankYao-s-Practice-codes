// Example:
function grumpus() {
    console.log('ugh... you again...')
    console.log('for the last time...')
    console.log('Leave me Alone!')
}



function singsong(n) {
    for (i = 0; i < n; i++) {
        console.log(`Time ${i + 1}:`);
        console.log('DO');
        console.log('RE');
        console.log('MI');
    }
}

function greet(firstName = 'Frank', lastName = 'Yao') {
    console.log(`Hi, ${firstName} ${lastName}!`)

}


function lastElement(tem) {
    if (tem.length === 0) {
        return null
    } else {
        return tem.slice(-1)[0]
    }

}




function capitalize(str) {
    let a = str.slice(0, 1).toUpperCase();
    let b = str.slice(1);
    return a + b
}

// console.log(capitalize('abcdefg'))



function sumArray(list) {
    let sum = 0;
    for (let n of list) {
        sum += n
    }
    return sum
}

// console.log(sumArray([1, 2, 3]))

function returnDay(n) {
    if (n == 1) {
        return "Monday";
    } else if (n == 2) {
        return "Tuesday";
    } else if (n == 3) {
        return "Wednesday";
    } else if (n == 4) {
        return "Thursday";
    } else if (n == 5) {
        return "Friday";
    } else if (n == 6) {
        return "Saturday";
    } else if (n == 7) {
        return "Sunday";
    } else return null

}


let radius = 8;
// let abc = 0;
// let msg = null;
if (radius > 0) {
    var abc = 3.14159;
    var msg = 'HIIII'
}
// console.log(radius);
// console.log(abc)
// console.log(msg)






function callTwice(func) {
    console.log("callTwice:")
    func();
    func();
}

function callTenTimes(f) {
    console.log("callTenTimes:")
    for (let i = 0; i < 10; i++) {
        f();
    }

}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll)
}


// callTwice(rollDie)
// callTenTimes(rollDie)


////////////////////////////////////////////////

// fatcory function:
function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

// const isAdult = makeBetweenFunc(19, 64)
// const isSenior = makeBetweenFunc(65, 120)


/////////////////////////////////////////


// Methods
const myMath = {
    test: "testing",
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}
// myMath.square(4)





const cat = {
    name: 'Blue Steele',
    color: 'Grey',
    breed: 'Scottish Fold',
    meow() {
        console.log(`${this.name} says MEOWWWW`);
    }
}


const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount += 1
        return "EGG"
    }
}

//////////////////////////////

// try {
//     hello.toUpperCase();
// } catch {
//     console.log("ERROR!!!")
// }

// console.log("After!")


function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3))
    } catch (e) {
        console.log(e);
        console.log("Please pass a string next time!")
    }
}






//////////////////////////////////////////////////


// greet('Elvis', 'White')



// grumpus()

// singsong(3)


// lastElement([3, 5, 7]) //7
// lastElement([1]) //1
// lastElement([]) //null




////////////////////////////////////////////////////////

///////////////
// forEach
///////////////


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

// function print(el) {
//     console.log(el)
// }
// // print(numbers[0])
// numbers.forEach(print)


// numbers.forEach(function (el) {
//     console.log(el)
// })

// for (let el of numbers) {
//     console.log(el);
// }


// numbers.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el)
//     }
// })


const movies = [
    {
        title: 'Amadeus',
        score: 99,
    },
    {
        title: 'Stand By Me',
        score: 85,
    },
    {
        title: 'Parasite',
        score: 95,
    },
    {
        title: 'Alien',
        score: 90,
    },
]

// movies.forEach(function (mo) {
//     console.log(`${mo.title} - ${mo.score}/100`);
// })

//////////////////
//  map 
//////////////////

const texts = ['rofl', 'lol', 'omg', 'ttyl'];

const caps = texts.map(function (t) {
    return t.toUpperCase();
})

// texts;
// caps;

const dd = numbers.map(function (m) {
    return m * 2;
})

titles = movies.map(function (mo) {
    return mo.title.toUpperCase();
})




numbers.forEach(function (m) {
    console.log(m * 2);
})


// // DO NOT ALTER THE FOLLOWING CODE:
// const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' }, { first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];

// // Write your code here
// const firstNames = fullNames.map(function (name) {
//     return name.first
// })

////////////////////////////////////////////////



// const add = function(x,y) {
//     return x+y
// }

// const add = (x,y) => {
//     return x+y
// }



