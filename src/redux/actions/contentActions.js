var localUrl = "http://localhost:3001"
var remoteUrl = "https://paros-sever.herokuapp.com"
var currentUrl = localUrl   

import * as types from './actionTypes'
import * as http from 'utils/axiosWrapper'
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
        return http.get(currentUrl + '/api/getContents')
        .then ( 
            response => {
                console.log('Success: ' + response)
                dispatch(setContentMap(response.data))
            }
        )
        .catch( 
            error => 
                console.log('error loging in: ' + error)
        )
    }
}

export function saveContentToServer(section, name, content, _id){
    return (dispatch, getState) => {
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
        return http.put(currentUrl + '/api/upsertContent',contentObject)
        .then ( 
            response => {
                // dispatch(getContentFromServer())
                console.log('Success: ' + response)
            }
        )
        .catch( 
            error => 
                console.log('error loging in: ' + error)
        )
    }
}

export function updaeContent(id, content){
    return (dispatch, getState) => {
        let form = getState().content.form
        return http.put(currentUrl + '/api/deleteContent/'+id, content)
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
        return http.remove(currentUrl + '/api/deleteContent/'+id)
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