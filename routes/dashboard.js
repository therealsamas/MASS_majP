const passport = require('passport');
const express = require('express');
const router = express.Router();


const dashboardcontroller = require('../controllers/dashboard_controller');

router.get('/',passport.checkAuthentication, dashboardcontroller.page);

module.exports = router;