const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => {
        console.log("Connection Open!!!")
    })
    .catch(err => {
        console.log("OH NO, Error!!!!")
        console.log(err)
    })

// main().catch(err => console.log(err));

// async function main() {
//     await mongoose.connect('mongodb://127.0.0.1:27017/movieApp');
//     console.log("Connection Open!!!")
// }

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);

// const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });


// amadeus.save()

// Movie.insertMany([
//     { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//     { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
//     { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
//     { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
//     { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
// ])
//     .then(data => {
//         console.log("It Worked!!!");
//         console.log(data);
//     })



// Movie.find({rating: 'PG-13'}).then(data => console.log(data))

// Movie.find({year: {$lt:1990}}).then(data => console.log(data))

// Movie.findOne({year: {$gte:1990}}).then(data => console.log(data))


//// by id:
// Movie.find({_id:'673434421cf33c99ab86749a'}).then(m => console.log(m))




