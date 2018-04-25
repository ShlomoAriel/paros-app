export function onInputChange(field, value){
	return { type: 'UPDATE_INPUT', field:field, value:value };
}

export function toggleLoader(value){
	return { type: 'TOGGLE_LOADER', value:value };
}
