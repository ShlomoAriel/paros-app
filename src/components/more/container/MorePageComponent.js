import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router';
import MorePage from '../display/MorePage';


class MorePageComponent extends React.Component{
  render(){
    return <MorePage {...this.props}/>
  }
}
function mapStateToProps(state) {
    let more = state.content[state.content.selectedLanguage].more 
        ? state.content[state.content.selectedLanguage].more
        : state.content[state.content.selectedLanguage].more
    let menuBar = state.content[state.content.selectedLanguage].menuBar 
        ? state.content[state.content.selectedLanguage].menuBar
        : state.content[state.content.selectedLanguage].menuBar
    return {
      more:more,
      menuBar:menuBar
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect( mapStateToProps, mapDispatchToProps )(MorePageComponent)