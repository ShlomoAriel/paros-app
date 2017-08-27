import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {hashHistory} from 'react-router'
import Admin from '../display/Admin'
import * as adminActions from '../../../actions/adminActions'

function mapStateToProps(state) {
    return {
    	homeObject:state.admin.homeObject
    }
}

function mapDispatchToProps(dispatch) {
    return {
    	onInputChange(field, value){
            // dispatch( adminActions.onInputChange(field, value) )
        },
    	// onUpdate(field, value, type){    
    	// 	dispatch( updateFilterUI(ownProps.view, field, value == '' ? undefined : value) )
     //        if(type && type == 'date-range')
     //            dispatch( updateDateFilter(ownProps.view, field) )
    	// },
     //    onSelect(field, value, type){
     //        dispatch( updateFilter(ownProps.view, field, value == '' ? undefined : value) )
     //    },
    }
}

const AdminComponent = connect( mapStateToProps, mapDispatchToProps )(Admin)

// AdminComponent.propTypes = {
// }

export default AdminComponent

