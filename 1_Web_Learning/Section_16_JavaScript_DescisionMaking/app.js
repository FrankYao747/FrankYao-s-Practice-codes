// console.log("Hello from our first JS file!");
// let total = 1 + 3;
// console.log(`Total is ${total}`);
// console.log("Goodbye!!!")



// /////////////////////////////////////



// console.log(
//     "Before Conditional"
// )
// let random = Math.random();
// if (random < 0.5) {
//     console.log("LESS! LESS! LESS!")
//     console.log("Your number is less than 0.5!")
// }
// else {
//     console.log("MORE! MORE! MORE!")
//     console.log("Your number is greater(or equal) than 0.5!!!!")

// }
// console.log(`Your random number is: ${random}.`)
// console.log("After Conditional")


// /////////////////////////////////////////

// const dayOfWeek = prompt("Enter a day").toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log("UGHHH, I hate mondays")
// } else if (dayOfWeek === 'Saturday') {
//     console.log("YAY, I LOVE saturdayS")
// } else if (dayOfWeek === 'friday') {
//     console.log("Fridays are decent, especially after work!")
// } else {
//     console.log("MEH")
// }




/////////////////////////////////////

// 0 - 5 - FREE
// 5 - 10 CHILD $10
// 10 -65 ADULT $20
// 65+ Senior $10

// const age = prompt("Please enter your age:");

// if (age < 5) {
//     console.log("You are a baby, you get in for free!")
// } else if (age < 10) {
//     console.log("You are a child, you pay $10. ")
// } else if (age < 65) {
//     console.log("You are an adult, you pay $20.")
// } else {
//     console.log("You are a senior, you pay $10.")
// }


////////////////////////////////////////////


const password = prompt("Please enter a new password");

// Password must be 6+ characters

if (password.length >= 6) {


    // Password cannnot include space

    if (password.indexOf(' ') === -1) {
        console.log("Valid Password!")
    } else {
        console.log("Password cannot contain spaces!")
    }

} else {
    console.log("Password Too short! Must be 6+ characters")
}

















