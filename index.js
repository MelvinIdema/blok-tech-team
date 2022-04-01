const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const express = require('express');
const compression = require('compression');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo');
const UserRouter = require('./routes/User.js');
const AppRouter = require('./routes/App.js');
const AppointmentsRouter = require('./routes/Appointments.js');
const PuppleRouter = require('./routes/Pupple.js');
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
    resave: false,
  })
);

app.use('/user', UserRouter);
app.use('/', AppRouter);
app.use('/appointments', AppointmentsRouter);
app.use('/pupple', PuppleRouter);

app.set('view engine', 'ejs');
app.listen(port, () => console.log('Listening on port: 3000'));
