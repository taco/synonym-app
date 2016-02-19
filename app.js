/* eslint-disable */

const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'assets/views'));
app.set('view engine', 'jade');

const scriptsUrl = process.env.NODE_ENV === 'production'
                    ? '/js/bundle.js'
                    : 'http://localhost:8080/assets/js/bundle.js';

const port = process.env.PORT || 3000;

app.get('/', function(req, res) {

    res.render('index', {
        title: 'Syn UI',
        scripts: scriptsUrl
    });
});

app.use('/js', express.static(path.join(__dirname, 'assets/js')));
app.use('/css', express.static(path.join(__dirname, 'assets/css')));


app.listen(port, function() {
    console.log('Example app listening on port ' + port);
});