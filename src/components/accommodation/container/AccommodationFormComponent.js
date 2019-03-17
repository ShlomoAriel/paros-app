import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {hashHistory} from 'react-router'
import AccommodationForm from '../display/AccommodationForm'
import moment from 'moment'
import R from 'ramda'
import * as adminActions from '../../../redux/actions/adminActions'
import * as accommodationActions from '../../../redux/actions/accommodationActions'

class AccommodationFormComponent extends React.Component {
    constructor(props) {
        super(props)
        this.updateField = this.updateField.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
    }

    state = {
        isModalOpen:false
    }

    componentWillMount() {
        let form = this.props.form
        if(form && form.start){
            form.start = moment(form.start)
        }
        if(form && form.end){
            form.end = moment(form.end)
        }
        this.state.form = this.props.form
    }
    toggleModal(){
        this.setState({isModalOpen:!this.state.isModalOpen})
    }
    updateField(name, value) {
        let form = {...this.state.form}
        form[name] = value
        this.setState({form});
    }
    getFields() {
        let fields = [
            { name:'name', placeholder: 'שם', value: this.state.form['name'], onUpdate: this.updateField },
            { name:'images', placeholder: 'תיקיה', value: this.state.form['images'], onUpdate: this.updateField },
            { name:'description', placeholder: 'תיאור', value: this.state.form['description'], onUpdate: this.updateField },
            { type:'select',name:'language',options:[{label:'english', value:'english'},{label:'עברית', value:'hebrew'},{label:'french', value:'french'}], placeholder: 'language', value: this.state.form['language'], onSelect: this.updateField },
            {type:'image-picker', images:this.props.images, fieldClass:'form-control', field: 'image', name:'image', placeholder: '', value: this.state.form['image'], onUpdate: this.updateField },
            // { type:'date-range',startName:'start',endName:'end', name:'dates', placeholder: 'תאריכים', fromValue: this.state.form['start'], toValue: this.state.form['end'], onUpdate: this.updateField },
            // { name: 'equipmentDescription', type: 'input', label: labels.equipmentDescription },
        ];
        return fields;
    }
    render() {
        return (
            <AccommodationForm 
                {...this.props}
                {...this.state}
                fields={this.getFields()}
                updateField={this.updateField}
                toggleModal={this.toggleModal}
            />
        )
    }
}

function mapStateToProps(state, ownProps) {
    let param = ownProps.location.pathname.split('/').pop()
    let form = (param ? state.accommodation.list.find(o => o._id == param) : {}) || {}
    function importAll(r) {
      return r.keys().map(r)
    }
    // let images = importAll(require.context('../../../images/img', false, /\.(png|jpe?g|svg)$/));
    let images = importAll(require.context('../../../../public/template/images/img', false, /\.(png|jpe?g|svg|PNG)$/));
    return {
        form,
        images
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addAccommodation: (form)=>{
            dispatch(accommodationActions.saveAccommodationToServer(form)).then(i=>{
               hashHistory.push('/accommodation')
            })
        }
    }
}

// AccommodationFormComponent.propTypes = {
// }

export default connect( mapStateToProps, mapDispatchToProps )(AccommodationFormComponent)

