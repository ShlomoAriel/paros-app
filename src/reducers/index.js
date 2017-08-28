import {combineReducers} from 'redux'
import courses from './courseReducer'
import contact from './contactReducer'
import admin from './adminReducer'
import product from './productReducer'
import packageState from './packageReducer'

const rootReducer = combineReducers({
	courses,
	contact,
	admin,
	packageState,
	product
});

export default rootReducer;