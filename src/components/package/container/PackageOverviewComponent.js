import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {hashHistory} from 'react-router'
import PackageOverview from '../display/PackageOverview'
import * as adminActions from '../../../redux/actions/adminActions'
import * as packageActions from '../../../redux/actions/packageActions'

function mapStateToProps(state) {
    let content = state.admin[state.admin.selectedLanguage].home 
        ? state.admin[state.admin.selectedLanguage].home
        : state.admin['english'].home
    return {
        home:content,
        packages:state.packageState.packageList,
    }
}

function mapDispatchToProps(dispatch) {
    return {
    	onInputChange(field, value){
            dispatch( adminActions.onInputChange(field, value) )
        },
    }
}

const PackageOverviewComponent = connect( mapStateToProps, mapDispatchToProps )(PackageOverview)

// PackageOverviewComponent.propTypes = {
// }

export default PackageOverviewComponent

