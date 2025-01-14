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
app.use('/1', userRouter);

// grocessory router
app.use('/mygrocessory1', grocessoryRouter);

app.disable('etag');

app.get('/*', function(req, res, next){ 
    res.setHeader('Last-Modified', (new Date()).toUTCString());
    next(); 
  });

// export
module.exports = app; 
