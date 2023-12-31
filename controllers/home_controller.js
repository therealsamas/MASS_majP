const passport = require('passport');
const User = require('../models/user');
const mongoose = require('mongoose');


module.exports.home = async function(req,res){
	try{
		console.log('hitttt');
		return res.render('index.ejs')
	}catch(error){
		console.error(error);
	}
}

module.exports.espdata = async function(req,res){
	try{
		let data = req.body;
		console.log(data);
		console.log("esp hit");
		return res.status(200).json({
			message:"req was success"
		});
	}catch(error){
		console.error(error);
	}
}


module.exports.createuser = async function(req,res){
	try{
		if(req.body.password != req.body.confirmpassword){
			return res.status(211).json({
				message: "confirm password and password are not same"
			});
		}
		const user = await User.findOne({email: req.body.email});
		if(!user){
			// create a new user as no existing id exists
			const newuser = await User.create(req.body);
			newuser.documents = {temp:"tempdat"};
			await User.findByIdAndUpdate(newuser.id, newuser);
			return res.status(200).json({
				message: "new user created"
			});
		}
		else{
			return res.status(208).json({
				message: "user already exists"
			});
		}
	}catch(error){
		console.error(error);
	}
}


module.exports.createnewsession = async function(req,res){
	console.log(req.body);
	let email = req.body.email;
	let enc = req.user.name;
	return res.status(200).json({
		data: {
			name: enc
		},
		message: " login successful "
	});
}

module.exports.destroysession = async function(req,res){
	req.logout(function(err){
		if(err){
			console.log(err);
		}
		else{
			return res.status(210).json({
				message:"logout succesful"
			});
		}
	});
}

