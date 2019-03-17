import * as config from '../../utils/config'
import * as http from '../../utils/axiosWrapper'
import * as types from './actionTypes'

export function onInputChange(field, value, id){
	return { type: 'UPDATE_ACCOMMODATION_INPUT', 
			field:field, 
			value:value, 
			id:id };
}

export function setAccommodationList(list){
    return {
        type: 'SET_ACCOMMODATION_LIST',
        list: list
    }
}

export function removeAccommodationFromList(id){
    return {
        type: 'REMOVE_ACCOMMODATION_FROM_LIST',
        id: id
    }
}

export function getAccommodationsFromServer(){
    return (dispatch, getState) => {
        dispatch({type: types.TOGGLE_LOADER, value: true})
        return http.get(config.currentUrl + '/api/getAccommodations')
        .then ( 
            response => {
                console.log('Success: ' + response)
                dispatch(setAccommodationList(response.data))
                dispatch({type: types.TOGGLE_LOADER, value: false})
            }
        )
        .catch( 
            error => {
                dispatch({type: types.TOGGLE_LOADER, value: false})
                console.log('error loging in: ' + error)
            }
        )
    }
}

export function saveAccommodationToServer(item){
    return (dispatch, getState) => {
        dispatch({type: types.TOGGLE_LOADER, value: true})
        return http.put(config.currentUrl + '/api/upsertAccommodation',item)
        .then ( 
            response => {
                if(item._id){
                    dispatch( removeAccommodationFromList(item._id) )
                }
                dispatch({type: types.TOGGLE_LOADER, value: false})
                dispatch(addAccommodation(response.data))
                console.log('Success: ' + response)
            }
        )
        .catch( 
            error => {
                dispatch({type: types.TOGGLE_LOADER, value: false})
                console.log('error loging in: ' + error)
            }
        )
    }
}

export function removeAccommodation(id){
    return (dispatch, getState) => {
                dispatch({type: types.TOGGLE_LOADER, value: true})
        return http.remove(config.currentUrl + '/api/deleteAccommodation/'+id)
        .then ( 
            response => {
                dispatch(getAccommodationsFromServer())
                dispatch({type: types.TOGGLE_LOADER, value: false})
                console.log('Success: ' + response)
            }
        )
        .catch( 
            error => {
                dispatch({type: types.TOGGLE_LOADER, value: false})
                console.log('error loging in: ' + error)
            }
        )
    }
}

export function addAccommodation(item){
	return {
		type: 'ADD_ACCOMMODATION',
		item:item
	}
}