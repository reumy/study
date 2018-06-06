import React from 'react';
import InputForm from './InputForm';
import ArrayHandle from './ArrayHandle';

class App extends React.Component {
	render(){
		return (
			<div>
				<h1>리액트 입력폼 방식</h1>
				<hr />
				<InputForm />
				<hr />
				<ArrayHandle />
			</div>
		)
	}
}

export default App;