import * as types from '../actions/actionTypes'
import initialState from './initialState'
import R from 'ramda'
import * as productUtils from '../utils/productUtils'

export default function productReducer(state = initialState.product, action){
	switch (action.type){
		case types.UPDATE_PRODUCT_INPUT:
			return R.assocPath(['productForm',action.field], action.value,state)
		// case types.TOGGLE_SELECTED_PRODUCT:
		// 	let newList = productUtils.toggleListById(state.selectedProducts, action.productId)
		// 	return R.assoc('selectedProducts', newList, state)
		default: 
			return state;
	}
}