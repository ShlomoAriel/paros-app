import React from 'react'
import {connect} from 'react-redux'
import ImagePicker from '../display/ImagePicker'
import * as adminActions from '../../../redux/actions/adminActions'

class ImagePickerComponent extends React.Component {
    constructor(props) {
        super(props)
        this.setImage = this.setImage.bind(this)
    }

    state = {
    	image:undefined
    }

    componentWillMount() {
    }

    setImage(name, value) {}
    render() {
        return (
            <ImagePicker 
                {...this.props}
                {...this.state}
                // setImage={this.setImage}
            />
        )
    }
}

function mapStateToProps(state){
	function importAll(r) {
      return r.keys().map(r)
    }
    let images = importAll(require.context('../../../images/img', false, /\.(png|jpe?g|svg)$/));
	return{
		images,
	}
}

function mapDispatchToProps(dispatch){
	return{
        // setImagePickerSelection(image){
        //     dispatch( adminActions.setImagePickerSelection(image) )
        // },
	}
}

export default connect (mapStateToProps,mapDispatchToProps)(ImagePickerComponent)