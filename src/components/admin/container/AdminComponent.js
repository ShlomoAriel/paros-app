import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {hashHistory} from 'react-router'
import Admin from '../display/Admin'
import * as adminActions from '../../../redux/actions/adminActions'
import * as contentActions from '../../../redux/actions/contentActions'

class AdminComponent extends React.Component{
    constructor(props) {
        super(props)
    }
    state={
    }

    render() {
        return (
            <Admin 
                {...this.props}
                {...this.state}
            />
        )
    }
}

function mapStateToProps(state) {
    let content = state.content[state.content.selectedLanguage].home 
        ? state.content[state.content.selectedLanguage].home
        : state.content[state.content.selectedLanguage].home
    let about = state.content[state.content.selectedLanguage].about 
        ? state.content[state.content.selectedLanguage].about
        : state.content[state.content.selectedLanguage].about
    let paros = state.content[state.content.selectedLanguage].paros 
        ? state.content[state.content.selectedLanguage].paros
        : state.content[state.content.selectedLanguage].paros
    let yoga = state.content[state.content.selectedLanguage].yoga 
        ? state.content[state.content.selectedLanguage].yoga
        : state.content[state.content.selectedLanguage].yoga
    let food = state.content[state.content.selectedLanguage].food 
        ? state.content[state.content.selectedLanguage].food
        : state.content[state.content.selectedLanguage].food
    let more = state.content[state.content.selectedLanguage].more 
        ? state.content[state.content.selectedLanguage].more
        : state.content[state.content.selectedLanguage].more
    let accommodation = state.content[state.content.selectedLanguage].accommodation 
        ? state.content[state.content.selectedLanguage].accommodation
        : state.content[state.content.selectedLanguage].accommodation
    let menuBar = state.content[state.content.selectedLanguage].menuBar 
        ? state.content[state.content.selectedLanguage].menuBar
        : state.content[state.content.selectedLanguage].menuBar
    return {
        home:content,
        about:about,
        paros:paros,
        yoga:yoga,
        food:food,
        more:more,
        accommodation:accommodation,
        menuBar:menuBar
    }
}

function mapDispatchToProps(dispatch) {
    return {
    	onInputChange(field, value, section){
            dispatch( contentActions.onInputChange(section, field, value) )
        },
        setLanguage(language){
            dispatch( contentActions.setLanguage(language) )
        },
        save(section, name, content, _id){
            dispatch( contentActions.saveContentToServer(section, name, content, _id) )
        },
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(AdminComponent)

// AdminComponent.propTypes = {
// }