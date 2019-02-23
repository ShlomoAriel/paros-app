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
			let packageList = R.clone(state.packageList)
			if(action.item.id){
				let foundIndex = packageList.findIndex( packageListItem => packageListItem.id === action.item.id)
				packageList[foundIndex] = action.item;
			} else{
				packageList.push(action.item)
			}
			return {...state.packageList, packageList: packageList}
		case types.TOGGLE_SELECTED_PRODUCT:
			let newList = packageUtils.toggleListById(state.list, action.packageId, action.productId)
			return R.assoc('list', newList, state)
		case types.SET_PACKAGE_LIST:
			return {...state, packageList: action.packageList}
		case types.REMOVE_PACKAGE_FROM_LIST:
			let stateAfterRemovale = packageUtils.removePackage(state, action.id)
			return stateAfterRemovale
		default:
			return state;
	}
}