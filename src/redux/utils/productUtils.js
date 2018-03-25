import R from 'ramda'

export function toggleListById(list, id){
	let newList = R.clone(list)
    newList = R.contains(id,list) ? R.without(id,newList) : R.append(id, newList)
	return newList
}