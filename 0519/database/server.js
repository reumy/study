const express = require('express');
const app = express();
const bodyParser = require('body-parser');
 
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '0000',
  database : 'korea'
});

connection.connect(function(err){
  if (err) {
    console.log(err);
    return;
  }
  console.log('connect succes!')
});
 
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
 
app.listen(8080);
 
app.get('/',(req,res)=>{
  res.render('join');
})

app.post('/register',(req,res)=>{
  connection.query('SELECT * FROM users WHERE name="'+req.body.name+'"', function(err, rows){
    if (err) {
      console.log(err);
      return;
    }
    if (rows.length > 0){
      res.send('<script>alert("아이디가 이미 있음");location.href="/";</script>')
    } else {
      connection.query('INSERT INTO users SET ?', req.body, function (err, rows){
        if (err) {
          console.log(err);
          return;
        }
        res.redirect('/login');
      });
    }
  });
/*
  connection.query('INSERT INTO users SET ?', req.body, function (err, rows){
    if (err) {
      console.log(err);
      return;
    }
    res.redirect('/login');
  });
*/
});
 

//로그인
app.get('/login', (req, res)=>{
  res.render('login');
});

app.get('/main', (req, res)=>{
  res.render('main');
});

app.post('/check',(req,res)=>{
  connection.query('SELECT * FROM users WHERE name="' + req.body.name + '"', function(err, rows){
    if (err) {
      console.log(err);
      return;
    }
    if (rows.length > 0) {
      if (rows[0].password == req.body.password) {
        res.redirect('/main');
      } else {
        res.redirect('/login');
      }
    } else {
      res.redirect('/');	
    }
  });
});
