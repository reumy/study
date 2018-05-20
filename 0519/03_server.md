## 세팅
#### 1. npm 설치
```
npm install express ejs body-parser supervisor --save
```


#### 2. npm 가져오기 & 라우트
```
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
```
```
app.listen(8080);
```
- `body-paser : post 방식으로 라우트할때 body 프로퍼티로 데이터를 가져오게 되는데 그때 parser를 이용해 넘어오는 데이터를 기계언어가 아닌 사람이 알 수 있는 언어로 가져옴`


#### 3. database 연결
```
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '0000',
  database : 'korea'
});
```
- 연결확인
```
connection.connect(function(err){
  if (err) {
    console.log(err);
    return;
  }
  console.log('connect succes!')
});
```


#### 4. 템플릿 엔진
```
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
```
- `bodyParser.json() : body를 json 형태로 받음`
- `bodyParser.urlencoded({ extended : true }) : body가 인코딩해서 사람이 볼 수 있게 함`

```
app.get('/',(req,res)=>{
  res.render('join');
})
```
> 홈으로 접속했을때 join.ejs를 출력

join.ejs
```
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Title of the document</title>
</head>
<body>

  <h1>회원가입</h1>
  <hr/ >

  <form action="/register" method="POST">
    아이디 <input type="text" name="name" />
    비밀번호 <input type="password" name="password" />
    <button type="submit">전송</button>
  </form>

</body>
</html>
```
> submit하면 해당 정보가 register로 넘어감

- `name : 해당 정보가 어떤 이름으로 넘어갈지 정의`
- 실행
```
node server.js
```
- 접속
```
localhost:8080
```
- 결과
```
Cannot POST /register
```
> 아직은 register에 대해 라우트가 안된상태
- 접속2
```
http://localhost:8080/register
```
- 결과
```
Cannot GET /register
```
> 주소를 직접쳐서 들어갔으니 GET방식이 됨<br/>그래서 POST, GET 둘다 라우트를 해줘야 함


## 회원가입
