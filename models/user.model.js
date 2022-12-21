const users = [
    {
        userId: 0,
        userName: 'Admin',
        amount: 0,
        history: [],
        coins: [],
        email: 'admin@gmail.com',
        password: '1234'
    },
];

function getAllCoins() {
    return coinList;
}

function login(email, pasword){
    for(let i=0; i<users.length; i++) {
        if(users[i].email === email && users[i].password === pasword) {
            return {
                name: users[i].userName,
                mail: users[i].email,
                userId: users[i].userId
            }
        } 
    }
    return false;
}

function getSingleUserDetails(id) {
    let userDeatils = users.find(x => x.userId === id);
    if (userDeatils) return userDeatils;
    else return false;
}

function addUser(userDetail) {
    let userData = {};
    userData.userId = users.length;
    userData.history = [];
    userData.amount = 0;
    userData.coins = [];
    userData.userName = userDetail.name;
    userData.email = userDetail.mail;
    userData.password = userDetail.password;
    users.push(userData);
    return true;
}

function invest(amount, userId) {
    let userIndex = users.findIndex(x => x.userId === userId);
    users[userIndex].amount += parseInt(amount);  
    // make history
    let coinHistory = {
        name: '',
        quantity: 0,
        about: 'invest',
        amount: amount,
        time: new Date()
    }
    makeHistory(coinHistory, userId);
}

function withdraw(userId) {
    let userIndex = users.findIndex(x => x.userId === userId);
    users[userIndex].amount = 0;
    let coinHistory = {
        name: '',
        quantity: 0,
        about: 'withdraw',
        amount: users[userIndex].amount,
        time: new Date()
    }
    makeHistory(coinHistory, userId)
}


function buyCoins(coinDetail, amount, userId) {
    let userIndex = users.findIndex(x => x.userId === userId);
    let existing = users[userIndex].coins.findIndex(x => x.id === coinDetail.id);
    if (existing !== -1) {
        users[userIndex].coins[existing].purchaseQuantity += coinDetail.purchaseQuantity;
    } else {
        users[userIndex].coins.push(coinDetail);
    }
    let coinHistory = {
        name: coinDetail,
        quantity: coinDetail.purchaseQuantity,
        about: 'buy',
        amount: amount,
        time: new Date()
    }
    let amt = users[userIndex].amount;
    users[userIndex].amount =  amt;
    makeHistory(coinHistory, userId);
}

function sellCoins(coinDetail, userId) {
    let userIndex = users.findIndex(x => x.userId === userId);
    let existingIndex = users[userIndex].coins.findIndex(x => x.id === coinDetail.id);
    users[userIndex].coins.splice(existingIndex, 1);
    let quantity = coinDetail.purchaseQuantity;
    let price = coinDetail.current_price;
    let coinHistory = {
        name: coinDetail,
        quantity: coinDetail.purchaseQuantity,
        about: 'sell',
        amount: quantity * price,
        time: new Date()
    }
    users[userIndex].amount += (quantity*price);
    makeHistory(coinHistory, userId)
}

function sendCoins(coinDetail, senderId, receiverId){
    console.log(reciverId);
    console.log(users);
    let senderIdIndex = users.findIndex(x => x.userId === senderId);
    let senderCoinIndex = users[senderIdIndex].coins.findIndex(x => x.id === coinDetail.id);
    console.log(users[senderIdIndex].coins);
    users[senderIdIndex].coins.splice(senderCoinIndex, 1);
    let receiverIndex = users.findIndex(x => x.userId === receiverId);
    let existing = users[receiverIndex].coins.findIndex(x => x.id === coinDetail.id);
    if (existing !== -1) {
        users[receiverIndex].coins[existing].purchaseQuantity += coinDetail.purchaseQuantity;
    } else {
        users[receiverIndex].coins.push(coinDetail);
    }
    let coinHistorySender = {
        name: coinDetail,
        quantity: coinDetail.purchaseQuantity,
        about: 'send',
        amount: 0,
        time: new Date()
    }
    let coinHistoryReciever = {
        name: coinDetail,
        quantity: coinDetail.purchaseQuantity,
        about: 'receive',
        amount: 0,
        time: new Date()
    }
    makeHistory(coinHistorySender, senderId);
    makeHistory(coinHistoryReciever, receiverId);
    console.log(users);

}

function makeHistory(historyData, userId) {
    let userHistory = users.find(x => x.userId === userId).history;
    userHistory.unshift(historyData);
    let adminHistory = users.find(x => x.userId === 0).history;
    adminHistory.unshift(historyData);
}

function getHistory(userId) {
    return users.find(x => x.userId === userId).history;
}


module.exports = {
    getAllCoins,
    sellCoins,
    buyCoins,
    withdraw,
    invest,
    getSingleUserDetails,
    addUser,
    login,
    sendCoins
}
