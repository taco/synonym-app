/* eslint-disable */

const express = require('express');
const path = require('path');
const api = require('./server/api');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

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

app.get('/api/synonyms', function(req, res) {
    api.get()
        .then(result => {
            res.json({
                definitions: result.synonymDefinitions
            });
        })
        .catch(error => {
            res.json({
                definitions: []
            });
        });
});

app.put('/api/synonyms', function(req, res) {
    api.update(req.body.definitions)
        .then(result => {
            res.json({
                success: true
            });
        })
        .catch(error => {
            res.json({
                success: false,
                error: error
            });
        });
});

app.post('/api/start', function(req, res) {
    res.redirect(301, '/');
});

app.listen(port, function() {
    console.log('Example app listening on port ' + port);
});