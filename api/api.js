const express = require('express');
const api = express();

const camerasRoutes = require('./routes/cameras');
const laptopsRoutes = require('./routes/laptops');
const phonesRoutes = require('./routes/phones');

api.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

api.use('/cameras', camerasRoutes);
api.use('/laptops', laptopsRoutes);
api.use('/phones', phonesRoutes);

module.exports = api;
