// require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
// const request = require('request');
// const session = require('express-session');

require('./db/db');

const homeController = require('./controllers/home');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));

app.use('/home', homeController);

app.listen(3000, () => {
	console.log('app is listening on port 3000');
})
