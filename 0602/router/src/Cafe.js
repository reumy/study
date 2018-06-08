import React from 'react';
import {Redirect} from 'react-router-dom';

class Cafe extends React.Component {

  state = {
    logged : true
  }

  render(){
    return (
      <div>
        {!this.state.logged && <Redirect to="/" />}
        <h2>카페 페이지</h2>
      </div>
    )
  }
}

export default Cafe;
