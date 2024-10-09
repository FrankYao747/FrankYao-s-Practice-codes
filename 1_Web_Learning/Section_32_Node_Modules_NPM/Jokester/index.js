const jokes = require("give-me-a-joke");
const colors = require("colors");
// console.log(jokes.getRandomCNJoke);
const cowsay = require("cowsay"); // Needs type "npm link cowsay" in Terminal

console.log(cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U "
}));

// To get a random Chuck Norris joke
jokes.getRandomDadJoke(function (joke) {
    console.log(`${colors.red("Joke 1: ")}\n${joke.rainbow}\n`);


    jokes.getRandomDadJoke(function (joke) {
        // console.log(`${colors.red("Joke 1: ")}\n${joke.rainbow}\n`);
        console.log(`${colors.red("Joke 2: ")}\n${joke.green}\n`);
    });
});


