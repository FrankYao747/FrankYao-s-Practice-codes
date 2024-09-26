
// const req = new XMLHttpRequest();

// req.onload = function () {
//     console.log("It Loaded!!!");
//     const data = JSON.parse(this.responseText);
//     console.log(data.name, data.height);

// }

// req.onerror = function () {
//     console.log("ERROR!!!");
//     console.log(this);
// }

// req.open("GET", "https://swapi.dev/api/people/1/");
// // req.setRequestHeader('Accept', 'application/json')
// req.send();

/////////////////////////////////////////////////////////

// fetch("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         console.log("Resolved!", res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//         return fetch("https://swapi.dev/api/people/2/");
//     })
//     .then((res) => {
//         console.log("Second request resolved!!!");
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);

//     })
//     .catch((e) => {
//         console.log("ERROR!", e);
//     });


//////////////////////////////////////////////////////

// const loadStarWarsPeople = async () => {
//     try {
//         const res = await fetch("https://swapi.dev/api/people/1/");
//         const data = await res.json();
//         console.log(data);
//         const res2 = await fetch("https://swapi.dev/api/people/2/");
//         const data2 = await res2.json();
//         console.log(data2);
//     } catch (e) {
//         console.log("ERROR!", e);
//     }
// }

// loadStarWarsPeople();

//////////////////////////////////////////////


// fetch('https://icanhazdadjoke.com/23/2', { headers: { Accept: 'application/json' } })
//     .then((res) => {
//         if (res.status !== 200) {
//             console.log('Problem!', res.status);
//             return;
//         }
//         res.json().then((data) => {
//             console.log(data);
//         });
//     })
//     .catch(function (err) {
//         console.log('Fetch Error', err);
//     })

/////////////////////////////////////


// axios.get("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         console.log(res);
//     })
//     .catch(e => {
//         console.log("ERROR", e);
//     })


// const getStarWarsPerson = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//         console.log(res.data);
//     } catch (e) {
//         console.log("ERROR", e);
//     }
// };

// getStarWarsPerson(5);


//////////////////////////////////////////

const jokes = document.querySelector('#jokes');
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com', config);
        return res.data.joke;
    } catch (e) {
        return "No Jokes Available!"
    }

}

// getDadJoke();

const addNewJoke = async () => {
    const jokeText = await getDadJoke()
    // console.log(jokeText);
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}

const button = document.querySelector('button');
button.addEventListener('click', addNewJoke);








