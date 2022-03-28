const express = require('express');
const UserRouter = require('./routes/User.js');
const AppRouter = require('./routes/App.js');
const AppointmentRouter = require('./routes/Appointment.js');
const PuppleRouter = require('./routes/Pupple.js');
const app = express();

app.use(express.static('public'));
app.use('/user', UserRouter);
app.use('/', AppRouter);
app.use('/appointment', AppointmentRouter);
app.use('/pupple', PuppleRouter);

app.set('view engine', 'ejs');

app.listen(3000, () => console.log('Listening on port: 3000'));
