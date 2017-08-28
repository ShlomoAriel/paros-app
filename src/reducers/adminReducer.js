import initialState from './initialState'
import R from 'ramda'
export default function adminReducer(state = initialState.admin, action){
	switch (action.type){
		case 'UPDATE_INPUT':
			return R.assocPath(['homeContent',state.selectedLanguage, action.field], action.value,state)
		case 'SET_LANGUAGE':
			return R.assoc('selectedLanguage', action.language,state)
		default: 
			return state;
	}
}