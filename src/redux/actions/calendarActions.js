export function updateInputField(field, value, id){
	return { type: 'UPDATE_CALENDAR_INPUT', 
			field:field, 
			value:value, 
			id:id };
}

export function saveEvent(){
	return { type: 'SAVE_EVENT'}
}

export function addEvent(){
    return (dispatch, getState) => {
        let form = getState().calendar.form
        // return http.post('https://paros-sever.herokuapp.com/api/addTrainee',form)
        // .then ( 
        //     response => {
        //         dispatch(getTraineeList())
        //         console.log('Success: ' + response)
        //     }
        // )
        // .catch( 
        //     error => 
        //         console.log('error loging in: ' + error)
        // )
        dispatch(saveEvent())
    }
}