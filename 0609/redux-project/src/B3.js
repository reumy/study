import React, {Component} from 'react';

class B3 extends Component {
	render (){
		return (
			<div>
				<h2>B3</h2>
				<button onClick={this.props.btn}>숫자증가</button>
			</div>
		)
	}
}

export default B3;