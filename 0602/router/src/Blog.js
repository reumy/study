import React from 'react';

class Blog extends React.Component {

  handleClick(){
    this.props.history.push('/');
  }

  render(){
    console.log(this.props.match.params.title);
    return (
      <div>
        <h2>{this.props.match.params.title}블로그 페이지</h2>
        <button onClick={this.handleClick.bind(this)}>메인으로 돌아가기</button>
      </div>
    )
  }
}

export default Blog;
