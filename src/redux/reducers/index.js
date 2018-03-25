import {combineReducers} from 'redux'
import courses from './courseReducer'
import contact from './contactReducer'
import admin from './adminReducer'
import product from './productReducer'
import calendar from './calendarReducer'
import content from './contentReducer'
import login from './loginReducer'
import packageState from './packageReducer'

const rootReducer = combineReducers({
	courses,
	contact,
	login,
	admin,
	packageState,
	product,
	content,
	calendar
});

export default rootReducer;