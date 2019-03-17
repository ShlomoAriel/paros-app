import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {hashHistory} from 'react-router'
import AccommodationOverview from '../display/AccommodationOverview'
import * as adminActions from '../../../redux/actions/adminActions'
import * as accommodationActions from '../../../redux/actions/accommodationActions'

function mapStateToProps(state) {
    let content = state.content[state.content.selectedLanguage].home 
        ? state.content[state.content.selectedLanguage].home
        : state.content[state.content.selectedLanguage].home
    let menuBar = state.content[state.content.selectedLanguage].menuBar 
        ? state.content[state.content.selectedLanguage].menuBar
        : state.content[state.content.selectedLanguage].menuBar
    let accommodations = state.accommodation.list.filter( item => item.language == state.content.selectedLanguage)
    return {
        home:content,
        isAdmin: state.login.isAdmin,
        accommodations:accommodations,
        menuBar:menuBar
    }
}

function mapDispatchToProps(dispatch) {
    return {
    	onInputChange(field, value){
            dispatch( adminActions.onInputChange(field, value) )
        },
        removeItem:(id)=>{
            dispatch( accommodationActions.removeAccommodation(id) )
        }
    }
}

const AccommodationOverviewComponent = connect( mapStateToProps, mapDispatchToProps )(AccommodationOverview)

// AccommodationOverviewComponent.propTypes = {
// }

export default AccommodationOverviewComponent

