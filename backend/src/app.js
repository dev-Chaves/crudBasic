const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./router.js');

app.use(express.json());

app.use(router);

app.use(cors());


module.exports = app;