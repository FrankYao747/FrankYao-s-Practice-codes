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


//////////////////////////////////////////////


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
