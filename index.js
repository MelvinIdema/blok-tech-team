const express = require('express');
const UserRouter = require('./routes/User.js');
const app = express();

app.use('/user', UserRouter);

app.listen(3000, () => console.log('Listening on port: 3000'));
