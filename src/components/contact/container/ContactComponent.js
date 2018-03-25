import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {hashHistory} from 'react-router'
import Contact from '../display/Contact'
import * as contactActions from '../../../redux/actions/contactActions'

function mapStateToProps(state) {
    return {
    	contactForm:state.contact.contactForm
    }
}

function mapDispatchToProps(dispatch) {
    return {
    	onInputChange(field, value){
            dispatch( contactActions.onInputChange(field, value) )
        },
        sendForm(){
            // dispatch( contactActions.onInputChange(field, value) )
        },
    }
}

const ContactComponent = connect( mapStateToProps, mapDispatchToProps )(Contact)

// ContactComponent.propTypes = {
// }

export default ContactComponent

