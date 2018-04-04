import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {hashHistory} from 'react-router'
import PackageForm from '../display/PackageForm'
import moment from 'moment'
import R from 'ramda'
import * as adminActions from '../../../redux/actions/adminActions'
import * as packageActions from '../../../redux/actions/packageActions'

class PackageFormComponent extends React.Component {
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
            { name:'name', placeholder: 'Name', value: this.state.form['name'], onUpdate: this.updateField },
            { name:'description', placeholder: 'Description', value: this.state.form['description'], onUpdate: this.updateField },
            { name:'meals', placeholder: 'Meals', value: this.state.form['meals'], onUpdate: this.updateField },
            { name:'accommodation', placeholder: 'Accomodation', value: this.state.form['accommodation'], onUpdate: this.updateField },
            { name:'price', placeholder: 'Price', value: this.state.form['price'], onUpdate: this.updateField },
            { type:'date-range',startName:'start',endName:'end', name:'dates', placeholder: 'dates', fromValue: this.state.form['start'], toValue: this.state.form['end'], onUpdate: this.updateField },
            // { name: 'equipmentDescription', type: 'input', label: labels.equipmentDescription },
        ];
        return fields;
    }
    render() {
        return (
            <PackageForm 
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
    let form = (param ? state.packageState.packageList.find(o => o._id == param) : {}) || {}
    function importAll(r) {
      return r.keys().map(r)
    }
    let images = importAll(require.context('../../../../public/template/images/img', false, /\.(png|jpe?g|svg)$/));
    images = images.map(image=>{
      return { original:image, thumbnail:image, name: image.substr(image.lastIndexOf('/') + 1 )}
    })
    return {
        form,
        images
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addPackage: (form)=>{
            dispatch(packageActions.savePackageToServer(form))
        }
    }
}

// PackageFormComponent.propTypes = {
// }

export default connect( mapStateToProps, mapDispatchToProps )(PackageFormComponent)

