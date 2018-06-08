import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import Main from './Main';
import Blog from './Blog';
import Cafe from './Cafe';
import './App.css'

class App extends React.Component {
  render(){
    console.log(this.props);
    return (
      <Router>
        <div>
          <h1>리액트 라우트</h1>
          <NavLink exact to="/">메인으로 가기</NavLink><br />
          <NavLink to="/blog/reumy">블로그로 가기</NavLink><br />
          <NavLink to="/cafe">카페로 가기</NavLink><br />					
          <hr />
          <Route exact path="/" component={Main} />
          <Route path="/blog/:title" component={Blog} />
          <Route path="/cafe" component={Cafe} />
        </div>
      </Router>
    )
  }
}

export default App;
