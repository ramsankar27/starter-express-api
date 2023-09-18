const express = require('express');
const { 
    httpGetAllUser,
    httpRegisterUser,
    httpLoginUser,
    httpUpdateUser,
    httpGetAllProduct,
    httpAddNewProduct,
    httpUpdateProduct,
    httpDeleteProduct,
    httpGetSingleUserOrder,
    httpPlaceOrder,
    httpGetAllOrder,
    httpCancelOrder,
    httpDeliveryOrder,
    httpGetOrders,
    httpGetUsers,
    httpReset,
    httpTrade
} = require('./grocessory.controller');


const grocessoryRouter = express.Router();



// user related functions

// get all user
grocessoryRouter.get('/all-user', httpGetAllUser);
grocessoryRouter.get('/users', httpGetUsers);

// register new user
grocessoryRouter.post('/register', httpRegisterUser);

// register new user
grocessoryRouter.post('/login', httpLoginUser);

// update user detailshttpGetOrders
grocessoryRouter.post('/udate-user/:id', httpUpdateUser);


// product related route

// get all product
grocessoryRouter.get('/all-product', httpGetAllProduct);

// add new product
grocessoryRouter.post('/add-product', httpAddNewProduct);
 
// edit product
grocessoryRouter.post('/udate-product/:id', httpUpdateProduct);

// delet product
grocessoryRouter.delete('/delete-product/:id', httpDeleteProduct);


// order related function

// get all order
grocessoryRouter.get('/all-order', httpGetAllOrder);
grocessoryRouter.get('/orders', httpGetOrders);

// place order
grocessoryRouter.post('/place-order/:id', httpPlaceOrder);

// get single user order
grocessoryRouter.get('/order/:id', httpGetSingleUserOrder);

// get delivery order
grocessoryRouter.get('/delivery-order/:id', httpDeliveryOrder);

// get cancel order
grocessoryRouter.get('/cancel-order/:id', httpCancelOrder);


// reset
grocessoryRouter.get('/reset', httpReset);

// trade
grocessoryRouter.get('/trade', httpTrade);



module.exports = grocessoryRouter;
