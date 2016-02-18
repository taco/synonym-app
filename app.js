/* eslint-disable */
require('dotenv').config({ silent: true });

const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var scriptsUrl = 'http://localhost:8080/lib/bundle.js';
var port = 3000;

if (process.env.NODE_ENV === 'production') {
    scriptsUrl = '/bundle.js';
    port = 80;
}

app.get('/', function(req, res) {

    res.render('index', {
        title: 'Syn UI',
        scripts: scriptsUrl
    });
});

app.get('/bundle.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'lib/bundle.js'));
});

app.listen(port, function() {
    console.log('Example app listening on port 3000!');
});