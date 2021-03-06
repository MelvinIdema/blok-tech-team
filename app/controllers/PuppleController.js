const Pupple = require('./../models/Pupple.js');

async function cards(req, res) {
  const pupples = await Pupple.find({});
  const randomPupple = req.session.seenBumble
    ? Math.floor(Math.random() * pupples.length)
    : 11;
  req.session.seenBumble = true;
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

async function api(req, res) {
  return res.json(await Pupple.find({}));
}

module.exports = {
  cards,
  info,
  api,
};
