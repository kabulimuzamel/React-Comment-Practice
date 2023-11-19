const express = require('express');
const app = express();
app.use(express.json());

let commentData = [];

app.get('/commentData', (req, res) => {
    res.send(commentData);
});

app.post('/setComment', (req, res) => {
    commentData = req.body;
    res.send(req.body)
})



app.listen(3000, () => {
    console.log('Listening on port 3000...')
})