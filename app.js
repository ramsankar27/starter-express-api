// Import
const express = require('express');

const userRouter = require('./routes/users/users.router')


const app = express();
// app.use(cors({
//     origin: 'http://localhost:3000'
// }))

// use middelware to log our request
// add middleware to parse request as JSON format
app.use(express.json());
// app.use('/planets', planetRouter);
// app.use('/launches', launchsRosuter);
app.use('/', userRouter);
// export
module.exports = app; 