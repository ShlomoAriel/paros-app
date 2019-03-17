import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router';
import AccommodationPage from '../display/AccommodationPage';


class AccommodationPageComponent extends React.Component{
  render(){
    return <AccommodationPage {...this.props}/>
  }
}
function mapStateToProps(state) {
    let accommodation = state.content[state.content.selectedLanguage].accommodation 
        ? state.content[state.content.selectedLanguage].accommodation
        : state.content[state.content.selectedLanguage].accommodation
    let menuBar = state.content[state.content.selectedLanguage].menuBar 
        ? state.content[state.content.selectedLanguage].menuBar
        : state.content[state.content.selectedLanguage].menuBar
    return {
      accommodation:accommodation,
      menuBar:menuBar
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect( mapStateToProps, mapDispatchToProps )(AccommodationPageComponent)