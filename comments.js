// Create web server

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    fs.readFile('./comments.json', 'utf8', (err, data) => {
        if (err) throw err;
        res.send(data);
    });
});

app.post('/comments', (req, res) => {
    fs.readFile('./comments.json', 'utf8', (err, data) => {
        if (err) throw err;
        const comments = JSON.parse(data);
        const newComment = {
            id: Date.now(),
            username: req.body.username,
            comment: req.body.comment,
        };
        comments.push(newComment);
        fs.writeFile('./comments.json', JSON.stringify(comments), (err) => {
            if (err) throw err;
            res.send(newComment);
        });
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));