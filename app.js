// Import
const express = require('express');


const grocessoryRouter = require('./routes/grocessory/grocessory.router');
const userRouter = require('./routes/users/users.router')


const app = express();
// app.use(cors({
//     origin: 'http://localhost:3000'
// }))

// use middelware to log our request
// add middleware to parse request as JSON format
app.use(express.json());


// crypt trade router
app.use('/', userRouter);

// grocessory router
app.use('/mygrocessory', grocessoryRouter);


// export
module.exports = app; 