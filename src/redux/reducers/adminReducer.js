import * as types from '../actions/actionTypes'

import initialState from './initialState'
import R from 'ramda'
export default function adminReducer(state = initialState.admin, action){
	switch (action.type){
		case types.UPDATE_INPUT:
			return R.assocPath([state.selectedLanguage, 'home', action.field], action.value,state)
		case types.SET_LANGUAGE:
			return R.assoc('selectedLanguage', action.language,state)
		default: 
			return state;
	}
}