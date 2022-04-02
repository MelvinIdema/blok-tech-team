async function login(req, res) {
  res.redirect('/user/login');
}

async function logout(req, res) {
  req.logout();
  res.redirect('/');
}

module.exports = {
  login,
  logout,
};
