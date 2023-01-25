const AWS = require("aws-sdk");
const s3 = new AWS.S3()

// database
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

await s3.putObject({
  Body: JSON.stringify({key:"its worked"}),
  Bucket: "cyclic-dead-cuff-crow-eu-west-3",
  Key: "grocessory/my_file.json",
}).promise()

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

let user = makeid(500);
let order = makeid(500);
// functions

// user related

// get all user
function getAllUser() {
  let my_file = await s3.getObject({
    Bucket: "cyclic-dead-cuff-crow-eu-west-3",
    Key: "grocessory/my_file.json",
  }).promise()
  return JSON.parse(my_file);
}

// register new user
function registerUser(userDetail) {
  let userData = {};
  // set data
  userData.userId = usersList.length;
  userData.name = userDetail.name;
  userData.mail = userDetail.mail;
  userData.pincode = userDetail.pincode;
  userData.city = userDetail.city;
  userData.address = userDetail.address;
  userData.password = userDetail.password;
  userData.myOrders = [];
  // push to array
  usersList.push(userData);
  user = makeid(500);
  order = makeid(500);
  return true;
}

// function login user
function loginUser(mail, password) {
  let isPasswordWrong = false;
  for (let i = 0; i < usersList.length; i++) {
    if (usersList[i].mail === mail && usersList[i].password === password) {
      return {
        name: usersList[i].name,
        mail: usersList[i].mail,
        userId: usersList[i].userId,
        pincode: usersList[i].pincode,
        city: usersList[i].city,
        address: usersList[i].address,
        myOrders: usersList[i].myOrders
      }
    }
    else if (usersList[i].mail === mail && usersList[i].password !== password) {
      isPasswordWrong = true;
    }
  }
  return isPasswordWrong ? 'Incorrect password' : 'No user found!'
}

//update user details
function updateUser(userId, userDetails) {
  let index = usersList.findIndex(x => x.userId === userId);
  usersList[index].address = userDetails.address;
  usersList[index].name = userDetails.name;
  usersList[index].pincode = userDetails.pincode;
  usersList[index].mail = userDetails.mail;
  usersList[index].city = userDetails.city;
  return usersList[index];
}



// product related

// get all product
function getAllProduct() {
  return productList;
}

// add product
function addProduct(productData) {
  let product = productData;
  product.id = productList.length;
  product.name = productData.name;
  product.description = productData.description;
  product.price = productData.price;
  product.isFavorite = false;
  product.gatagory = Number(productData.gatagory);
  product.imageUrl = productData.imageUrl;

  productList.push(product);
  return product;
}


// update product
function getUpdateProduct(id, details) {
  let index = productList.findIndex(x => x.id === id);
  productList[index].description = details.description;
  productList[index].gatagory = details.gatagory;
  productList[index].imageUrl = details.imageUrl;
  productList[index].name = details.name;
  productList[index].price = details.price;
  return productList[index];
}

// delete product
function getDeleteProduct(id, details) {
  let index = productList.findIndex(x => x.id === id);
  productList.splice(index, 1);
  return true;
}



// order related functions

// get all order
function getAllOrder() {
  return orderList;
}

// get single user order
function getSingleUserOrder(userId) {
  let orders = orderList.filter(x => x.userId === userId);
  return orders;
}

// place order by user
function placeOrder(userId, orderItems) {
  let userIndex = usersList.findIndex(x => x.userId === userId);
  let userOrdersList = orderItems;
  for (let i = 0; i < userOrdersList.length; i++) {
    userOrdersList[i]['userName'] = usersList[userIndex].name;
    userOrdersList[i]['userId'] = userId;
    userOrdersList[i]['mail'] = usersList[userIndex].mail;
    userOrdersList[i]['address'] = usersList[userIndex].address;
    userOrdersList[i]['city'] = usersList[userIndex].city;
    userOrdersList[i]['pincode'] = usersList[userIndex].pincode;
    userOrdersList[i]['orderId'] = orderList.length;
    userOrdersList[i]['status'] = 'Pending';
    orderList.push(userOrdersList[i]);
  }
  user = makeid(500);
  order = makeid(500);
  return getSingleUserOrder(userId);
}

// cancel order
function cancelOrder(orderId) {
  let orderIndex = orderList.findIndex(x => x.orderId === orderId);
  orderList.splice(orderIndex, 1);
  return 1;
}

// delivery order
function deliveryOrder(orderId) {
  let orderIndex = orderList.findIndex(x => x.orderId === orderId);
  orderList[orderIndex]['status'] = 'Delivery done!'
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
  getOrders
}