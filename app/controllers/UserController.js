async function login(req, res) {
  if (req.method === 'GET') return res.render('login');

  const user = { email: req.body.email, password: req.body.password };
  //TODO: User Schema
  const dbUser = { email: 'demo@demo.nl', password: 'demo' };

  if (user.password !== dbUser.password || user.email !== dbUser.email) {
    return res.render('login');
  }

  req.session.user = {
    email: dbUser.email,
  };

  return res.redirect('/');
}

async function register(req, res) {
  if (req.method === 'GET') return res.render('register');

  return res.send('POST REGISTER');
}

async function account(req, res) {
  if (req.method === 'GET') return res.render('account');

  return res.send('POST ACCOUNT');
}

module.exports = {
  login,
  register,
  account,
};
