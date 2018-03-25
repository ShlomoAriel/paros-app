export function onInputChange(field, value){
	return { type: 'UPDATE_PRODUCT_INPUT', field:field, value:value };
}