function authenticated(req, res, next) {
  try {
    if (!req.session.user) return res.redirect('/user/login');
    next();
  } catch (err) {
    console.error(err);
  }
}

module.exports = authenticated;
