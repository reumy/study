import React, { Component } from 'react';

class Close extends Component{

  render(){
  	const {count} = this.props;
  	return (
  		<div>
  			<h1>Close 컴포넌트</h1>
  			<div>상위 Open 컴포넌트가 전달해준 데이터는 {count}</div>
  			<button onClick={this.props.upCount}>숫자증가</button>
  		</div>
  	)
	}
}

export default Close;