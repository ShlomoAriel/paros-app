// import PropTypes from 'prop-types'
import React  from 'react'
import Checkbox from '../../../components/CustomElements/Checkbox/Checkbox'
import {Link} from 'react-router'
import R from 'ramda'
import moment from 'moment'
import image1 from '../../../images/gallery_list-1.jpg'
import Field from '../../../components/CustomElements/Field'
import ImagePicker from '../../../components/imagePicker/container/ImagePickerComponent'

const PackageForm = ({form,images, fields, updateField, addPackage, toggleModal, isModalOpen})=> {
	return(
    <div>
      <section className="section-md-top-145 section-sm-bottom-153 section-34">
        <div className="shell">
          <div className="range">
            {fields.map(field =>
               <div className="cell-sm-8" key={field.name}>
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label"></label>
                  {
                    <Field
                      {...field}
                      fieldClass='form-control'
                    />
                  }
                </div>
              </div>
            )}
            <div className="cell-sm-8">
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label"></label>
                  {
                    <img src={form.image ? form.image : image1} onClick={toggleModal}/>
                  }
                </div>
              </div>
            <div className="cell-sm-8">
              <div className="text-center offset-top-30">
                  <button onClick={()=>addPackage(form)} type="submit" className="btn btn-transparent btn-sm">Add</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      { isModalOpen &&
        <div className="form-modal">
          <ImagePicker setImage={(field, value)=>{toggleModal(); updateField(field, value)}}/>
        </div>  
      }
      
    </div>
	)
}

export default PackageForm

