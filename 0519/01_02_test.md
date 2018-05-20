## database 연동 테스트
1. 폴더(프로젝트) 생성
- `database` 이름의 폴더생성
- 프로젝트 명세
```
npm init
```
- MySQl npm 설치
```
npm install node-mysql --save
```

#### 2. 데이터베이스 연동
- mysql 가져오기
```
var mysql = require('mysql');
```
- 연결하기
```
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'root',
  password : '0000',
  database : 'korea'
});
```
> port가 기본포트(3306)일땐 생략가능

#### 3. 연결확인
```
connection.connect(function(err){
  if (err) {
    console.log(err);
    return;
  }
  console.log('connect succes!')
});
```
> 연결에 실패하면 콘솔에 err가 뜨고 성공하면 connect succes!가 뜨게함<br/>return을 쓰는 이유는 연결에 실패했을때 err도 뜨고 그 다음 코드도 실행돼 connect succes!도 같이 뜨게하는걸 막음
- 실행
```
node test.js
```
- 결과
```
connect succes!
```
> cmd에서 콘솔로 확인

#### 4. 데이터 조회
```
connection.query('SELECT * FROM users', function (err, rows){
  if (err) {
    console.log(err);
    return;
  }
  console.log(rows);
});
```
- 결과
```
[ RowDataPacket < id: 1, name: 'admin', password: '123qwe' > ]
```
> users 테이블을 조회해 콘솔에 출력해줌

#### 5. 데이터 추가
```
connection.query('INSERT INTO users (name, password) VALUES("abc", "1111")', function (err, rows){
  if (err) {
    console.log(err);
    return;
  }
  console.log(rows);
});
```
> 따옴표 주의! sql문 전체를 작은따옴표로 감쌌으니 안에 데이터는 큰따옴표로 감쌀 것!
- 결과
```
affectedRows: 1
...
```
