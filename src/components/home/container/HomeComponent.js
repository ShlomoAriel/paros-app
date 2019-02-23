import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {hashHistory} from 'react-router'
import Home from '../display/Home'
// import * as homeActions from '../../../redux/actions/homeActions'

function mapStateToProps(state) {
	let content = state.content[state.content.selectedLanguage].home
        ? state.content[state.content.selectedLanguage].home
        : state.content[state.content.selectedLanguage].home
    let menuBar = state.content[state.content.selectedLanguage].menuBar 
        ? state.content[state.content.selectedLanguage].menuBar
        : state.content[state.content.selectedLanguage].menuBar
    let labels = state.content[state.content.selectedLanguage].labels 
        ? state.content[state.content.selectedLanguage].labels
        : state.content[state.content.selectedLanguage].labels
    let packages = state.packageState.packageList.filter( item => item.language == state.content.selectedLanguage)
    return {
        packages:packages,
        menuBar:menuBar,
        labels:labels,
    	home: content
    }
}

function mapDispatchToProps(dispatch) {
    return {
    	onInputChange(field, value){
            // dispatch( homeActions.onInputChange(field, value) )
        },
    }
}

const HomeComponent = connect( mapStateToProps, mapDispatchToProps )(Home)

HomeComponent.propTypes = {
}

export default HomeComponent

