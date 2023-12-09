const express = require('express');
const router = express.Router();
const passport = require('passport');
const home_controller = require('../controllers/home_controller');

router.get('/',home_controller.home);
console.log('routes are working');

router.post('/createuser', home_controller.createuser);
router.post('/sessioncreate',passport.authenticate(
	'local',
	{failureRedirect: '/'},
	),
	home_controller.createnewsession
);

router.post('/espdata',home_controller.espdata);

router.post('/dessess', home_controller.destroysession);

router.use('/dashboard',require('./dashboard'));

module.exports = router;