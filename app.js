const express = require('express');
const app = express();
const cassidy = require('cassidy');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');



app.use('/products', productRoutes);
app.use('/orders',orderRoutes);

module.exports = app;