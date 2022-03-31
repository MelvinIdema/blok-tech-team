const bcrypt = require('bcrypt');
const User = require('./../models/User.js');

async function login(req, res) {
  if (req.method === 'GET') return res.render('login');

  const user = {
    email: req.body.email,
    password: req.body.password,
  };
  // TODO: User Schema
  const dbUser = await User.findOne({ email: user.email });

  if (!dbUser || !bcrypt.compareSync(user.password, dbUser.password)) {
    return res.render('login');
  }

  req.session.user = {
    email: dbUser.email,
  };

  return res.redirect('/');
}

async function register(req, res) {
  if (req.method === 'GET') return res.render('register');

  console.log(req.body);
  const user = {
    email: req.body.email,
    name: req.body.name,
  };

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(req.body.password, salt);

  const dbUser = new User(user);
  dbUser.save();

  req.session.user = {
    id: dbUser._id,
    email: dbUser.email,
    name: dbUser.name,
  };

  return res.redirect('/');
}

function register1(req, res) {
  return res.render('register1');
}

function register2(req, res) {
  return res.render('register2');
}

function registeroverzicht(req, res) {
  return res.render('registeroverzicht');
}

async function account(req, res) {
  const dbUser = await User.findOne({ email: req.session.user.email }).exec();

  const user = {
    name: dbUser.name,
    email: dbUser.email,
  };

  return res.json(user);
}

async function logout(req, res) {
  req.session.destroy();
  res.redirect('/user/login');
}

module.exports = {
  login,
  register,
  register1,
  register2,
  registeroverzicht,
  account,
  logout,
};
