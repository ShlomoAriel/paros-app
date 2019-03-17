import * as types from '../actions/actionTypes'
import * as accommodationUtils from '../utils/packageUtils'
// import initialState from './initialState'
import R from 'ramda'

const initialState = {
	list:[]
}

export default function accommodationReducer(state = initialState, action){
	switch (action.type){
		case 'UPDATE_ACCOMMODATION_INPUT':
			let newState = accommodationUtils.editPackage(state, action.field, action.value, action.id)
			return newState
		case types.ADD_ACCOMMODATION:
			let list = R.clone(state.list)
			if(action.item.id){
				let foundIndex = list.findIndex( listItem => listItem.id === action.item.id)
				list[foundIndex] = action.item;
			} else{
				list.push(action.item)
			}
			return {...state.list, list: list}
		case types.SET_ACCOMMODATION_LIST:
			return {...state, list: action.list}
		case types.REMOVE_ACCOMMODATION_FROM_LIST:
			let stateAfterRemovale = accommodationUtils.removePackage(state, action.id)
			return stateAfterRemovale
		default:
			return state;
	}
}