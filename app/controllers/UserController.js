async function login(req, res) {
  if (req.method === 'GET') return res.render('login');

  return res.send('NOT IMPLEMENTED: POST LOGIN');
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
