const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router')(app);

app.listen(8080);