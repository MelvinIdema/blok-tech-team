const bcrypt = require('bcrypt');
const User = require('./../models/User.js');

async function login(req, res) {
  if (req.method === 'GET') return res.render('login');

  const user = {
    username: req.body.username,
    password: req.body.password,
  };

  const dbUser = await User.findOne({ username: user.username });

  if (!dbUser || !bcrypt.compareSync(user.password, dbUser.password)) {
    return res.render('login');
  }

  req.session.user = {
    id: dbUser._id,
    username: dbUser.username,
  };

  return res.redirect('/pupple');
}

async function register(req, res) {
  /**
   * --Step One--
   * Just shows the register form.
   */
  if ((req.method === 'GET' && req.params.step === '1') || !req.params.step) {
    return res.render('register');
  }

  /**
   * --Step Two--
   * Now we need save the previous values from step 1
   * in a Session Cookie.
   */
  if (req.method === 'GET' && req.params.step === '2')
    return res.redirect('/user/register');
  if (req.method === 'POST' && req.params.step === '2') {
    req.session.register = {
      name: req.body.name,
      phone: req.body.phone,
    };
    return res.render('register1');
  }

  /**
   * --Step Three--
   */
  if (req.method === 'GET' && req.params.step === '3')
    return res.redirect('/user/register');
  if (req.method === 'POST' && req.params.step === '3') {
    req.session.register.age = req.body.age;
    req.session.register.mobility = req.body.mobility;
    return res.render('register2');
  }

  /**
   * --Step Four--
   */
  if (req.method === 'GET' && req.params.step === '4')
    return res.redirect('/user/register');
  if (req.method === 'POST' && req.params.step === '4') {
    req.session.register.username = req.body.username;

    const salt = await bcrypt.genSalt(10);
    req.session.register.password = await bcrypt.hash(req.body.password, salt);

    return res.render('registeroverview', {
      register: req.session.register,
    });
  }

  if (req.method === 'GET' && req.params.step === '5')
    return res.redirect('/user/register');
  if (req.method === 'POST' && req.params.step === '5') {
    const register = req.session.register;
    const user = {
      name: register.name,
      phone: register.phone,
      age: register.age,
      mobility: register.mobility,
      username: register.username,
      password: register.password,
    };

    const dbUser = new User(user);
    await dbUser.save();

    req.session.user = {
      id: dbUser._id,
      email: dbUser.email,
      name: dbUser.name,
    };
    return res.redirect('/pupples');
  }

  return res.redirect('/user/register');
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
