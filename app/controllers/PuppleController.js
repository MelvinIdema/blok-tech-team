function cards(req, res) {
  res.render('pupplecards');
}

function info(req, res) {
  res.render('info');
}

module.exports = {
  cards,
  info,
};
