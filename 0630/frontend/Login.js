import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends Component {

  state = {
    username : '',
    userpass : ''
  }

  handleChange(e){
    this.setState({ [e.target.name] : e.target.value });
  }

  handleClick(){
    axios.post('http://localhost:4000/login',this.state)
         .then((response)=>{
           console.log(response.data);
           if (response.data.success === 1) {
             this.props.isLogin(response.data.user.user_id);
             this.props.history.push('/phone');
           } else if (response.data.success === -1) {
             alert(response.data.message);
             return;
           } else if (response.data.success === -2) {
             alert(response.data.message);
             return;
           }
         })
         .catch(err=>{
           console.log(err);
         })
  }

  render() {
    return (
      <div>
        {this.props.status && <Redirect to="/phone" />}
        <h2>Login</h2>
        <input type="text" name="username" onChange={this.handleChange.bind(this)} />
        <input type="password" name="userpass" onChange={this.handleChange.bind(this)} />
        <button onClick={this.handleClick.bind(this)}>로그인 하기</button>
      </div>
    );
  }
}

export default Login;
