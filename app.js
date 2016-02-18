/* eslint-disable */
require('dotenv').config({ silent: true });

const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', function(req, res) {

    const scripts = process.env.NODE_ENV === 'production'
                        ? '/bundle.js'
                        : 'http://localhost:8080/lib/bundle.js';

    res.render('index', {
        title: 'Syn UI',
        scripts: scripts
    });
});

app.get('/bundle.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'lib/bundle.js'));
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});