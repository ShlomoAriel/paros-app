import {combineReducers} from 'redux'
import courses from './courseReducer'
import admin from './adminReducer'

const rootReducer = combineReducers({
	courses,
	admin
});

export default rootReducer;