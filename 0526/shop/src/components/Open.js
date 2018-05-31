import React, { Component } from 'react';
import Close from './Close';

class Open extends Component{

  constructor(){
    super();
    console.log('constructor');
    this.state = {a:0};
  }

  componentWillMount(){
    console.log('componentWillMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.count > 20){
      return false;
    }
    return true;
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    console.log('componentWillReceiveProps');
  }

  componentDidMount(){
    console.log('componentDidMount');
    this.setState({a:this.props.count});
  }

  componentWillUpdate(){
    console.log('componentWillUpdate');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  render(){
    console.log('render');
    const {count} = this.props;
    return (
        <div>
          <h1>Open 컴포넌트</h1>
          <div>상위 List 컴포넌트가 전달해준 데이터는 {count}</div>
          <hr />
          <Close count={count} upCount={this.props.upCount}/>
        </div>
    )
  }
}

export default Open;
