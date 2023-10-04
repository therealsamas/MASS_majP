const express = require('express');
const port = 8080;

const app = express();

app.use('/',require('./routes'));

app.listen(port,function(err){
	if(err){
		console.error(err);
	}
	console.log('Up and running on port : ', port);
});