
// for (let i = 1; i <= 10; i++) {
//     console.log("I am the loop body!!!");
//     console.log(i);
// }


// for (let i = 1; i <= 20; i += 2) {
//     console.log(i)
// }


// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i)
// }

// for (let i = 1; i <= 1000; i *= 10) {
//     console.log(i)
// }

// for (let i = 25; i >= 0; i -= 5) {
//     console.log(i)
// }

// const animals = ['lions', 'tigers', 'bears']

// for (let i = 0; i < animals.length; i++) {
//     console.log(i, animals[i])
// }


// for (let i = animals.length - 1; i >= 0; i--) {
//     console.log(i, animals[i])
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// for (n = 0; n < people.length; n++) {
//     console.log(`${n + 1} | ${people[n].toUpperCase()}`)
// }


// for (let i = 1; i <= 10; i++) {
//     console.log(`i is: ${i}`)
//     for (let j = 1; j < 4; j++) {
//         console.log(`    j is: ${j}`)
//     }
// }



// let num = 0;

// while (num < 10) {
//     console.log(num);
//     num++;
// }

// const SECRET = "BabyHippo";

// let guess = null; //prompt("enter the secret code...");
// while (guess !== SECRET) {
//     guess = prompt("enter the secret code...");
// }
// console.log("Congrats! ");


// let input = prompt("Hey, say something!")

// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me!") {
//         break;
//     }

// }
// console.log("OK, you win!")


// for (let i = 0; i < 1000; i++) {
//     console.log(i);
//     if (i === 100) break;
// }

// const number = Number(prompt("Please enter a number"));
// if (number) {
//     console.log("Great, number has been stored!");
//     while (number) {
//         guess = Number(prompt("Please guess the number:"))
//         if (guess > number) {
//             console.log("So large!")
//         }
//         else if (guess < number) {
//             console.log("Too small!")
//         }
//         else if (guess == number) {
//             console.log(`Bingo! The number is ${number}!!!`)
//             break;
//         }
//         else {
//             console.log("Error!")
//             break;
//         }
//     }
// }
// console.log("Done!")

////////////////////////////////////////////////////////////////   My Answer: //////////


// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number!"));
// }
// const targetNumber = Math.floor(Math.random() * maximum) + 1;
// let times = 5;
// while (targetNumber) {
//     if (times == 0) {
//         console.log("you have guessed 5 times!");
//         break;
//     }
//     guess = parseInt(prompt("Please guess the number:"))
//     if (guess > targetNumber) {
//         console.log("So large!")
//     }
//     else if (guess < targetNumber) {
//         console.log("Too small!")
//     }
//     else if (guess == targetNumber) {
//         console.log(`Bingo! The number is ${targetNumber}!!!`)
//         break;
//     }
//     else {
//         console.log("Error!")
//         break;
//     }
//     times -= 1
// }
// console.log("Finish!")


///////////////////////////
//////  Teacher's Answer: ///////////
///////////////////////////

// let maximum = prompt("Enter the maximum number!");
// while (!maximum) {
//     if (maximum === 'q') break;
//     maximum = prompt("Enter a valid number!");
// }

// if (maximum !== 'q') {
//     const targetNum = Math.floor(Math.random() * parseInt(maximum)) + 1;

//     let guess = prompt("Enter your first guess! (Type 'q' to quit)");
//     let attempts = 1;

//     while (parseInt(guess) !== targetNum) {
//         if (guess === 'q') break;
//         guess = parseInt(guess);

//         if (guess > targetNum) {
//             guess = prompt("Too high! Enter a new guess:")
//             attempts++;
//         } else if (guess < targetNum) {
//             guess = prompt("Too low! Enter a new guess:")
//             attempts++;
//         } else {
//             guess = prompt("Invalid guess. Please enter a number or 'q' to quit.")
//         }

//         if (attempts == 5) {
//             console.log("You have guessed 5 times!")
//             break;
//         }
//     }
//     if (guess === 'q') {
//         console.log("OK, you quit!")
//     } else {
//         console.log("Congrats You Win!!!")
//         console.log(`You got it!!! It took you ${attempts} guesses.`)
//     }
// }
// else {
//     console.log("OK, you quit!")
// }

// const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pic']

// for (let sub of subreddits) {
//     console.log(`Visit reddit.com/r/${sub}`);
// }

// for (let n of "hello world") {
//     console.log(n)
// }


// const testScores = {
//     keenan: 80,
//     damon: 67,
//     kim: 89,
//     shawn: 91,
//     marlon: 72
// }


// for (let person in testScores) {
//     // console.log(person)
//     console.log(`${person.toUpperCase()}'s score is ${testScores[person]}`)
// }

// // for (let n = 0; n < testScores.length; n++) {
// //     console.log(testScores[n])
// // }

// console.log(Object.keys(testScores))

// console.log(Object.values(testScores))



/////////////////////////////////////////
///////////  My Todo List App /////////////
//////////////////////////////////////////
list = [];
let flag = true;
while (flag) {

    input = prompt("What would you like to do?").toLowerCase();
    if (input == 'new') {
        let newInput = prompt("Please enter new todo:");
        list.splice(list.length, 0, newInput);

    } else if (input == 'list') {
        if (list.length != 0) {
            let n = 1;
            console.log("*************");
            for (item of list) {
                console.log(`${n}: ${item}`);
                n += 1;
            }
            console.log("*************");
        } else {
            console.log("*************");
            console.log("Empty List!!!");
            console.log("*************");
        }

    } else if (input == 'delete') {

        chooseNum = prompt("Please enter the item number:")

        if (parseInt(chooseNum) <= (list.length) && parseInt(chooseNum) > 0) {
            let temItem = list[chooseNum - 1]
            list.splice(chooseNum - 1, 1);
            console.log(`${temItem} has been deleted!`)
            break;
        } else {
            console.log("Please enter a valid number")
        }


    } else if (input == 'quit' || input == 'q') {
        console.log("OK, You Quit!");
        flag = false;
        break;
    } else {
        console.log("Enter Error!");
    }
}

