import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router';
import YogaPage from '../display/YogaPage';


class YogaPageComponent extends React.Component{
  render(){
    return <YogaPage {...this.props}/>
  }
}
function mapStateToProps(state) {
    let yoga = state.content[state.content.selectedLanguage].yoga 
        ? state.content[state.content.selectedLanguage].yoga
        : state.content[state.content.selectedLanguage].yoga
    let menuBar = state.content[state.content.selectedLanguage].menuBar 
        ? state.content[state.content.selectedLanguage].menuBar
        : state.content[state.content.selectedLanguage].menuBar
    return {
      yoga:yoga,
      menuBar:menuBar
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect( mapStateToProps, mapDispatchToProps )(YogaPageComponent)