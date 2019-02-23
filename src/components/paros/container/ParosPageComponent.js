import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router';
import ParosPage from '../display/ParosPage';


class ParosPageComponent extends React.Component{
  render(){
    return <ParosPage {...this.props}/>
  }
}
function mapStateToProps(state) {
    let paros = state.content[state.content.selectedLanguage].paros 
        ? state.content[state.content.selectedLanguage].paros
        : state.content[state.content.selectedLanguage].paros
    let menuBar = state.content[state.content.selectedLanguage].menuBar 
        ? state.content[state.content.selectedLanguage].menuBar
        : state.content[state.content.selectedLanguage].menuBar
    return {
      paros:paros,
      menuBar:menuBar
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect( mapStateToProps, mapDispatchToProps )(ParosPageComponent)