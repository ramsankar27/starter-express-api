const fs = '';

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

try {
    readUserList();
  } catch (error) {
    reset()
  }

function getAllCoins() {
    return coinList;
}

function login(email, pasword){
    let userList = readUserList()
    for(let i=0; i<userList.length; i++) {
        if(userList[i].email === email && userList[i].password === pasword) {
            return {
                name: userList[i].userName,
                mail: userList[i].email,
                userId: userList[i].userId
            }
        } 
    }
    return false;
}

function getSingleUserDetails(id) {
    let userList = readUserList()
    let userDeatils = userList.find(x => x.userId === id);
    if (userDeatils) return userDeatils;
    else return false;
}

function addUser(userDetail) {
    let userList = readUserList()
    let userData = {};
    userData.userId = userList.length;
    userData.history = [];
    userData.amount = 0;
    userData.coins = [];
    userData.userName = userDetail.name;
    userData.email = userDetail.mail;
    userData.password = userDetail.password;
    userList.push(userData);
    writeUserList(userList);
    return true;
}

function invest(amount, userId) {
    let userList = readUserList()
    let userIndex = userList.findIndex(x => x.userId === userId);
    userList[userIndex].amount += parseInt(amount);  

    // make history
    let coinHistory = {
        name: '',
        quantity: 0,
        about: 'invest',
        amount: amount,
        time: new Date()
    }
    writeUserList(userList);
    makeHistory(coinHistory, userId);
    return userIndex !== -1  ? 1 : 0;
}

function withdraw(userId) {
    let userList = readUserList()
    let userIndex = userList.findIndex(x => x.userId === userId);
    userList[userIndex].amount = 0;
    let coinHistory = {
        name: '',
        quantity: 0,
        about: 'withdraw',
        amount: userList[userIndex].amount,
        time: new Date()
    }
    writeUserList(userList);
    makeHistory(coinHistory, userId)
}


function buyCoins(coinDetail, amount, userId) {
    let userList = readUserList()
    let userIndex = userList.findIndex(x => x.userId === userId);
    let existing = userList[userIndex].coins.findIndex(x => x.id === coinDetail.id);
    if (existing !== -1) {
        userList[userIndex].coins[existing].purchaseQuantity += coinDetail.purchaseQuantity;
    } else {
        userList[userIndex].coins.push(coinDetail);
    }
    let coinHistory = {
        name: coinDetail,
        quantity: coinDetail.purchaseQuantity,
        about: 'buy',
        amount: amount,
        time: new Date()
    }
    let amt = userList[userIndex].amount;
    userList[userIndex].amount =  amt;
    writeUserList(userList);
    makeHistory(coinHistory, userId);
}

function sellCoins(coinDetail, userId) {
    let userList = readUserList()
    let userIndex = userList.findIndex(x => x.userId === userId);
    let existingIndex = userList[userIndex].coins.findIndex(x => x.id === coinDetail.id);
    userList[userIndex].coins.splice(existingIndex, 1);
    let quantity = coinDetail.purchaseQuantity;
    let price = coinDetail.current_price;
    let coinHistory = {
        name: coinDetail,
        quantity: coinDetail.purchaseQuantity,
        about: 'sell',
        amount: quantity * price,
        time: new Date()
    }
    userList[userIndex].amount += (quantity*price);
    writeUserList(userList);
    makeHistory(coinHistory, userId)
}

function sendCoins(coinDetail, senderId, receiverId){
    let userList = readUserList()
    let senderIdIndex = userList.findIndex(x => x.userId === senderId);
    let senderCoinIndex = userList[senderIdIndex].coins.findIndex(x => x.id === coinDetail.id);
    userList[senderIdIndex].coins.splice(senderCoinIndex, 1);
    let receiverIndex = userList.findIndex(x => x.userId === Number(receiverId));
    let existing = userList[receiverIndex].coins.findIndex(x => x.id === coinDetail.id);
    if (existing !== -1) {
        userList[receiverIndex].coins[existing].purchaseQuantity += coinDetail.purchaseQuantity;
    } else {
        userList[receiverIndex].coins.push(coinDetail);
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
    writeUserList(userList);
    makeHistory(coinHistorySender, senderId);
    makeHistory(coinHistoryReciever, Number(receiverId));

}

function makeHistory(historyData, userId) {
    let userList = readUserList()
    let userHistory = userList.find(x => x.userId === userId).history;
    userHistory.unshift(historyData);
    let adminHistory = userList.find(x => x.userId === 0).history;
    adminHistory.unshift(historyData);
    writeUserList(userList);
}

function getHistory(userId) {
    return users.find(x => x.userId === userId).history;
}

function getUser() {
    let userList = readUserList()
    let user = userList; 
    return user;
}

function convertCoin(oldId, newCoin, userId) {
    let userList = readUserList()
    let userIndex = userList.findIndex(x=> x.userId === userId);
    if(userIndex === -1) {
        return false
    }
    let coins = userList[userIndex]['coins'];
    // push new coin
    let alIndex = coins.findIndex(x=> x.id === newCoin.id);
    if(alIndex === -1) {
      coins.push(newCoin);
    } else {
      coins[alIndex]['purchaseQuantity']+= newCoinsQuan;
    }
    // remove old coin
    let oldIndex = coins.findIndex(x=> x.id === oldId);
    coins.splice(oldIndex, 1);
    userList[userIndex]['coins'] = coins;
    writeUserList(userList);
    return true;
}


function readUserList() {
    return 1
    // return JSON.parse(fs.readFileSync("userListCrypt.txt"))
}


function writeUserList(users) {
    return 1;
    // fs.writeFileSync("userListCrypt.txt", JSON.stringify(users))
}

function reset() {
    writeUserList(users)
    return true;
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
    sendCoins,
    getUser,
    convertCoin,
    reset
}
