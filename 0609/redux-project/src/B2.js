import React, {Component} from 'react';
import B3 from './B3';

import {connect} from 'react-redux';
import {increase, decrease} from './actions/counting';

class B2 extends Component {
	render (){
		return (
			<div>
				<h2>B2</h2>
				<button onClick={this.props.onIncreament}>스토어 숫자증가</button>
				<button onClick={this.props.onDecreament}>스토어 숫자감소</button>
				<B3 btn={this.props.btn} />
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onIncreament : () => {dispatch(increase())},
		onDecreament : () => {dispatch(decrease())}
	}
}

export default connect(null, mapDispatchToProps)(B2);