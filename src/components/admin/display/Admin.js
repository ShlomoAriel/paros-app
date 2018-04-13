// import PropTypes from 'prop-types'
import React  from 'react'
import {Link} from 'react-router'
import * as adminActions from '../../../redux/actions/adminActions'
import Field from '../../../components/CustomElements/Field'
import image1 from '../../../images/gallery_list-1.jpg'

const Admin = ({home, about, onInputChange, setLanguage, save })=> {
		function importAll(r) {
	      return r.keys().map(r)
	    }
	    let images = importAll(require.context('../../../images/img', false, /\.(png|jpe?g|svg)$/));
    const homeWelcomeTitle = { fieldClass:'form-control', section:'home', field: 'welcomeTitle', name:'welcomeTitle', placeholder: 'Welcome Text', value: home.welcomeTitle.value, onUpdate: onInputChange }
    const homeWelcomeContent = {type:'text-area', fieldClass:'form-control', section:'home',field: 'welcomeText', name:'welcomeText', placeholder: 'Welcome Text', value: home.welcomeText.value, onUpdate: onInputChange }
    const homeAboutCardYoga = {type:'text-area', fieldClass:'form-control', section:'home',field: 'homeAboutYoga', name:'homeAboutYoga', placeholder: '', value: home.homeAboutYoga.value, onUpdate: onInputChange }
    const homeAboutCardFood = {type:'text-area', fieldClass:'form-control', section:'home',field: 'homeAboutFood', name:'homeAboutFood', placeholder: '', value: home.homeAboutFood.value, onUpdate: onInputChange }
    const homeAboutCardNature = {type:'text-area', fieldClass:'form-control', section:'home',field: 'homeAboutNature', name:'homeAboutNature', placeholder: '', value: home.homeAboutNature.value, onUpdate: onInputChange }
    const homeAboutCardMore = {type:'text-area', fieldClass:'form-control', section:'home',field: 'homeAboutMore', name:'homeAboutMore', placeholder: '', value: home.homeAboutMore.value, onUpdate: onInputChange }
    const aboutUsTitle = { fieldClass:'form-control', section:'about',field: 'aboutTitle', name:'aboutTitle', placeholder: '', value: about.aboutTitle.value, onUpdate: onInputChange }
    const aboutUsMainDescription = {type:'text-area', fieldClass:'form-control', section:'about', field: 'mainDescription', name:'mainDescription', placeholder: '', value: about.mainDescription.value, onUpdate: onInputChange }
    const aboutImage = {type:'image-picker', images:images, fieldClass:'form-control', section:'about', field: 'aboutImage', name:'aboutImage', placeholder: '', value: about.aboutImage.value, onUpdate: onInputChange }
    const homeAboutYogaImage = {type:'image-picker', images:images, fieldClass:'form-control', section:'home', field: 'homeAboutYogaImage', name:'homeAboutYogaImage', placeholder: '', value: home.homeAboutYogaImage.value, onUpdate: onInputChange }
    const homeAboutFoodImage = {type:'image-picker', images:images, fieldClass:'form-control', section:'home', field: 'homeAboutFoodImage', name:'homeAboutFoodImage', placeholder: '', value: home.homeAboutFoodImage.value, onUpdate: onInputChange }
    const homeAboutNatureImage = {type:'image-picker', images:images, fieldClass:'form-control', section:'home', field: 'homeAboutNatureImage', name:'homeAboutNatureImage', placeholder: '', value: home.homeAboutNatureImage.value, onUpdate: onInputChange }
    const homeAboutMoreImage = {type:'image-picker', images:images, fieldClass:'form-control', section:'home', field: 'homeAboutMoreImage', name:'homeAboutMoreImage', placeholder: '', value: home.homeAboutMoreImage.value, onUpdate: onInputChange }

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
	                  	<button onClick={()=>save(homeWelcomeTitle.section,homeWelcomeTitle.name,homeWelcomeTitle.value, home.welcomeTitle._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">תוכן:</label>
	    	 			<Field {...homeWelcomeContent}/>
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
	                  	<button onClick={()=>save(homeAboutCardYoga.section,homeAboutCardYoga.name,homeAboutCardYoga.value, homeAboutCardYoga._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                  <div className="form-group">
	    	 			<Field {...homeAboutYogaImage}/>
	                  	<button onClick={()=>save(homeAboutYogaImage.section,homeAboutYogaImage.name,homeAboutYogaImage.value, homeAboutYogaImage._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>

	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">אוכל:</label>
	    	 			<Field {...homeAboutCardFood}/>
	                  	<button onClick={()=>save(homeAboutCardFood.section,homeAboutCardFood.name,homeAboutCardFood.value, homeAboutCardFood._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                  <div className="form-group">
	    	 			<Field {...homeAboutFoodImage}/>
	                  	<button onClick={()=>save(homeAboutFoodImage.section,homeAboutFoodImage.name,homeAboutFoodImage.value, homeAboutFoodImage._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>

	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">טבע:</label>
	    	 			<Field {...homeAboutCardNature}/>
	                  	<button onClick={()=>save(homeAboutCardNature.section,homeAboutCardNature.name,homeAboutCardNature.value, homeAboutCardNature._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                  <div className="form-group">
	    	 			<Field {...homeAboutNatureImage}/>
	                  	<button onClick={()=>save(homeAboutNatureImage.section,homeAboutNatureImage.name,homeAboutNatureImage.value, homeAboutNatureImage._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>

	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">עוד:</label>
	    	 			<Field {...homeAboutCardMore}/>
	                  	<button onClick={()=>save(homeAboutCardMore.section,homeAboutCardMore.name,homeAboutCardMore.value, homeAboutCardMore._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                  <div className="form-group">
	    	 			<Field {...homeAboutMoreImage}/>
	                  	<button onClick={()=>save(homeAboutMoreImage.section,homeAboutMoreImage.name,homeAboutMoreImage.value, homeAboutMoreImage._id)} className="fa fa-arrow-circle-o-right login-button"></button>
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
	    	 			<Field {...aboutImage}/>
	                  	<button onClick={()=>save(aboutImage.section,aboutImage.name,aboutImage.value, aboutImage._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">יוגה:</label>
	    	 			<Field {...aboutUsTitle}/>
	                  	<button onClick={()=>save(aboutUsTitle.section,aboutUsTitle.name,aboutUsTitle.value, aboutUsTitle._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">אוכל:</label>
	    	 			<Field {...aboutUsMainDescription}/>
	                  	<button onClick={()=>save(aboutUsMainDescription.section,aboutUsMainDescription.name,aboutUsMainDescription.value, aboutUsMainDescription._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	            </div>
            </div>
        </div>
	)
}

export default Admin

