import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {hashHistory} from 'react-router'
import PackageOverview from '../display/PackageOverview'
import * as adminActions from '../../../redux/actions/adminActions'
import * as packageActions from '../../../redux/actions/packageActions'

function mapStateToProps(state) {
    let content = state.content[state.content.selectedLanguage].home 
        ? state.content[state.content.selectedLanguage].home
        : state.content[state.content.selectedLanguage].home
    let menuBar = state.content[state.content.selectedLanguage].menuBar 
        ? state.content[state.content.selectedLanguage].menuBar
        : state.content[state.content.selectedLanguage].menuBar
    let packages = state.packageState.packageList.filter( item => item.language == state.content.selectedLanguage)
    return {
        home:content,
        isAdmin: state.login.isAdmin,
        packages:packages,
        menuBar:menuBar
    }
}

function mapDispatchToProps(dispatch) {
    return {
    	onInputChange(field, value){
            dispatch( adminActions.onInputChange(field, value) )
        },
        removeItem:(id)=>{
            dispatch( packageActions.removePackage(id) )
        }
    }
}

const PackageOverviewComponent = connect( mapStateToProps, mapDispatchToProps )(PackageOverview)

// PackageOverviewComponent.propTypes = {
// }

export default PackageOverviewComponent

