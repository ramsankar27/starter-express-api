const express = require('express');
const { 
    httpAddUser,
    httpInvest,
    httpWithdraw,
    httpBuyCoins,
    httpSellCoins,
    httpGetSingleUserDetails,
    httpGetAllCoins,
    httpLogin
} = require('./users.controler');

const userRouter = express.Router();
//get all coins
userRouter.get('/coins', httpGetAllCoins);

// login
userRouter.post('/login', httpLogin);

// get singleUserData
userRouter.get('/coins/:id', httpGetSingleUserDetails);

// add new user
userRouter.post('/user', httpAddUser);

// with draw
userRouter.post('/withdraw/:id', httpWithdraw);

// invest
userRouter.post('/invest/:id', httpInvest);

// sel coins
userRouter.post('/sell/:id', httpSellCoins);

// buy
userRouter.post('/buy/:id', httpBuyCoins);

module.exports = userRouter
