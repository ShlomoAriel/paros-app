import * as config from '../../utils/config'
import * as types from './actionTypes'
import * as http from '../../utils/axiosWrapper'
import axios from 'axios'
import R from 'ramda'
export function onInputChange(section, field, value){
    return {
        type: types.UPDATE_CONTENT_FIELD,
        section: section, 
        field: field, 
        value: value
    }
}

export function setLanguage(language){
    return { type: 'SET_LANGUAGE', language:language };
}

export function setContentMap(contentMap){
    return {
        type: types.SET_CONTENT_MAP,
        contentMap: contentMap
    }
}

export function getContentFromServer(){
    return (dispatch, getState) => {
        dispatch({type: types.TOGGLE_LOADER, value: true})
        return http.get(config.currentUrl + '/api/getContents')
        .then ( 
            response => {
                console.log('Success: ' + response)
                dispatch({type: types.TOGGLE_LOADER, value: false})
                dispatch(setContentMap(response.data))
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

export function saveContentToServer(section, name, content, _id){
    return (dispatch, getState) => {
        dispatch({type: types.TOGGLE_LOADER, value: true})
        let language = getState().content.selectedLanguage
        let contentObject = {
            _id:_id,
            section:section,
            name:name,
            content:content,
            language:language,
            dateCreated: Date(),
            dateModified: Date(),
        }
        return http.put(config.currentUrl + '/api/upsertContent',contentObject)
        .then ( 
            response => {
                dispatch(getContentFromServer())
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

export function updaeContent(id, content){
    return (dispatch, getState) => {
        let form = getState().content.form
        return http.put(config.currentUrl + '/api/deleteContent/'+id, content)
        .then (
            response => {
                dispatch(getContentFromServer())
                console.log('Success: ' + response)
            }
        )
        .catch( 
            error => 
                console.log('error loging in: ' + error)
        )
    }
}

export function removeContent(id){
    return (dispatch, getState) => {
        let form = getState().content.form
        const jwt = localStorage.getItem('token');
        return http.remove(config.currentUrl + '/api/deleteContent/'+id)
        .then ( 
            response => {
                dispatch(getContentFromServer())
                console.log('Success: ' + response)
            }
        )
        .catch( 
            error => 
                console.log('error loging in: ' + error)
        )
    }
}