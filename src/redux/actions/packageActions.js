import * as config from '../../utils/config'
import * as http from '../../utils/axiosWrapper'

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
        return http.get(config.currentUrl + '/api/getPackages')
        .then ( 
            response => {
                console.log('Success: ' + response)
                dispatch(setPackageList(response.data))
            }
        )
        .catch( 
            error => 
                console.log('error loging in: ' + error)
        )
    }
}

export function savePackageToServer(item){
    return (dispatch, getState) => {
        return http.put(config.currentUrl + '/api/upsertPackage',item)
        .then ( 
            response => {
                dispatch(addPackage(response.data))
                console.log('Success: ' + response)
            }
        )
        .catch( 
            error => 
                console.log('error loging in: ' + error)
        )
    }
}

export function addPackage(item){
	return {
		type: 'ADD_PACKAGE',
		item:item
	}
}