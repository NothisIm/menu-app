const express = require('express');
const watch = require('node-watch');
const app = express();
const port = 3000;

watch('./', { recursive: true}, console.log);

app.use(express.static('static'));

app.get('/', (request, response) => {
    response.redirect('index.html');
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
});
