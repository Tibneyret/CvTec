var express = require('express');
var router = express.Router();
var passportLinkedIn = require('../auth/linkedin');
var userDatas = require('../mock/myProfile')

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Error', function (req, res, next) {
  res.render('error', { title: 'Error' });
});

router.get('/Home', function (req, res, next) {
  res.render('home', { title: 'Home' });
});

router.get('/user', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'user datas loaded successfully',
    user: userDatas
  })
});

router.get('/auth/linkedin',
  passportLinkedIn.authenticate('linkedin'));

router.get('/auth/linkedin/callback', passportLinkedIn.authenticate('linkedin', {
  successRedirect: '/Home',
  failureRedirect: '/Error'
}));

module.exports = router;
