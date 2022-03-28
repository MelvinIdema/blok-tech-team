const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const express = require('express');
const UserRouter = require('./routes/User.js');
const AppRouter = require('./routes/App.js');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use('/user', UserRouter);
app.use('/', AppRouter);

app.set('view engine', 'ejs');
app.listen(port, () => console.log('Listening on port: 3000'));
