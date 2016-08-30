/**
 * Created by Ingo on 07.08.2016.
 */

var express = require('express');

var http = require('http');
var bodyParser  = require('body-parser');
var restApi = require('express/routes/index');
var app = express();

app.get('/*', function (req, res, next) {
    next();
});

app.use(bodyParser.json());
app.use('/api',restApi);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
