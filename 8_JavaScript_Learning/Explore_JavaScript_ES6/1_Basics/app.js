changLine = "//////////////////////////////////////////////";

// 1. Var

var x = 10;
console.log('var: ', x);

if (true) {
    var x = 20;
    console.log("var inside if block", x);
}

console.log('var after block ', x);

// 2. let


let y = 10;
console.log('let ', y);

if (true) {
    let y = 20;
    console.log("let inside if block", y);
}

console.log('let after block', y);

// 3. const


const z = 10;
console.log('const ', z);

if (true) {
    const z = 20;
    console.log("const inside if block", z);
}

console.log('const after block', z);

// z = 30;
// Uncaught TypeError: Assignment to constant variable.

console.log(changLine);
////////////////////////////////////////////////

function addES5(a, b) {
    return a + b;
}

// Arrow function
const addES6 = (a, b) => a + b;


console.log(changLine);
/////////////////////////////////////////////


// ES5 string Concatentation

var nameES5 = "Peter";
var ageES5 = 18;
var messageES5 = "Hello, my name is " + nameES5 + " and my age is " + ageES5 + ".";
console.log("ES5 version: ", messageES5);

var nameES6 = "Davin";
var ageES6 = 20;
var messageES6 = `Hello, my name is ${nameES6} and my age is ${ageES6}.`;
console.log("ES6 version: ", messageES6);


console.log(changLine);
/////////////////////////////////////////////



// Object

const person = {
    name: "Connor",
    age: 18,
    loc: {
        city: "Mel",
        country: "AU"
    }
};

// Array

const fruits = ['Apple', 'Pear', 'Banana']


//////////////// Destructing ////////////////////////////


console.log('person name ', person.name);
console.log('person age', person.age);


const { name, age, loc: { city, country }, loc } = person;

console.log('Destructed name', name);
console.log('Destructed age', age);

console.log('Destructed city', city);
console.log('Destructed country', country);
console.log('Destructed Loc', loc);

///////////////////////////////

// Spread
const numbers = [1, 2, 3];
console.log(...numbers);

const moreNumbers = [4, 5, 6];
const combined = [...numbers, ...moreNumbers];
console.log(combined);

console.log(...numbers, ...moreNumbers);


// Rest

//Without Rest operator
function additionWithoutRest(a, b) {
    return a + b;
}

// with Rest
function addionWithRest(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}


console.log('additionWithoutRest ', additionWithoutRest(2, 53));

console.log('additionWithRest ', addionWithRest(2, 53, 4, 5, 6, 67));


// Spread


//With

function combineWithoutSpread(arr1, arr2) {
    return arr1.concat(arr2)
}

//With spread
function combineWithSpread(arr1, arr2) {
    return [...arr1, ...arr2];
}

console.log('combineWithoutSpread', combineWithoutSpread([1, 2], [3, 4]));

console.log('combineWithSpread', combineWithSpread([5, 6], [7, 8]));

//////////// Assignment /////////////////
const test_name = "Alice";
if (true) {
    const name = "Bob";
    console.log(test_name); // 输出: Bob
}
console.log(test_name);     // 输出: Alice


const add = (a, b) => a + b;

/////////////////////////////

const obj = {
    value: 10,
    regularFunc: function () {
        console.log(this.value); // 输出 10（this 指向 obj）
    },
    arrowFunc: () => {
        console.log(this.value); // undefined（this 不指向 obj）
    }
};

obj.regularFunc(); // 输出：10
obj.arrowFunc();   // 输出：undefined（因为箭头函数没有自己的 this）

///////////////////////////////


let greeting = "Hello, " + name + "! Welcome to the course.";

let greeting_2 = `Hello, ${name}! Welcome to the course.`;

////////////// Destructing ////////////////////

const person_a = {
    name_a: "Alice",
    age_a: 25,
    city_a: "Sydney"
};

// Wrong:
// console.log(person_a.name);
// console.log(person_a.age);


const { name_a, age_a } = person_a;

console.log(name_a);
console.log(age_a);


function Hello({ name_a, age_a }) {
    console.log(`Hello! ${name_a}, you are ${age_a} old.`)
}

Hello(person_a);

///////   Default Parameters/////


function calculateArea(width, height = width) {
    return width * height;
}

console.log(calculateArea(10));


//// Rest/Spread/////////


function sum(a, ...b) {
    return a + b;
}
let arr1 = [1, 2];
let arr2 = [3, 4];

// console.log(sum(arr1, arr2));


function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0)
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4));

let res = [...arr1, ...arr2];
console.log(res);


