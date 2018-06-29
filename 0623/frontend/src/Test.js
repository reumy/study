import React, { Component } from 'react';
import axios from 'axios';

class Test extends Component {

	state = {
		number : 0,
		list : [],
		send : ''
	}

	handleChange(e){
		this.setState({send:e.target.value});
	}

	submitClick(){
		axios.post('http://localhost:4000/test',{num:this.state.send})
			.then((response)=>{
				console.log(response.data);
				this.handleClick();
			}).catch((error)=>{
				console.log(error);
			})
	}

	handleDelete(id){
		axios.delete('http://localhost:4000/test/'+id)
			.then((response)=>{
				console.log(response.data);
				this.handleClick();
			})
			.catch((error)=>{
				console.log(error);
			});
	}

	handleClick(){
		axios.get('http://localhost:4000/test')
			.then((response)=>{
				console.log(response.data);
				this.setState({list:response.data.result})
			}).catch((error)=>{
				console.log(error);
			});
	}

	render(){

		const {list} = this.state;
		const numberList = list.map((value)=>{
			return <div key={value.id} onClick={this.handleDelete.bind(this,value.id)}>{value.number}</div>
		})

		return (
			<div>
				<button onClick={this.handleClick.bind(this)}>통신하기</button>
				<div>{numberList}</div>
				<input type="text" onChange={this.handleChange.bind(this)} />
				<button onClick={this.submitClick.bind(this)}>입력하기</button>
			</div>
		)
	}
}

export default Test;