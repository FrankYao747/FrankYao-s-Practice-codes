const express = require('express');

const app = express();

// console.dir(app);
app.use(() => {
    console.log("We got a new request!")
})

app.listen(8080, () => {
    console.log("Linstening on Port 8080!")
})









