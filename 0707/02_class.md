## 객체지향
- 추상성
- 은폐성
- 상속성
### es5
```
function open(){
  this.a = 10;
}

open.prototype.b = 30;  // 상속

var a = new open();

console.log(a.a);
```
> 결과는 10

### es6
```
class close {
  constructor(){
    this.a = 10;
  }
}

var b = new close();

console.log(b.a); 
```
> 결과는 10
```
class child extends Close {...}
```
> es5의 상속은 es6에서 이런식으로 함
