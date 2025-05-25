// console.log('Promise exercise');


function processNumber(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = number * 2;
            console.log(`Processed number: ${result}`);
            resolve(result);
        }, 1000);
    })
}

function processNumbers(numbers) {
    processNumber(numbers[0])
        .then(result1 => processNumber(numbers[1]))
        .then(result2 => processNumber(numbers[2]))
        .then(result3 => {
            console.log('All numbers processed.');
        })
        .catch(error => {
            console.log('Error processing numbers: ', error);
        });
}



const numbers = [1, 2, 3];
processNumbers(numbers);















