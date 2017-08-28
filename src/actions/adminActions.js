export function onInputChange(field, value){
	return { type: 'UPDATE_INPUT', field:field, value:value };
}
export function setLanguage(language){
	return { type: 'SET_LANGUAGE', language:language };
}