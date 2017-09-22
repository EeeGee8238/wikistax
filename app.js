'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const routes = require('./routes');

app.use(morgan('dev'));
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);

app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views', { noCache: true });

app.listen(3000, () => console.log('Listening...'));
