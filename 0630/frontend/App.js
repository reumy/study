import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import Phone from './Phone';

class App extends Component {

  state = {
    logged : false,
    selectedID : ''
  }

  isLogin(userID){
    this.setState({logged:true, selectedID:userID});
  }

  render() {
    return (
    	<Router>
          <div className="App">
            <h1>프론트엔드</h1>
            <Link to="/">로그인</Link><br />
            <Link to="/register">회원가입</Link><br />
            <Link to="/phone">전화번호부</Link>
            <hr />
            <Route exact path="/" 
              render={props=><Login {...props}
              status={this.state.logged}
              isLogin={this.isLogin.bind(this)} />} />
            <Route exact path="/register" 
              render={props=><Register {...props}
              status={this.state.logged} />} />
            <Route exact path="/phone" 
              render={props=><Phone {...props}
              status={this.state.logged}
              isSelected={this.state.selectedID} />} />
        </div>
      </Router>
    );
  }
}

export default App;
