const Pupple = require('./../models/Pupple.js');

async function cards(req, res) {
  const pupples = await Pupple.find({});
  const randomPupple = Math.floor(Math.random() * pupples.length);

  return res.render('pupplecards', {
    pupple: pupples[randomPupple],
  });
}

async function info(req, res) {
  const id = req.params.id;
  const pupple = await Pupple.findOne({ _id: id });

  return res.render('info', {
    pupple: pupple,
  });
}

module.exports = {
  cards,
  info,
};
