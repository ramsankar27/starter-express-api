const { 
    registerUser,
    getAllUser,
    loginUser,
    updateUser,
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
  getOrders,
  getUsers
}

= require('../../models/grocessory.model');



// functions

// user related

// get all user
function httpGetAllUser(req, res) {
    return res.status(200).json(getAllUser())
}

// register new user
function httpRegisterUser(req, res) {
    const newUser = req.body;
    return res.status(200).json(registerUser(newUser));
}

// login user
function httpLoginUser(req, res) {
    const mail = req.body.mail;
    const password = req.body.password;
    return res.status(200).json(loginUser(mail, password));
}

// update user details
function httpUpdateUser(req, res) {
    const userId = Number(req.params.id);
    const userDetails = req.body;
    return res.status(200).json(updateUser(userId, userDetails));
}



// product related

// get all product
function httpGetAllProduct(req, res) {
    return res.status(200).json(getAllProduct());
}

// add new product
function httpAddNewProduct(req, res) {
    const newProduct = req.body;
    return res.status(200).json(addProduct(newProduct));
}

// update product
function httpUpdateProduct(req, res){
    const userId = Number(req.params.id);
    const productDetails = req.body;
    return res.status(200).json(getUpdateProduct(userId, productDetails));
}

// delete product
function httpDeleteProduct(req, res){
    const userId = Number(req.params.id);
    return res.status(200).json(getDeleteProduct(userId));
}

// get all order
function httpGetAllOrder(req, res) {
    return res.status(200).json(getAllOrder());
}

// get single user order
function httpGetSingleUserOrder(req, res) {
    const userId = Number(req.params.id);
    return res.status(200).json(getSingleUserOrder(userId));
}

// cancel order
function httpCancelOrder(req, res) {
    const orderID = Number(req.params.id);
    return res.status(200).json(cancelOrder(orderID));
}

// delivery order
function httpDeliveryOrder(req, res) {
    const orderID = Number(req.params.id);
    return res.status(200).json(deliveryOrder(orderID));
}

// place order
function httpPlaceOrder(req, res) {
    const orderItems = req.body;
    const userId = Number(req.params.id);
    return res.status(200).json(placeOrder(userId, orderItems));
}

// get users and orders
function httpGetUsers(req, res) {
    return res.status(200).json(getUsers());    
}
function httpGetOrders(req, res) {
    return res.status(200).json(getOrders());    
    
}


// exports
module.exports = {
    // user related
    httpGetAllUser,
    httpRegisterUser,
    httpLoginUser,
    httpUpdateUser,
    // product related
    httpGetAllProduct,
    httpAddNewProduct,
    httpUpdateProduct,
    httpDeleteProduct,
    // order related 
    httpGetSingleUserOrder,
    httpPlaceOrder,
    httpGetAllOrder,
    httpCancelOrder,
    httpDeliveryOrder,
    httpGetUsers,
    httpGetOrders
}