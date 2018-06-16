import {combineReducers} from 'redux';
import {INCREMENT, DECREMENT} from '../actions/counting';

const initialState = {
	count : 20,
	a : 30
}

const control = (state=initialState, action) => {
	switch(action.type){
		case INCREMENT :
			return {...state, count : state.count + 1};
		case DECREMENT :
			return {...state, count : state.count - 1};
		default :
			return state;
	}
}

const reducers = combineReducers({
	control
})

export default reducers;