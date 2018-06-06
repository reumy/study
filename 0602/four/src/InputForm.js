import React from 'react';

class InputFrom extends React.Component {
  state = {
    name : '',
    pass : ''
  }

  handleClick(){
    this.setState({name:this.data.value});
  }

  handleChange(e){
    this.setState({[e.target.name] : e.target.value});
  }

  render(){
    return (
      <div>
        <input type="text" name="name" ref={ref=>this.data=ref} onChange={this.handleChange.bind(this)} />
        <input type="password" name="pass" onChange={this.handleChange.bind(this)} value={this.state.pass} />
        <button onClick={this.handleClick.bind(this)}>결과보기</button>
        <div>입력된 name 결과는 : {this.state.name}</div>
        <div>입력된 pass 결과는 : {this.state.pass}</div>
      </div>
    )
  }
}

export default InputFrom;
