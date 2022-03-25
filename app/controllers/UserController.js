async function login(req, res) {
  if (req.method === 'GET') return res.send('GET LOGIN');

  return res.send('NOT IMPLEMENTED: POST LOGIN');
}

async function register(req, res) {
  if (req.method === 'GET') return res.send('GET REGISTER');

  return res.send('POST REGISTER');
}

async function account(req, res) {
  if (req.method === 'GET') return res.send('GET ACCOUNT');

  return res.send('POST ACCOUNT');
}

module.exports = {
  login,
  register,
  account,
};
