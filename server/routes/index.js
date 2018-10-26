var express = require('express');
var router = express.Router();
var passportLinkedIn = require('../auth/linkedin');

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Error', function (req, res, next) {
  res.render('error', { title: 'Error' });
});

router.get('/Home', function (req, res, next) {
  res.render('home', { title: 'Home' });
});

router.get('/auth/linkedin',
  passportLinkedIn.authenticate('linkedin'));

router.get('/auth/linkedin/callback', passportLinkedIn.authenticate('linkedin', {
  successRedirect: '/Home',
  failureRedirect: '/Error'
}));

module.exports = router;
