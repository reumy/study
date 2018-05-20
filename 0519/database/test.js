var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '0000',
  database : 'korea'
});

connection.connect(function(err){
	if (err) {
		console.log(err);
		return; // 안쓰면 이거뜨고 밑에거도 뜸
	}
	console.log('connect succes!')
});


// 데이터 추가
/*
connection.query('INSERT INTO users (name, password) VALUES("abc", "1111")', function (err, rows){ // 따옴표확인
  if (err) {
  	console.log(err);
  	return;
  }
  console.log(rows);
});
*/


// 데이터 조회
/*
connection.query('SELECT * FROM users', function (err, rows){
  if (err) {
  	console.log(err);
  	return;
  }
  console.log(rows);
});
*/