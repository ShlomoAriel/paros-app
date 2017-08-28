// import PropTypes from 'prop-types'
import React  from 'react'
import {Link} from 'react-router'
import * as adminActions from '../../../actions/adminActions'
import TextInput from '../../../components/CustomElements/TextInput/TextInput'
import TextAreaInput from '../../../components/CustomElements/TextAreaInput/TextAreaInput'

const Admin = ({homeContent,onInputChange, setLanguage})=> {
    const homeWelcomeTitle = { fieldClass:'form-control',field: 'welcomeTitle', name:'welcomeText', placeholder: 'Welcome Text', value: homeContent.welcomeTitle, onUpdate: onInputChange }
    const homeWelcomeContent = { fieldClass:'form-control',field: 'welcomeText', name:'welcomeText', placeholder: 'Welcome Text', value: homeContent.welcomeText, onUpdate: onInputChange }
    const homeAboutCardYoga = { fieldClass:'form-control',field: 'homeAboutYoga', name:'homeAboutYoga', placeholder: '', value: homeContent.homeAboutYoga, onUpdate: onInputChange }
    const homeAboutCardFood = { fieldClass:'form-control',field: 'homeAboutFood', name:'homeAboutFood', placeholder: '', value: homeContent.homeAboutFood, onUpdate: onInputChange }
    const homeAboutCardNature = { fieldClass:'form-control',field: 'homeAboutNature', name:'homeAboutNature', placeholder: '', value: homeContent.homeAboutNature, onUpdate: onInputChange }
    const homeAboutCardMore = { fieldClass:'form-control',field: 'homeAboutMore', name:'homeAboutMore', placeholder: '', value: homeContent.homeAboutMore, onUpdate: onInputChange }

	return(
    	<div className="section-sm-top-133 text-center admin">
    		<ul className="list-inline">
	          <li onClick={()=>setLanguage('hebrew')}><a>עברית</a></li>
	          <li onClick={()=>setLanguage('english')}><a>English</a></li>
	        </ul>
          	<div className="shell">
          		<h3>ברוכים הבאים</h3>
	          	<div className="range">
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">כותרת:</label>
	                    <TextInput {...homeWelcomeTitle}/>	
	                  </div>
	                </div>
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">תוכן:</label>
	    	 			<TextAreaInput {...homeWelcomeContent}/>
	                  </div>
	                </div>
	            </div>
            </div>
            <div className="shell">
          		<h3>בית - אודות</h3>
	          	<div className="range">
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">יוגה:</label>
	    	 			<TextAreaInput {...homeAboutCardYoga}/>
	                  </div>
	                </div>
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">אוכל:</label>
	    	 			<TextAreaInput {...homeAboutCardFood}/>
	                  </div>
	                </div>
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">טבע:</label>
	    	 			<TextAreaInput {...homeAboutCardNature}/>
	                  </div>
	                </div>
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">עוד:</label>
	    	 			<TextAreaInput {...homeAboutCardMore}/>
	                  </div>
	                </div>
	            </div>
            </div>
        </div>
	)
}

export default Admin

