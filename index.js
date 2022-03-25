const express = require('express');
const UserRouter = require('./routes/User.js')
const AppRouter = require('./routes/App.js')
const app = express();

app.use('/user', UserRouter);
app.use('/', AppRouter);

app.set('view engine', 'ejs')

app.listen(3000, () => console.log('Listening on port: 3000'));
