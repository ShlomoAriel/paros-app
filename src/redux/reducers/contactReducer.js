import * as types from '../actions/actionTypes'
import initialState from './initialState'
import R from 'ramda'
export default function contactReducer(state = initialState.contact, action){
	switch (action.type){
		case 'UPDATE_CONTACT_INPUT':
			return R.assocPath(['contactForm',action.field], action.value,state)
		default: 
			return state;
	}
}