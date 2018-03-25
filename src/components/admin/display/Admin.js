// import PropTypes from 'prop-types'
import React  from 'react'
import {Link} from 'react-router'
import * as adminActions from '../../../redux/actions/adminActions'
import Field from '../../../components/CustomElements/Field'
// import TextAreaInput from '../../../components/CustomElements/TextAreaInput/TextAreaInput'

const Admin = ({home, about, onInputChange, setLanguage, save})=> {
    const homeWelcomeTitle = { fieldClass:'form-control', section:'home', field: 'welcomeTitle', name:'welcomeTitle', placeholder: 'Welcome Text', value: home.welcomeTitle.value, onUpdate: onInputChange }
    const homeWelcomeContent = {type:'text-area', fieldClass:'form-control', section:'home',field: 'welcomeText', name:'welcomeText', placeholder: 'Welcome Text', value: home.welcomeText.value, onUpdate: onInputChange }
    const homeAboutCardYoga = {type:'text-area', fieldClass:'form-control', section:'home',field: 'homeAboutYoga', name:'homeAboutYoga', placeholder: '', value: home.homeAboutYoga.value, onUpdate: onInputChange }
    const homeAboutCardFood = {type:'text-area', fieldClass:'form-control', section:'home',field: 'homeAboutFood', name:'homeAboutFood', placeholder: '', value: home.homeAboutFood.value, onUpdate: onInputChange }
    const homeAboutCardNature = {type:'text-area', fieldClass:'form-control', section:'home',field: 'homeAboutNature', name:'homeAboutNature', placeholder: '', value: home.homeAboutNature.value, onUpdate: onInputChange }
    const homeAboutCardMore = {type:'text-area', fieldClass:'form-control', section:'home',field: 'homeAboutMore', name:'homeAboutMore', placeholder: '', value: home.homeAboutMore.value, onUpdate: onInputChange }
    const aboutUsTitle = { fieldClass:'form-control', section:'about',field: 'aboutTitle', name:'aboutTitle', placeholder: '', value: about.aboutTitle.value, onUpdate: onInputChange }
    const aboutUsMainDescription = {type:'text-area', fieldClass:'form-control', section:'about', field: 'mainDescription', name:'mainDescription', placeholder: '', value: about.mainDescription.value, onUpdate: onInputChange }

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
	                    <Field {...homeWelcomeTitle}/>	
	                  </div>
	                  <div className="button-holder">
	                  	<button onClick={()=>save(homeWelcomeTitle.section,homeWelcomeTitle.name,homeWelcomeTitle.value, home.welcomeTitle._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">תוכן:</label>
	    	 			<Field {...homeWelcomeContent}/>
	                  </div>
	                  <div className="button-holder">
	                  	<button onClick={()=>save(homeWelcomeContent.section,homeWelcomeContent.name,homeWelcomeContent.value, homeWelcomeContent._id)} className="fa fa-arrow-circle-o-right login-button"></button>
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
	    	 			<Field {...homeAboutCardYoga}/>
	                  </div>
	                  <div className="button-holder">
	                  	<button onClick={()=>save(homeAboutCardYoga.section,homeAboutCardYoga.name,homeAboutCardYoga.value, homeAboutCardYoga._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">אוכל:</label>
	    	 			<Field {...homeAboutCardFood}/>
	                  </div>
	                  <div className="button-holder">
	                  	<button onClick={()=>save(homeAboutCardFood.section,homeAboutCardFood.name,homeAboutCardFood.value, homeAboutCardFood._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">טבע:</label>
	    	 			<Field {...homeAboutCardNature}/>
	                  </div>
	                  <div className="button-holder">
	                  	<button onClick={()=>save(homeAboutCardNature.section,homeAboutCardNature.name,homeAboutCardNature.value, homeAboutCardNature._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">עוד:</label>
	    	 			<Field {...homeAboutCardMore}/>
	                  </div>
	                  <div className="button-holder">
	                  	<button onClick={()=>save(homeAboutCardMore.section,homeAboutCardMore.name,homeAboutCardMore.value, homeAboutCardMore._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	            </div>
            </div>
            <div className="shell">
          		<h3>אודות</h3>
	          	<div className="range">
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">יוגה:</label>
	    	 			<Field {...aboutUsTitle}/>
	                  </div>
	                  <div className="button-holder">
	                  	<button onClick={()=>save(aboutUsTitle.section,aboutUsTitle.name,aboutUsTitle.value, aboutUsTitle._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">אוכל:</label>
	    	 			<Field {...aboutUsMainDescription}/>
	                  </div>
	                  <div className="button-holder">
	                  	<button onClick={()=>save(aboutUsMainDescription.section,aboutUsMainDescription.name,aboutUsMainDescription.value, aboutUsMainDescription._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	            </div>
            </div>
        </div>
	)
}

export default Admin

