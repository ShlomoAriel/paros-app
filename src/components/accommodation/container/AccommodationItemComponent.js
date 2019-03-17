import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {hashHistory} from 'react-router'
import AccommodationItem from '../display/AccommodationItem'
import * as adminActions from '../../../redux/actions/adminActions'
import * as accommodationActions from '../../../redux/actions/accommodationActions'
import * as productActions from '../../../redux/actions/productActions'
import R from 'ramda'
function mapStateToProps(state, ownProps) {
    let param = ownProps.location.pathname.split('/').pop()
    let accommodationContent = state.accommodation.list.find( item => item._id == param)
    return {
        accommodationContent: accommodationContent,
        isAdmin: state.login.isAdmin,
    }
}

function mapDispatchToProps(dispatch) {
    return {
    	handleImageLoad(event) {
    		console.log('Image loaded ', event.target)
    	}
    }
}

const AccommodationItemComponent = connect( mapStateToProps, mapDispatchToProps )(AccommodationItem)

// AccommodationItemComponent.propTypes = {
// }

export default AccommodationItemComponent

