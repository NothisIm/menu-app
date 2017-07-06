const express = require('express');
const watch = require('node-watch');
const ejs = require('ejs');
const sass = require('node-sass');

const app = express();
const port = 3000;

watch('./', { recursive: true}, console.log);

sass.renderSync({
    file: 'src/sources/scss/index.scss',
    outFile: 'resources/index.css'
});

app.use(express.static('resources'));
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
