const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo');
const UserRouter = require('./routes/User.js');
const AppRouter = require('./routes/App.js');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
  secret: process.env.SESSION_SECRET,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URL,
  }),
  saveUninitialized: true,
  cookie: { maxAge: oneDay },
  resave: false,
}));

app.use('/user', UserRouter);
app.use('/', AppRouter);

app.set('view engine', 'ejs');

app.listen(3000, () => console.log('Listening on port: 3000'));
