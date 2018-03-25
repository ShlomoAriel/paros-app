// import PropTypes from 'prop-types'
import React  from 'react'
import Checkbox from '../../../components/CustomElements/Checkbox/Checkbox'
import {Link} from 'react-router'
import TextInput from 'components/CustomElements/TextInput/TextInput'
import R from 'ramda'
import moment from 'moment'
import image1 from 'images/gallery_list-1.jpg';
import DateRangePicker from 'components/CustomElements/DateRangePicker/DateRangePicker'
import Field from 'components/CustomElements/Field'

const PackageForm = ({form,images, fields, onInputChange, addPackage})=> {
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
            {images.map(image =>
               <div className="cell-sm-8" key={image.name}>
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label"></label>
                  {
                    <div className="cell-md-4"><img src= { image.name ? require('images/img' + image.name) : image1} alt="" width="370" height="286"/></div>
                  }
                </div>
              </div>
            )}
            <div className="cell-sm-8">
              <div className="text-center offset-top-30">
                  <button onClick={()=>addPackage(form)} type="submit" className="btn btn-transparent btn-sm">Add</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
	)
}

export default PackageForm

