const express = require('express')
const app = express();
const cors = require('cors');

app.use(cors());
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
app.get('/', (req, res)=>{
    res.send('Courses API Running');
});

app.get('/course-categories', (req, res) => {
res.send(categories)
})

app.listen(port,() => {
    console.log('Assignment 10 Server Running', port);
})