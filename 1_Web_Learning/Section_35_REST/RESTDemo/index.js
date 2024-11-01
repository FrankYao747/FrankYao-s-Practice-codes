const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]
//////////////////////
let clone = []

// 将 user 中所有的属性拷贝到其中
for (let key in comments) {
    clone[key] = comments[key];
}
///////////////////////////////


app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})
app.get('/comments/reset', (req, res) => {
    res.render('comments/index', { comments: clone })
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

app.post('/comments', (req, res) => {
    // console.log(req.body);
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() })
    // res.send("IT Worked!!!");
    res.redirect('/comments')
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
})

///////// id edit ///////////////
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment });
})


app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    // console.log(req.body.comment);
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect(303, '/comments');
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    // const comment = comments.find(c => c.id === id);
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
    // console.log(req.body)
    const { meat, qty } = req.body;
    res.send(`OK, here are your ${qty} ${meat} tacos`)
})

app.listen(3000, () => {
    console.log("On Port 3000!")
})


