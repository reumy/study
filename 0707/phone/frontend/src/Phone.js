import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Phone extends Component {

	state = {
		phoneName : '',
		phoneNumber : '',
		userID : this.props.isSelected,
		list : [],
    updateID : ''
	}

	componentDidMount(){
		this.getList();
	}

	getList(){
		axios.get(`http://localhost:4000/phone/${this.state.userID}`)
			.then(response=>{
				console.log(response.data);
				this.setState({list:response.data.list, phoneName:'', phoneNumber:''});
			}).catch(error=>{
				console.log(error);
			})
	}

	handleChange(e){
		this.setState({[e.target.name] : e.target.value});
	}

	handleClick(){
		axios.post('http://localhost:4000/phone',this.state)
			.then(response=>{
				this.getList();
				this.setState();
				console.log(response.data);
			})
			.catch(error=>{
				console.log(error);
			})
	}

	handleDelete(phone_id){
		axios.delete(`http://localhost:4000/phone/${phone_id}`)
		.then(response=>{
	  	this.getList();
	  	this.setState({phoneName:'', phoneNumber:''});
	  	//this.pname.focus();
	  }).catch(error=>{
	  	console.log(error);
	  })
	}

	handleSelect(phone_id){
		const { list } = this.state;
		let selected = list.filter(value=>phone_id === value.phone_id);
  	this.setState({
  		phoneName:selected[0].name, 
  		phoneNumber:selected[0].number, updateID : phone_id
  	})
	}

	handleUpdate(){
		axios.put(`http://localhost:4000/phone/${this.state.updateID}`,{name:this.state.phoneName, number:this.state.phoneNumber})
  			.then(response=>{
	  			this.getList();
	  		}).catch(error=>{
	  			console.log(error);
	  		})
	}

	handleCancel(){
		this.setState({phoneName:'', phoneNumber:'', updateID:''});
	}

	render(){

		const { list, updateID } = this.state;
		const phoneList = list.map((value)=>{
			return(
				<div key={value.phone_id}>{value.name} {value.number}
					<button onClick={this.handleDelete.bind(this,value.phone_id)}>삭제</button>
					<button onClick={this.handleSelect.bind(this,value.phone_id)}>선택</button>
				</div>
			)
		})

		return(			
			<div>
				{!this.props.status && <Redirect to="/" />}
				<h2>Phone</h2>
				<div>
					{phoneList}
				</div>
				<input type="text" name="phoneName"
					value={this.state.phoneName}
					onChange={this.handleChange.bind(this)} />
				<input type="text" name="phoneNumber"
					value={this.state.phoneNumber}
					onChange={this.handleChange.bind(this)} />
				{!updateID && <button onClick={this.handleClick.bind(this)}>등록</button>}
				<button onClick={this.handleUpdate.bind(this)}>수정</button>
				{updateID && <button onClick={this.handleCancel.bind(this)}>취소</button>}
			</div>
		)
	}
}

export default Phone;