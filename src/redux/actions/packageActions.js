import * as config from '../../utils/config'
import * as http from '../../utils/axiosWrapper'
import * as types from './actionTypes'

export function onInputChange(field, value, id){
	return { type: 'UPDATE_PACKAGE_INPUT', 
			field:field, 
			value:value, 
			id:id };
}
export function toggleSelectedProduct(packageId, productId){
	return { type: 'TOGGLE_SELECTED_PRODUCT',
					packageId:packageId,
					productId:productId 
				};
}

export function setPackageList(packageList){
    return {
        type: 'SET_PACKAGE_LIST',
        packageList: packageList
    }
}

export function getPackagesFromServer(){
    return (dispatch, getState) => {
        dispatch({type: types.TOGGLE_LOADER, value: true})
        return http.get(config.currentUrl + '/api/getPackages')
        .then ( 
            response => {
                console.log('Success: ' + response)
                dispatch(setPackageList(response.data))
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

export function savePackageToServer(item){
    return (dispatch, getState) => {
        // let language = getState().content.selectedLanguage
        // item.language = language
        dispatch({type: types.TOGGLE_LOADER, value: true})
        return http.put(config.currentUrl + '/api/upsertPackage',item)
        .then ( 
            response => {
                dispatch({type: types.TOGGLE_LOADER, value: false})
                dispatch(addPackage(response.data))
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

export function removePackage(id){
    return (dispatch, getState) => {
                dispatch({type: types.TOGGLE_LOADER, value: true})
        return http.remove(config.currentUrl + '/api/deletePackage/'+id)
        .then ( 
            response => {
                dispatch(getPackagesFromServer())
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

export function addPackage(item){
	return {
		type: 'ADD_PACKAGE',
		item:item
	}
}