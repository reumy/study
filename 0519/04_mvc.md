## MVC
- node에는 mvc 패턴이 없음
- node mvc 만드는 법 검색해서 익힐 것
- promise, async, 언씽크...?
- [선생님 github](github.com/riahnrhyme) 참고하기
  - coconut - router.js 와 controllers 폴더 참고
> 한 테이블만 가져와서 쿼리를 날리고 실제 쿼리는 models 폴더에 있음

#### TIP
- 이런식으로 데이터베이스 암호나 보안에 필요한건 따로만들어 구조화를 시켜라
- 구조화를 시키면 시킬수록 좋음


## MVC 구현
- 해당 파일을 클래스로 쓰기위해 대문자를 넣어 이름을 생성

### Login.js
```
const Login = function(){
  return
    {
      view : (req, res) => {
      res.render('/login');
    }
      register : (req, res) => {
      res.render('/register');
    } 
  }
}

module.exports = new Login();
```
- 코드분석
```
const Login = function(){...});
```
> 클래스를 만들어 줌

- () => {} 는 new \*()가 되지않기 때문에 function을 씀<br/> () => {} 를 쓰려면 class Login = () => {} 이런식으로 써야함

```
view : (req, res) => {...}
```
> 뷰딴
```
module.exports = new Login();
```
> 인스턴스화 시킴 즉, 내가쓰는 클래스를 남들과 겹치지 않게 만듬


### server.js
```
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router')(app);

app.listen(8080);
```
- 코드분석
```
const router = require('./router')(app);
```
> 라우터 파일을 따로 만들어서 이곳에서만 라우트를 함


### router.js
```
'use strict';

const Router = app => {
  const LoginController = require('./Login');
  app.get('/',(req, res)=>LoginController.view(req, res));
  app.get('/register',(req, res)=>LoginController.register(req, res));
}

module.exports = Router;
```
- 코드분석
```
'use strict';
```
> 엄격한 코드구문의 오류를 잡아줌
```
module.exports = Router;
```
> require('./router')를 의미<br/>require('./rotuer')(app) 은 Router(app)인 셈
