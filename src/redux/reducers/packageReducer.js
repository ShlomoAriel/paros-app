import * as types from '../actions/actionTypes'
import * as packageUtils from '../utils/packageUtils'
// import initialState from './initialState'
import R from 'ramda'

const initialState = {
	packageList:[]
}

export default function packageReducer(state = initialState, action){
	switch (action.type){
		case 'UPDATE_PACKAGE_INPUT':
			let newState = packageUtils.editPackage(state, action.field, action.value, action.id)
			return newState
		case types.ADD_PACKAGE:
			let list = R.clone(state.list)
			if(action.item.id){
				let foundIndex = list.findIndex( listItem => listItem.id === action.item.id)
				list[foundIndex] = action.item;
			} else{
				list.push(action.item)
			}
			return {...state.list, list: list}
		case types.TOGGLE_SELECTED_PRODUCT:
			let newList = packageUtils.toggleListById(state.list, action.packageId, action.productId)
			return R.assoc('list', newList, state)
		case types.SET_PACKAGE_LIST:
			return {...state, packageList: action.packageList}
		default:
			return state;
	}
}