const express = require('express');

const app = express();

// // console.dir(app);
// app.use((req, res) => {
//     console.log("We got a new request!")
//     // console.dir(req)
//     // res.send("Hello, we got your request! This is a response!")
//     // res.send({ color: 'red' })
//     res.send('<h1>This is my webpage!</h1>');
// })


app.get(('/'), (req, res) => {
    console.log("Welcome!!!");
    res.send("Welcome to the home page!!!");
});

// app.get('/r/:subreddit', (req, res) => {
//     // console.log(req.params)
//     // res.send("This is a subreddit!!!");
//     const { subreddit } = req.params;
//     res.send(`<h1> Browsing the ${subreddit} subreddit </h1>`);
// })
app.get('/r/:subreddit/:postId', (req, res) => {
    // console.log(req.params)
    // res.send("This is a subreddit!!!");
    const { subreddit, postId } = req.params;
    res.send(`<h1> Viewing Post ID: ${postId} on the ${subreddit} subreddit </h1>`);
})
app.get(('/cats'), (req, res) => {
    console.log("Cat request!!!");
    res.send("Meow!!!");
});
app.post('/cats', (req, res) => {
    res.send("Post request to /cats!!!! This is different than a Get request!!");
})

app.get(('/dogs'), (req, res) => {
    console.log("Dog request!!!");
    res.send("Woof!!!");
});

app.get('/search', (req, res) => {
    // console.log(req.query);
    const { q } = req.query;
    if (!q) {
        res.send("Nothing found if nothing searched!");
    } else {
        res.send(`<h1> Searching results for: ${q} </h1>`);
    }
    // res.send('HI!');
})

// You need to add return keyword on line 33.
// If you don't have return keyword, the 2nd res.send will run too, which is causing the error.
// Either have the return keyword like below

// if(!q) {
//    return res.send("Some Text");
// }
// res.send("Hello");
// OR, use if else statement like below

// if(!q) {
//    res.send("Some Text");
// } else {
//    res.send("Hello");
// }

app.get(('*'), (req, res) => {
    // console.log("I don't know that path!!!");
    res.send("Wrong path!!!!!!");
});



app.listen(8080, () => {
    console.log("Linstening on Port 8080!")
})





// app.get(/(.*)/, (req, res) => {



