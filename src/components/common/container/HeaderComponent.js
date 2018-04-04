import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {hashHistory} from 'react-router'
import Header from '../display/Header'
import * as contentActions from '../../../redux/actions/contentActions'

function mapStateToProps(state) {
	let content = state.admin[state.admin.selectedLanguage].home 
        ? state.admin[state.admin.selectedLanguage].home
        : state.admin['english'].home

    let menuBar = state.admin[state.admin.selectedLanguage].menuBar 
        ? state.admin[state.admin.selectedLanguage].menuBar
        : state.admin['english'].menuBar
    return {
    	home:content,
    	menuBar:menuBar
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setLanguage(language){
            dispatch( contentActions.setLanguage(language) )
        },
    }
}

const HeaderComponent = connect( mapStateToProps, mapDispatchToProps )(Header)

// HeaderComponent.propTypes = {
// }

export default HeaderComponent

