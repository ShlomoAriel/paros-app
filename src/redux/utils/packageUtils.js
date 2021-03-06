import R from 'ramda'

export function editPackage(state, field, value, id){
	let newState = R.clone(state)
	let newPackage = R.find(R.propEq('id', id))(newState.list)
	newPackage[field] = value
	return newState
}

export function removePackage(state, id){
	let newState = R.clone(state)
	let packageToRemove = R.find(R.propEq('_id', id))(newState.packageList)
	newState.packageList = R.without([packageToRemove], newState.packageList)
	return newState
}

export function toggleListById(list, packageId, productId){
	let newList = R.clone(list)
	let newPackage = R.find(R.propEq('id', packageId))(newList)
    newPackage.products = R.contains(productId,newPackage.products) ? R.without([productId],newPackage.products) : R.append(productId, newPackage.products)
	return newList
}