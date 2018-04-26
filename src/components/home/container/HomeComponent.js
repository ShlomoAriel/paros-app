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
        : state.content['english'].home
    let menuBar = state.content[state.content.selectedLanguage].menuBar 
        ? state.content[state.content.selectedLanguage].menuBar
        : state.content['english'].menuBar
    return {
        packages:state.packageState.packageList,
        menuBar:menuBar,
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

