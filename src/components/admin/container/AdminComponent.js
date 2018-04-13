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
        : state.content['english'].home
    let about = state.content[state.content.selectedLanguage].about 
        ? state.content[state.content.selectedLanguage].about
        : state.content['english'].about
    return {
        home:content,
        about:about
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