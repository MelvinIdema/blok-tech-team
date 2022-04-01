const Pupple = require('./../models/Pupple.js');

async function cards(req, res) {
  const pupples = await Pupple.find({});
  const randomPupple = Math.floor(Math.random() * pupples.length);

  return res.render('pupplecards', {
    pupple: pupples[randomPupple],
  });
}

function info(req, res) {
  return res.render('info');
}

module.exports = {
  cards,
  info,
};
