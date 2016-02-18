/* eslint-disable */

const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

const scriptsUrl = process.env.NODE_ENV === 'production'
                    ? '/bundle.js'
                    : 'http://localhost:8080/lib/bundle.js';

const port = process.env.PORT || 3000;

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
    console.log('Example app listening on port ' + port);
});