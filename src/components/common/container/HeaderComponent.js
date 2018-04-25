import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {hashHistory} from 'react-router'
import Header from '../display/Header'
import * as contentActions from '../../../redux/actions/contentActions'
import * as loginActions from '../../../redux/actions/loginActions'

class HeaderComponent extends React.Component{
    constructor(props) {
        super(props)
    }
    state={
        menuState:false,
    }
    toggleMenu = () => {
        this.setState({menuState: !this.state.menuState})
    }
    render() {
        return (
            <Header 
                {...this.props}
                {...this.state}
                toggleMenu={this.toggleMenu}
            />
        )
    }
}

function mapStateToProps(state) {
	let content = state.content[state.content.selectedLanguage].home 
        ? state.content[state.content.selectedLanguage].home
        : state.content[state.content.selectedLanguage].home

    let menuBar = state.content[state.content.selectedLanguage].menuBar 
        ? state.content[state.content.selectedLanguage].menuBar
        : state.content[state.content.selectedLanguage].menuBar
    return {
    	home:content,
        authenticated:state.login.authenticated,
    	menuBar:menuBar
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setLanguage(language){
            dispatch( contentActions.setLanguage(language) )
        },
        logout(){
            dispatch( loginActions.logout() )
        }
    }
}
// HeaderComponent.propTypes = {
// }

export default connect( mapStateToProps, mapDispatchToProps )(HeaderComponent)

