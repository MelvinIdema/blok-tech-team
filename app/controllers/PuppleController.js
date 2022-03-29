const Pupple = require('../models/Pupple.js');

function cards(req, res) {
  return res.render('pupplecards');
}

function info(req, res) {
  return res.render('info');
}

async function api(req, res) {
  return res.json(await Pupple.find({}));
}

module.exports = {
  cards,
  info,
  api,
};
