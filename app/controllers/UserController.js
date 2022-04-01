const bcrypt = require('bcrypt');
const User = require('./../models/User.js');

async function login(req, res) {
  if (req.method === 'GET') return res.render('login');

  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  const dbUser = await User.findOne({ email: user.email });

  if (!dbUser || !bcrypt.compareSync(user.password, dbUser.password)) {
    return res.render('login');
  }

  req.session.user = {
    email: dbUser.email,
  };

  return res.redirect('/pupple');
}

async function register(req, res) {
  /**
   * --Step One--
   * Just shows the register form.
   */
  if ((req.method === 'GET' && req.params.step === '1') || !req.params.step)
    return res.render('register');

  /**
   * --Step Two--
   * Now we need save the previous values from step 1
   * in a Session Cookie.
   */
  if (req.method === 'GET' && req.params.step === '2')
    return res.render('register1');
  if (req.method === 'GET' && req.params.step === '3')
    return res.render('register2');
  if (req.method === 'GET' && req.params.step === '4')
    return res.render('registeroverview');

  // const user = {
  //   email: req.body.email,
  //   name: req.body.name,
  //   avatar: req.body.files[0].location,
  // };
  //
  // console.log(user);

  // const salt = await bcrypt.genSalt(10);
  // user.password = await bcrypt.hash(req.body.password, salt);
  //
  // const dbUser = new User(user);
  // dbUser.save();

  // req.session.user = {
  //   id: dbUser._id,
  //   email: dbUser.email,
  //   name: dbUser.name,
  // };

  // return res.redirect('/');
}

async function account(req, res) {
  // const dbUser = await User.findOne({ email: req.session.user.email }).exec();

  // const user = {
  //   name: dbUser.name,
  //   email: dbUser.email,
  // };

  return res.render('account');
}

async function logout(req, res) {
  req.session.destroy();
  res.redirect('/user/login');
}

module.exports = {
  login,
  register,
  account,
  logout,
};
