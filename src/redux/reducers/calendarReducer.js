import * as types from '../actions/actionTypes'
import initialState from './initialState'
import R from 'ramda'
export default function calendarReducer(state = initialState.calendar, action){
	switch (action.type){
		case 'UPDATE_CALENDAR_INPUT':
			return R.assocPath(['form',action.field], action.value,state)
		case 'SAVE_EVENT':
			let eventListState = R.clone(state)
			eventListState.events.push(state.form)
			return eventListState
		default: 
			return state;
	}
}