const express = require('express');  // 프레임워크 가져오기
const app = express();
// var express = require('express')(); // 도 가능하지만 var express만 따로 써야할때도 있기 때문

app.listen(8888);  // localhost:8888 내pc(localhost)에서 서버 접속
// app 프레임워크 자체
// app.get('/',fuctiont(){}); // 누군가 / 로 들어오면 함수를 실행함

app.set('views',__dirname + '/views'); // ejs 템플릿 (폴더)세팅
app.set('view engine','ejs'); // view 세팅

//cosole.log('a'); // 여기에선 한번만뜸
app.get('/',(req,res)=>{
	//console.log('a');  // 서버랑은 상관없음 터미널에만 뜸 // 실행할때마다뜸
	//res.render('../views/index'); // 파일을 요청받아서 render 그리다
	// ../가 되는건 아래와 같은 이유	
	// views ejs를 위에서 /views로 위치를 세팅했기때문에 index만 해도 연결됨
	res.render('index', {a:10}); // ejs파일에 파일을 불러옴

})
