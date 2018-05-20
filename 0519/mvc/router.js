'use strict';

const Router = app => {
  const LoginController = require('./Login');
  app.get('/',(req, res)=>LoginController.view(req, res));
  app.get('/register',(req, res)=>LoginController.register(req, res));
}

module.exports = Router;
