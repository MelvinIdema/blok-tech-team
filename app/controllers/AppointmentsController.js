// const puppleModel = require('./../models/Pupple.js');

function appointments(req, res) {
  /* const puppleData = {
    imgUrl: req.body.imgUrl,
  }
  
  const getImg = puppleModel.findOne({ imgUrl: puppleData.imgUrl }) */

  return res.render('appointments');
}

module.exports = {
  appointments,
};
