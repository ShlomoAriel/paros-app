import {combineReducers} from 'redux'
import admin from './adminReducer'
import accommodation from './accommodationReducer'
import calendar from './calendarReducer'
import content from './contentReducer'
import login from './loginReducer'
import packageState from './packageReducer'

const rootReducer = combineReducers({
	login,
	admin,
	packageState,
	accommodation,
	content,
	calendar
});

export default rootReducer;