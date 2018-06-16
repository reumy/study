import React, {Component} from 'react';
import A3 from './A3';

import {connect} from 'react-redux';

class A2 extends Component {
	render (){
		return (
			<div>
				<h2>A2 {this.props.num}</h2>
				<A3 num={this.props.num} />
				<div>스토어로부터 전달받은 데이터 : {this.props.open}</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		open : state.control.count
	}
}

export default connect(mapStateToProps,null)(A2);