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
    res.send("This is the home page!!!");
});

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

app.get(('*'), (req, res) => {
    console.log("I don't know that path!!!");
    res.send("Wrong path!!!!!!");
});



app.listen(8080, () => {
    console.log("Linstening on Port 8080!")
})





// app.get(/(.*)/, (req, res) => {



