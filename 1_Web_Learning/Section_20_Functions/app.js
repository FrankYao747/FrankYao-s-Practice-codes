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


////////////////////////////////////////
///////// this ///////////////////////
////////////////////////////////////////


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



//  Pay attention to "this" between normal function and arrow function
const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName())
        }, 3000)
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
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
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


const newMovies = movies.map(function (movie) {
    return `${movie.title} - ${movie.score / 10}`
})

const newMovies_2 = movies.map(movie => (`${movie.title} - ${movie.score / 10}`));


// numbers.forEach(function (m) {
//     console.log(m * 2);
// })


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


//  No return:
const rollDie_6 = () => {
    Math.floor(Math.random() * 6) + 1;
}

// includes return:
const rollDie_6_v2 = () => (
    Math.floor(Math.random() * 6) + 1
);


const greet_n = (name) => {
    return (`Hey ${name}!`);
}

const add = (a, b) => a + b;



// ////////////////////////////

// console.log("waiting... 3S")
// setTimeout(() => {
//     console.log("Hello!!!!")
// }, 3000)




// const id = setInterval(() => {
//     console.log(Math.random())
// }, 2000);


// clearInterval(id)

////////////////////////////////////////
///////// filter ///////////////////////
////////////////////////////////////////

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const odds = nums.filter(n => (n % 2 === 1
));
const smallNums = nums.filter(n => n < 5);

const goodMovies = movies.filter(m => (m.score > 80));

const goodTitle = movies.filter(m => (m.score > 80)).map(m => m.title);

const recentMovies = movies.filter(m => (m.year > 2000));


// Test:

// function validUserNames(usernames) {
//   return usernames.filter(n=> n.length<10);
// } 
const validUserNames = usernames => usernames.filter(n => n.length < 10);



////////////////////////////////////////
///////// every ///////////////////////
////////////////////////////////////////


const exams = [80, 98, 92, 78, 90, 89, 84, 81, 77]

exams.every(score => score >= 75)


////////////////////////////////////////
///////// some ///////////////////////
////////////////////////////////////////

exams.some(score => score >= 75)


movies.some(movie => movie.year > 2015)

const allEvens = numbers => numbers.every(num => (num % 2 === 0));


////////////////////////////////////////
///////// reduce ///////////////////////
////////////////////////////////////////


const red_list = [3, 5, 7, 9, 11]

const red = red_list => red_list.reduce((accumulator, currentValue) => (accumulator + currentValue));


const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

let total = 0;
for (let price of prices) {
    total += price
}
console.log(`The sum of ${prices} is: ${total}`)


const cul = prices.reduce((total, price) => (total + price));

const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    } return min;
});


const bestMovie = movies.reduce((movie_a, movie_b) => {
    if (movie_a.score > movie_b.score) {
        return movie_a.title;
    } return movie_b.title;
});


const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num, 100)



// ///////////////////////////////////







