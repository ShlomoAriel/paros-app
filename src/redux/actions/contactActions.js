export function onInputChange(field, value){
	return { type: 'UPDATE_CONTACT_INPUT', field:field, value:value };
}