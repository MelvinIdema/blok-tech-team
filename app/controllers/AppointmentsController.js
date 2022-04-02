const User = require('./../models/User.js');
const Pupple = require('./../models/Pupple.js');

async function appointments(req, res) {
  const user = await User.findOne({ _id: req.session.user.id }).exec();

  const appointments = await Promise.all(
    user.appointments.map(async (appointment) => {
      try {
        const pupple = await Pupple.findOne({ _id: appointment.pupple });

        return {
          day: appointment.day,
          time: appointment.time,
          image: pupple.imgUrl,
          name: pupple.name,
          location: pupple.location,
        };
      } catch (err) {
        console.log(err);
      }
    })
  );

  console.log(appointments);

  return res.render('appointments', {
    appointments,
  });
}

async function confirm(req, res) {
  const pupple = await Pupple.findOne({ _id: req.body.pupple }).exec();
  req.session.appointment = {
    pupple: req.body.pupple,
    day: req.body['choose-day'],
    time: req.body['choose-time'],
  };
  return res.render('confirm', {
    pupple: pupple.name,
  });
}

async function create(req, res) {
  const user = await User.findOne({ _id: req.session.user.id }).exec();
  await User.updateOne(
    { _id: req.session.user.id },
    { appointments: [...user.appointments, req.session.appointment] }
  );
  return res.redirect('/appointments');
}

module.exports = {
  appointments,
  confirm,
  create,
};
