import React, {Component} from 'react';
import B2 from './B2';

class B1 extends Component {
	render (){
		return (
			<div>
				<h2>B1</h2>
				<B2 btn={this.props.btn} />
			</div>
		)
	}
}

export default B1;