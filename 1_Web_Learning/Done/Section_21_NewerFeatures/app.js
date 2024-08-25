function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}

function multiply(a, b = 1) {
    return a * b;
}



////////////////////////////
///////// spread ///////////
////////////////////////////
const nums = [2, 3, 4, 5, 6]


Math.max(...nums)

console.log("hello")
console.log(..."hello")


const cats = ['Blue', 'Scout', 'Rocket'];
const cats_copy = [...cats]
const dogs = ['Rusty', 'Wyatt']

//  spread function will save as a copy
const allPets = [...cats, ...dogs, 'Speedy']

// ["hello"]
// [..."hello"]


//  spread in Objects Literals

const feline = { legs: 4, family: 'Felidae' };
const canine = { family: 'Caninae', furry: true };

const dog = { ...canine, isPet: true };

const lion = { ...feline, genus: 'Panthera' };
const catDog = { ...feline, ...canine };
// they both have 'family', so the second one (canine) will win.

const catDog_2 = { ...canine, ...feline, family: 'Steele' };
// they both have 'family', so the third one will win.


// {...[2,4,6,8]};
// {0: 2, 1: 4, 2: 6, 3: 8};

// {..."Hello"};
// {0: 'H', 1: 'e', 2: 'l', 3: 'l', 4: 'o'};


const dataFromForm = {
    email: 'xxxx@gmail.com',
    password: 'tobias123',
    username: 'tfunke'
}

const newUser = { ...dataFromForm, id: 2345, isAdmin: false }


////////////////////////////
///////// rest ///////////
////////////////////////////


function log() {
    console.log(...arguments)
}



function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}

sum(34, 55, 66, 88)

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`Gold Medal goes to: ${gold}`)
    console.log(`Silver Medal goes to: ${silver}`)
    console.log(`And thanks to everyone else: ${everyoneElse} `)
}

raceResults('Tammy', 'Todd', 'Tina', 'Travis', 'Bob')

////////////////////////////
///////// Array Destructyring ///////////
////////////////////////////


const scores = [999, 888, 777, 666, 555, 444, 333, 222, 111];

const highscore = scores[0];

const secondHighScore = scores[1];

const [gold, silver, bronze, ...everyoneElse] = scores;


////////////////////////////
///////// Object Destructyring ///////////
////////////////////////////

const user = {
    email: 'XXX@gmail.com',
    password: 'asdfg',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, porro, impedit rerum sequi minima architecto incidunt at sapiente labore harum, quidem aliquam repellat voluptates quas perferendis non. Adipisci, consequuntur aspernatur!",
    city: 'San Francisco',
    state: 'California'
}

const user2 = {
    email: 'Stacy@gmail.com',

    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,

    city: 'Tulsa',
    state: 'Oklahoma'
}

// const { email, firstName, lastName, city, bio } = user;

// const { born: birthYear, died: deathYear = 'N/A' } = user;

const { city, state, died = 'N/A' } = user2;

////////////////////////////
///////// Param Destructyring ///////////
////////////////////////////


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


// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`
// }


function fullName({ firstName, lastName }) {
    // const { firstName, lastName } = user;
    return `${firstName} ${lastName}`
}

movies.filter((movie) => movie.score >= 90)

movies.filter(({ score }) => score >= 90)


movies.map(movie => {
    return `${movie.title} (${movie.year}) is rated ${movie.score}`
})


movies.map(({ title, year, score }) => {
    return `${title} (${year}) is rated ${score}`
})













