import React, {Component} from 'react';
import A2 from './A2';

class A1 extends Component {
	render (){
		return (
			<div>
				<h2>A1</h2>
				<A2 num={this.props.num} />
			</div>
		)
	}
}

export default A1;