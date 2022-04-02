const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const express = require('express');
const compression = require('compression');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo');
const passport = require('passport');

const AuthRouter = require('./routes/Auth.js');
const UserRouter = require('./routes/User.js');
const AppRouter = require('./routes/App.js');
const AppointmentsRouter = require('./routes/Appointments.js');
const PuppleRouter = require('./routes/Pupple.js');

require('./app/services/passport.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(compression());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
const oneDay = 1000 * 60 * 60 * 24;
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    store: MongoStore.create({
      mongoUrl: process.env.DB_URI,
    }),
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: true,
  })
);
app.use(passport.initialize({}));
app.use(passport.session({}));

app.use('/auth', AuthRouter);
app.use('/user', UserRouter);
app.use('/', AppRouter);
app.use('/appointments', AppointmentsRouter);
app.use('/pupple', PuppleRouter);
app.get('*', (req, res) => {
  res.render('404');
});

app.set('view engine', 'ejs');
app.listen(port, () => console.log('Listening on port: 3000'));
