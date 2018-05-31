import React, { Component } from 'react';
import Open from './Open';

class List extends Component{

	constructor(){
		super();
		this.state = {
			num : 10,
			show : false
		}
	}

	handleClick(){
		this.setState({num:this.state.num + 1});
	}

	showClick(){
		this.setState({show:this.state.show});
	}

  render(){
  	const {num} = this.state;
  	return (
  		<div>
  			<h1>List 컴포넌트</h1>
  			<div>List 컴포넌트가 만든 state 변수 num은 {num}</div>
  			<button onClick={this.handleClick.bind(this)}>숫자증가</button>
  			<button onClick={this.showClick.bind(this)}>토글버튼</button>		
  			<hr />
  			{(this.state.show) ? <Open count={num} upCount={this.handleClick.bind(this)}/>:''}
  		</div>
  	)
	}
}

export default List;