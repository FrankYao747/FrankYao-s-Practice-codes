const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log("Connection Open!!!")
    })
    .catch(err => {
        console.log("OH NO, Error!!!!")
        console.log(err)
    })



const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName')
    .get(function () {
        return `${this.first} ${this.last}`
    }).set(function (v) {
        this.first = v.substr(0, v.indexOf(' '));
        this.last = v.substr(v.indexOf(' ') + 1);
    })


personSchema.pre('save', async function () {
    // this.first = 'Yo';
    // this.last = 'Mama';
    console.log("About to save!!!")
})

personSchema.post('save', async function () {
    console.log("Just saved!!!")
})

const Person = mongoose.model('Person', personSchema);













