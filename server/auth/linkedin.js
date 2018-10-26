var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

var User = require('../models/user');
var config = require('../_config');
var init = require('./init');


passport.use(new LinkedInStrategy({
  clientID: config.linkedin.clientID,
  clientSecret: config.linkedin.clientSecret,
  callbackURL: config.linkedin.callbackURL,
  scope: ['r_basicprofile', 'r_emailaddress'],
  profileFields: ['id', 'first-name', 'last-name', 'email-address', 'public-profile-url'],
  passReqToCallback: true
},
  // linkedin sends back the tokens and progile info
  function (req, token, refreshToken, profile, done) {
    console.log('token:' + token);
    console.log('refreshToken : ' + refreshToken);
    console.log('profile : ' + JSON.stringify(profile));
    console.log('done : ' + done);
    // asynchronous verification, for effect...
    process.nextTick(function () {
      var searchQuery = {
        name: profile.name.givenName,
      };

      var updates = {
        name: profile.name.givenName,
        someID: profile.id
      };

      var options = {
        upsert: true
      };

      // update the user if s/he exists or add a new user
      User.findOneAndUpdate(searchQuery, updates, options, function (err, user) {
        if (err) {
          return done(err);
        } else {
          return done(null, user);
        }
      });
    })
  }
));

// serialize user into the session
init();


module.exports = passport;