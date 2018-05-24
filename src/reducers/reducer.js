import {combineReducers} from 'redux';
import {ADD_TABLE, NO_DATA, LOADING, LOADED} from '../actions/constants.js';

let counterReducer = (state={}, action) => {
	switch( action.type ) {
		case 'INCREASE_BY_ONE':
			return state + LOADING;

		case 'DECREASE_BY_ONE':
			return state - LOADING;

		default:
			return state;
	}
}

let tableReducer = (state={past:[], present:[], future:[]}, action) => {
	switch( action.type ) {
		case ADD_TABLE:
		return {
				past: [...state.past,state.present],
				present: [...state.present, action.furniture],
				future: []
			};
		default:
			return state;
	}
};
let historyReducer = (state=[], action) =>{
			return(
				[...state, action.type]
			);
}
let rootReducer = combineReducers({
	produkter: tableReducer,
	value: counterReducer,
	history: historyReducer,
});

export default rootReducer;
