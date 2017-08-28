import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {hashHistory} from 'react-router'
import Admin from '../display/Admin'
import * as adminActions from '../../../actions/adminActions'

function mapStateToProps(state) {
    let content = state.admin[state.admin.selectedLanguage].homeContent 
        ? state.admin[state.admin.selectedLanguage].homeContent
        : state.admin['english'].homeContent
    return {
        homeContent:content
    }
}

function mapDispatchToProps(dispatch) {
    return {
    	onInputChange(field, value){
            dispatch( adminActions.onInputChange(field, value) )
        },
        setLanguage(language){
            dispatch( adminActions.setLanguage(language) )
        },
    }
}

const AdminComponent = connect( mapStateToProps, mapDispatchToProps )(Admin)

// AdminComponent.propTypes = {
// }

export default AdminComponent

