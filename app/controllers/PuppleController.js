function cards(req, res) {
  return res.render('pupplecards');
}

function info(req, res) {
  return res.render('info');
}

module.exports = {
  cards,
  info,
};
