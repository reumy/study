import React from 'react';
import List from './components/List';
import './App.css';

class App extends React.Component{

  render(){

    let title = '리액트 어플리케이션'
    let styles = {
      color:'red',
      backgroundColor:'yellow'
    };

    return (
      <div>
        <h1 style={styles}>{title}</h1>
        <div className="box">새로운 라인1</div>
        <div className="box2">새로운 라인2</div>
        <List />
      </div>
    )
  }
}

export default App;
