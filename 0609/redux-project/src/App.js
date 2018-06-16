import React, {Component} from 'react';
import A1 from './A1';
import B1 from './B1';

class App extends Component {

	state = {
		number : 10
	}

	handleClick(){
		this.setState({number:this.state.number + 1});
	}

	render(){
		return (
			<div>
				<h1>리덕스</h1>
				<div>{this.state.number}</div>
				<button onClick={this.handleClick.bind(this)}>숫자증가</button>
				<A1 num={this.state.number} />
				<B1 btn={this.handleClick.bind(this)} />
			</div>
		)
	}
}

export default App;