import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router';
import AboutPage from '../display/AboutPage';


class AboutPageComponent extends React.Component{
  render(){
    return <AboutPage {...this.props}/>
  }
}
function mapStateToProps(state) {
    let about = state.content[state.content.selectedLanguage].about 
        ? state.content[state.content.selectedLanguage].about
        : state.content[state.content.selectedLanguage].about
    let menuBar = state.content[state.content.selectedLanguage].menuBar 
        ? state.content[state.content.selectedLanguage].menuBar
        : state.content[state.content.selectedLanguage].menuBar
    return {
      about:about,
      menuBar:menuBar      
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect( mapStateToProps, mapDispatchToProps )(AboutPageComponent)