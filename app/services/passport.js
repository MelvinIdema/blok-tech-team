const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const User = require('./../models/User.js');

async function verify(username, password, done) {
  const user = await User.findOne({ username: username }).exec();
  if (!user)
    return done(null, false, {
      message: 'Gebruikersnaam en wachtwoord komen niet overeen.',
    });

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return done(null, false, {
      message: 'Gebruikersnaam en wachtwoord komen niet overeen.',
    });
  }

  return done(null, user);
}

passport.use(new LocalStrategy(verify));
passport.serializeUser((user, done) =>
  done(null, { id: user._id, username: user.username })
);
passport.deserializeUser((user, done) => done(null, user));
