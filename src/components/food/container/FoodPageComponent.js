import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router';
import FoodPage from '../display/FoodPage';


class FoodPageComponent extends React.Component{
  render(){
    return <FoodPage {...this.props}/>
  }
}
function mapStateToProps(state) {
    let food = state.content[state.content.selectedLanguage].food 
        ? state.content[state.content.selectedLanguage].food
        : state.content[state.content.selectedLanguage].food
    let menuBar = state.content[state.content.selectedLanguage].menuBar 
        ? state.content[state.content.selectedLanguage].menuBar
        : state.content[state.content.selectedLanguage].menuBar
    return {
      food:food,
      menuBar:menuBar
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect( mapStateToProps, mapDispatchToProps )(FoodPageComponent)