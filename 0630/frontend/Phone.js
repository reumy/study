import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Phone extends Component {

	state = {
		phoneName : '',
		phoneNumber : '',
		userID : this.props.isSelected
	}

	handleChange(e){
		this.setState({[e.target.name] : e.target.value});
	}

	handleClick(){
		axios.post('http://localhost:4000/phone',this.state)
			.then(response=>{
				console.log(response.data);
			})
			.catch(error=>{
				console.log(error);
			})
	}

	render(){
		return(			
			<div>
				{!this.props.status && <Redirect to="/" />}
				<h2>Phone</h2>
				<input type="text" name="phoneName" onChange={this.handleChange.bind(this)} />
				<input type="text" name="phoneNumber" onChange={this.handleChange.bind(this)} />
				<button onClick={this.handleClick.bind(this)}>등록</button>
			</div>
		)
	}
}

export default Phone;