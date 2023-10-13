const express = require('express');
const port = 8080;

const app = express();

const cookieParser = require('cookie-parser');
const expSession = require('express-session');

const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

const db = require('./config/mongoose');
const User = require('./models/user');
const mongostorre = require('connect-mongo');

app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use(express.static('./views/js'));
app.use(express.static('./views/css'));
app.use(express.static('./views/images'));
app.set('view-engine','ejs');
app.set('views','./views/pages');

app.use(expSession({
	name:'MASS_p',
	secret: 'massSSAM',
	saveUninitialized:false,
	resave:false,
	cookie: {
		maxAge: (1000*60*100)
	},
	store: mongostorre.create({
		client: db.client,
		dbName: 'MASS'
	})
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use('/',require('./routes'));

app.listen(port,function(err){
	if(err){
		console.error(err);
	}
	console.log('Up and running on port : ', port);
});