// database
const fs = require('@cyclic.sh/s3fs')('cyclic-lazy-ant-sombrero-ap-southeast-1')
const usersList = [
  {
    mail: 'vaishnavi@gmail.com',
    password: '1234',
    name: 'Vaishnavi',
    userId: 0,
    pincode: '626125',
    city: "Rajapalayam",
    address: '32, south street',
    myOrders: [],
    userOrders: []
  },
];

let productList = [
  {
    id: 0,
    name: 'green-cabbage',
    description: 'Some long description Some long description Some long description Some long description Some long description Some long description',
    price: '100',
    isFavorite: false,
    gatagory: 0,
    imageUrl: 'https://www.hindimeaning.com/wp-content/uploads/2012/12/green-cabbage.jpg'
  },
  {
    id: 1,
    name: 'capsicum',
    description: 'Some long description Some long description Some long description Some long description Some long description Some long description',
    price: '100',
    isFavorite: false,
    gatagory: 0,
    imageUrl: 'https://www.hindimeaning.com/wp-content/uploads/2012/12/capsicum.jpg'
  },
  {
    id: 2,
    name: 'carrots',
    description: 'Some long description Some long description Some long description Some long description Some long description Some long description',
    price: '100',
    isFavorite: false,
    gatagory: 0,
    imageUrl: 'https://www.hindimeaning.com/wp-content/uploads/2012/12/carrots-vegetables.jpg'
  },
  {
    id: 4,
    name: 'cauliflower',
    description: 'Some long description Some long description Some long description Some long description Some long description Some long description',
    price: '100',
    isFavorite: false,
    gatagory: 0,
    imageUrl: 'https://www.hindimeaning.com/wp-content/uploads/2015/08/cauliflower.jpg'
  },
  {
    id: 5,
    name: 'Black Currant',
    description: 'Some long description Some long description Some long description Some long description Some long description Some long description',
    price: '100',
    isFavorite: false,
    gatagory: 1,
    imageUrl: 'https://www.hindimeaning.com/pictures/fruits/Black%20Currant.jpg'
  },
  {
    id: 6,
    name: 'Guava',
    description: 'Some long description Some long description Some long description Some long description Some long description Some long description',
    price: '100',
    isFavorite: false,
    gatagory: 1,
    imageUrl: 'https://www.hindimeaning.com/pictures/fruits/Guava.jpg'
  },
  {
    id: 7,
    name: 'Grapes',
    description: 'Some long description Some long description Some long description Some long description Some long description Some long description',
    price: '100',
    isFavorite: false,
    gatagory: 1,
    imageUrl: 'https://www.hindimeaning.com/pictures/fruits/Grapes.jpg'
  },
  {
    id: 8,
    name: 'Dates',
    description: 'Some long description Some long description Some long description Some long description Some long description Some long description',
    price: '100',
    isFavorite: false,
    gatagory: 1,
    imageUrl: 'https://www.hindimeaning.com/pictures/fruits/Date.jpg'
  },
  {
    id: 9,
    name: 'Gerbera Flowers',
    description: 'Some long description Some long description Some long description Some long description Some long description Some long description',
    price: '100',
    isFavorite: false,
    gatagory: 2,
    imageUrl: 'https://assets.winni.in/product/primary/2014/10/49702.jpeg?dpr=1&w=400'
  },
  {
    id: 10,
    name: 'Roses And Lilies',
    description: 'Some long description Some long description Some long description Some long description Some long description Some long description',
    price: '100',
    isFavorite: false,
    gatagory: 2,
    imageUrl: 'https://assets.winni.in/product/primary/2022/8/73058.jpeg?dpr=1&w=400'
  },
  {
    id: 11,
    name: 'Mixed Roses',
    description: 'Some long description Some long description Some long description Some long description Some long description Some long description',
    price: '100',
    isFavorite: false,
    gatagory: 2,
    imageUrl: 'https://assets.winni.in/product/primary/2022/9/73371.png?dpr=1&w=400'
  },
  {
    id: 12,
    name: 'Divineful Ferrero',
    description: 'Some long description Some long description Some long description Some long description Some long description Some long description',
    price: '100',
    isFavorite: false,
    gatagory: 2,
    imageUrl: 'https://assets.winni.in/product/primary/2014/8/39472.jpeg?dpr=1&w=400'
  },
  {
    id: 13,
    name: 'Amaranthus',
    description: 'Some long description Some long description Some long description Some long description Some long description Some long description',
    price: '100',
    isFavorite: false,
    gatagory: 3,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0047/9730/0847/collections/nurserylive-amaranthus-seeds-collection-image_166x166.jpg?v=1634630706'
  },
  {
    id: 14,
    name: 'Basil',
    description: 'Some long description Some long description Some long description Some long description Some long description Some long description',
    price: '100',
    isFavorite: false,
    gatagory: 3,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0047/9730/0847/collections/nurserylive-basil-seeds-collection-image_166x166.jpg?v=1633699832'
  },
  {
    id: 15,
    name: 'Beans',
    description: 'Some long description Some long description Some long description Some long description Some long description Some long description',
    price: '100',
    isFavorite: false,
    gatagory: 3,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0047/9730/0847/collections/nurserylive-beans-seeds_166x166.jpg?v=1655712325'
  },
  {
    id: 16,
    name: 'Bellpepper',
    description: 'Some long description Some long description Some long description Some long description Some long description Some long description',
    price: '100',
    isFavorite: false,
    gatagory: 3,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0047/9730/0847/collections/nurserylive-bellpepper-seeds-collection-image_166x166.jpg?v=1634219943'
  }
];

let orderList = [];

try {
  readUserList();
} catch (error) {
  reset()
}

let user = makeid(500);
let order = makeid(500);
// functions

// user related

