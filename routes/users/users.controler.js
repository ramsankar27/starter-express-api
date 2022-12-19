const {
    sellCoins,
    buyCoins,
    withdraw,
    invest,
    getAllCoins,
    login,
    getSingleUserDetails,
    addUser }
    = require('../../models/user.model');

function httpGetAllCoins(req, res) {
    return res.status(200).json(getAllCoins());
}

function httpGetSingleUserDetails(req, res) {
    const userId = Number(req.params.id);
    return res.status(200).json(getSingleUserDetails(userId));
}

function httpSellCoins(req, res) {
    const userId = Number(req.params.id);
    const coindata = req.body.coinDetail;
    return res.status(200).json(sellCoins(coindata, userId));
}


function httpBuyCoins(req, res) {
    const userId = Number(req.params.id);
    const coindata = req.body.coinDetail;
    const amount = req.body.amount;
    return res.status(200).json(buyCoins(coindata, amount, userId));
}


function httpWithdraw(req, res) {
    const userId = Number(req.params.id);
    return res.status(200).json(withdraw(userId));    
}

function httpInvest(req, res) {
    const userId = Number(req.params.id);
    const amount = req.body.amount;
    return res.status(200).json(invest(amount, userId));
}

function httpAddUser(req, res) {
    const newUser = req.body;
    return res.status(200).json(addUser(newUser));    
}

function httpLogin(req, res) {
    username = req.body.username;
    password = req.body.password;
    let exist = login(username, password);
    if(exist) res.status(200).json(exist);
    else res.status(200).json(false);
}
module.exports = {
    httpGetAllCoins,
    httpAddUser,
    httpInvest,
    httpWithdraw,
    httpBuyCoins,
    httpSellCoins,
    httpGetSingleUserDetails,
    httpLogin
}