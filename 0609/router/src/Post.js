import React from 'react';
import {Route, Link} from 'react-router-dom';

const Content = (props) => {
	return (
		<div>{props.match.params.title}</div>
	)
}

class Post extends React.Component {
	render (){
		return (
			<div>
				<h2>포스트 페이지</h2>
				<Link to="/post/html">HTML5</Link><br />
				<Link to="/post/css">CSS</Link><br />
				<Link to="/post/js">JavaScript</Link><br />				
				<Route path="/post/:title" component={Content} />
			</div>
		)
	}
}

export default Post;