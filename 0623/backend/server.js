const express = require('express');
const app = express();
const cors = require('cors')();
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const connection = mysql.createConnection({
	host : 'localhost',
	port : 3306,
	user : 'root',
	password : '0000',
	database : 'phone'
});

connection.connect((err)=>{
	if (err) {
		console.log(err);
		return;
	}
	console.log('DB 연결 완료');
})

app.use(cors);

app.listen(4000,()=>console.log('웹서버 성공'));

app.get('/test',(req,res)=>{
	connection.query('SELECT * FROM number',(err,rows)=>{
		if (err) {
			console.log(err);
			return;
		}
		res.json({result : rows});
	})	
})

app.post('/test',(req,res)=>{
	console.log(req.body);
	connection.query('INSERT INTO number SET number="'+req.body.num+'"',(err,rows)=>{
		console.log(rows);
	})
	res.json({message:'잘 받았다'});
})

app.delete('/test/:id',(req,res)=>{
	console.log(req.params.id)
	connection.query('DELETE FROM number WHERE id="'+req.params.id+'"',(err,rows)=>{
		console.log(rows)
		res.json({message:'잘 지웠다'});
	})
})