// get all user
function getAllUser() {
  let users = readUserList()
  return users;
}

// register new user
function registerUser(userDetail) {
  let users = readUserList()
  let userData = {};
  // set data
  userData.userId = users.length;
  userData.name = userDetail.name;
  userData.mail = userDetail.mail;
  userData.pincode = userDetail.pincode;
  userData.city = userDetail.city;
  userData.address = userDetail.address;
  userData.password = userDetail.password;
  userData.myOrders = [];
  // push to array
  users.push(userData);
  writeUserList(users);
  user = makeid(500);
  order = makeid(500);
  return true;
}

// function login user
function loginUser(mail, password) {
  let isPasswordWrong = false;
  let users = readUserList()
  for (let i = 0; i < users.length; i++) {
    if (users[i].mail === mail && users[i].password === password) {
      return {
        name: users[i].name,
        mail: users[i].mail,
        userId: users[i].userId,
        pincode: users[i].pincode,
        city: users[i].city,
        address: users[i].address,
        myOrders: users[i].myOrders
      }
    }
    else if (users[i].mail === mail && users[i].password !== password) {
      isPasswordWrong = true;
    }
  }
  return isPasswordWrong ? 'Incorrect password' : 'No user found!'
}

//update user details
function updateUser(userId, userDetails) {
  let users = readUserList()
  let index = users.findIndex(x => x.userId === userId);
  users[index].address = userDetails.address;
  users[index].name = userDetails.name;
  users[index].pincode = userDetails.pincode;
  users[index].mail = userDetails.mail;
  users[index].city = userDetails.city;
  writeUserList(users);
  return users[index];
}



// product related

// get all product
function getAllProduct() {
  let products = readProductList()
  return products;
}

// add product
function addProduct(productData) {
  let products = readProductList()
  let product = productData;
  product.id = products.length;
  product.name = productData.name;
  product.description = productData.description;
  product.price = productData.price;
  product.isFavorite = false;
  product.gatagory = Number(productData.gatagory);
  product.imageUrl = productData.imageUrl;
  product.discount = productData.discount

  products.push(product);
  writeProductList(products)
  return product;
}


// update product
function getUpdateProduct(id, details) {
  let products = readProductList()

  let index = products.findIndex(x => x.id === id);
  products[index].description = details.description;
  products[index].gatagory = details.gatagory;
  products[index].imageUrl = details.imageUrl;
  products[index].name = details.name;
  products[index].price = details.price;
  products[index].discount = details.discount
  writeProductList(products)
  return products[index];
}

// delete product
function getDeleteProduct(id, details) {
  let products = readProductList()

  let index = products.findIndex(x => x.id === id);
  products.splice(index, 1);
  writeProductList(products)
  return true;
}



// order related functions

// get all order
function getAllOrder() {
  let orders = readOrderList()

  return orders;
}

// get single user order
function getSingleUserOrder(userId) {
  let orderss = readOrderList()

  let orders = orderss.filter(x => x.userId === userId);
  return orders;
}

// place order by user
function placeOrder(userId, orderItems) {
  let users = readUserList();
  let orderss = readOrderList()
  let userIndex = users.findIndex(x => x.userId === userId);
  let userOrdersList = orderItems;
  for (let i = 0; i < userOrdersList.length; i++) {
    userOrdersList[i]['userName'] = users[userIndex].name;
    userOrdersList[i]['userId'] = userId;
    userOrdersList[i]['mail'] = users[userIndex].mail;
    userOrdersList[i]['address'] = users[userIndex].address;
    userOrdersList[i]['city'] = users[userIndex].city;
    userOrdersList[i]['pincode'] = users[userIndex].pincode;
    userOrdersList[i]['orderId'] = orderss.length;
    userOrdersList[i]['status'] = 'Pending';
    orderss.push(userOrdersList[i]);
  }
  writeOrderList(orderss);
  user = makeid(500);
  order = makeid(500);
  return getSingleUserOrder(userId);
}

// cancel order
function cancelOrder(orderId) {
  let orderss = readOrderList()
  let orderIndex = orderss.findIndex(x => x.orderId === orderId);
  orderss.splice(orderIndex, 1);
  writeOrderList(orderss);
  return 1;
}

// delivery order
function deliveryOrder(orderId) {
  let orderss = readOrderList()
  let orderIndex = orderss.findIndex(x => x.orderId === orderId);
  orderss[orderIndex]['status'] = 'Delivery done!'
  writeOrderList(orderss);
  return 1;
}

function getUsers(){
  return user;
}

function getOrders() {
  return order;
}

function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function readUserList() {
  return JSON.parse(fs.readFileSync("userListGross.txt"))
}


function writeUserList(users) {
  fs.writeFileSync("userListGross.txt", JSON.stringify(users))
}


function readProductList() {
  return JSON.parse(fs.readFileSync("productListGross.txt"))
}


function writeProductList(users) {
  fs.writeFileSync("productListGross.txt", JSON.stringify(users))
}

function readOrderList() {
  return JSON.parse(fs.readFileSync("orderListGross.txt"))
}


function writeOrderList(users) {
  fs.writeFileSync("orderListGross.txt", JSON.stringify(users))
}

function reset() {
  writeOrderList(orderList)
  writeProductList(productList)
  writeUserList(usersList)
  return true;
}

function trade() {
  return true;
}

// exports
module.exports = {
  // user related
  registerUser,
  getAllUser,
  loginUser,
  updateUser,
  // product related
  getAllProduct,
  addProduct,
  getUpdateProduct,
  getDeleteProduct,
  // order related 
  getSingleUserOrder,
  placeOrder,
  getAllOrder,
  cancelOrder,
  deliveryOrder,
  // encrypt
  getUsers,
  getOrders,
  reset,
  trade
}
