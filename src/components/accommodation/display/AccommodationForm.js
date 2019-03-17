// import PropTypes from 'prop-types'
import React  from 'react'
import Checkbox from '../../../components/CustomElements/Checkbox/Checkbox'
import {Link} from 'react-router'
import R from 'ramda'
import moment from 'moment'
import image1 from '../../../../public/template/images/img/image61).jpg';
import Field from '../../../components/CustomElements/Field'

const AccommodationForm = ({form,images, fields, updateField, addAccommodation, toggleModal, isModalOpen})=> {
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
                    // <Field {...homeAboutMoreImage}/>
                    // <img src={form.image ? form.image : image1} onClick={toggleModal}/>
                  }
                </div>
              </div>
            <div className="cell-sm-8">
              <div className="text-center offset-top-30">
import image1 from '../../../../public/template/images/img/image61).jpg';
                  <button onClick={()=>addAccommodation(form)} type="submit" className="btn btn-transparent btn-sm">Save</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
	)
}

export default AccommodationForm

