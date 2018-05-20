const express = require('express');
const app = express();

app.listen(8888);

app.set('views',__dirname + '/views');
app.set('view engine','ejs');

app.get('/',(req,res)=>{ 
  res.render('index', {a:10});
});