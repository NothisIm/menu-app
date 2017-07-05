const express = require('express');
const watch = require('node-watch');
const ejs = require('ejs');
const app = express();
const port = 3000;

watch('./', { recursive: true}, console.log);

app.use(express.static('../sources'));
app.engine('html', ejs.renderFile);
app.set('views', 'src/views');

app.get('/', (request, response) => {
    response.render('index.html');
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
});
