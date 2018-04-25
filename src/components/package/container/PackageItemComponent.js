import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {hashHistory} from 'react-router'
import PackageItem from '../display/PackageItem'
import * as adminActions from '../../../redux/actions/adminActions'
import * as packageActions from '../../../redux/actions/packageActions'
import * as productActions from '../../../redux/actions/productActions'
import R from 'ramda'
function mapStateToProps(state, ownProps) {
    let param = ownProps.location.pathname.split('/').pop()
    let packageContent = state.packageState.packageList.find( item => item._id == param)
    return {
        packageContent: packageContent,
        isAdmin: state.login.isAdmin,
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

const PackageItemComponent = connect( mapStateToProps, mapDispatchToProps )(PackageItem)

// PackageItemComponent.propTypes = {
// }

export default PackageItemComponent

