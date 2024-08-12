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
console.log(radius);
console.log(abc)
console.log(msg)






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

const isAdult = makeBetweenFunc(19, 64)
const isSenior = makeBetweenFunc(65, 120)


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

try {
    hello.toUpperCase();
} catch {
    console.log("ERROR!!!")
}

console.log("After!")


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











