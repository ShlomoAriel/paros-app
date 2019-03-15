// import PropTypes from 'prop-types'
import React  from 'react'
import {Link} from 'react-router'
import * as adminActions from '../../../redux/actions/adminActions'
import Field from '../../../components/CustomElements/Field'
import image1 from '../../../images/gallery_list-1.jpg'

const Admin = ({home, about, paros, yoga, food, more, accommodation, menuBar, onInputChange, setLanguage, save })=> {
		function importAll(r) {
	      return r.keys().map(r)
	    }
	    let images = importAll(require.context('../../../images/img', false, /\.(png|jpe?g|svg)$/));
    const homeWelcomeTitle = { fieldClass:'form-control', section:'home', field: 'welcomeTitle', name:'welcomeTitle', placeholder: 'Welcome Text', value: home.welcomeTitle.value, onUpdate: onInputChange }
    const homeWelcomeContent = {type:'text-area', fieldClass:'form-control', section:'home',field: 'welcomeText', name:'welcomeText', placeholder: 'Welcome Text', value: home.welcomeText.value, onUpdate: onInputChange }
    const homeAboutCardYoga = {type:'text-area', fieldClass:'form-control', section:'home',field: 'homeAboutYoga', name:'homeAboutYoga', placeholder: '', value: home.homeAboutYoga.value, onUpdate: onInputChange }
    const homeAboutCardFood = {type:'text-area', fieldClass:'form-control', section:'home',field: 'homeAboutFood', name:'homeAboutFood', placeholder: '', value: home.homeAboutFood.value, onUpdate: onInputChange }
    const homeAboutCardAccommodation = {type:'text-area', fieldClass:'form-control', section:'home',field: 'homeAboutAccommodation', name:'homeAboutAccommodation', placeholder: '', value: home.homeAboutAccommodation.value, onUpdate: onInputChange }
    const homeAboutCardMore = {type:'text-area', fieldClass:'form-control', section:'home',field: 'homeAboutMore', name:'homeAboutMore', placeholder: '', value: home.homeAboutMore.value, onUpdate: onInputChange }
    const parosTitle = { fieldClass:'form-control', section:'paros',field: 'parosTitle', name:'parosTitle', placeholder: '', value: paros.parosTitle.value, onUpdate: onInputChange }
    const parosMainDescription = {type:'text-area', fieldClass:'form-control', section:'paros', field: 'mainDescription', name:'mainDescription', placeholder: '', value: paros.mainDescription.value, onUpdate: onInputChange }
    const parosImage = {type:'image-picker', images:images, fieldClass:'form-control', section:'paros', field: 'parosImage', name:'parosImage', placeholder: '', value: paros.parosImage.value, onUpdate: onInputChange }
    const yogaTitle = { fieldClass:'form-control', section:'yoga',field: 'yogaTitle', name:'yogaTitle', placeholder: '', value: yoga.yogaTitle.value, onUpdate: onInputChange }
	const yogaMainDescription = {type:'text-area', fieldClass:'form-control', section:'yoga', field: 'mainDescription', name:'mainDescription', placeholder: '', value: yoga.mainDescription.value, onUpdate: onInputChange }
	const yogaSecondDescription = {type:'text-area', fieldClass:'form-control', section:'yoga', field: 'secondDescription', name:'secondDescription', placeholder: '', value: yoga.secondDescription.value, onUpdate: onInputChange }
	const yogaThirdDescription = {type:'text-area', fieldClass:'form-control', section:'yoga', field: 'thirdDescription', name:'thirdDescription', placeholder: '', value: yoga.thirdDescription.value, onUpdate: onInputChange }
	const yogaImage = {type:'image-picker', images:images, fieldClass:'form-control', section:'yoga', field: 'yogaImage', name:'yogaImage', placeholder: '', value: yoga.yogaImage.value, onUpdate: onInputChange }
	const yogaImage2 = {type:'image-picker', images:images, fieldClass:'form-control', section:'yoga', field: 'yogaImage2', name:'yogaImage2', placeholder: '', value: yoga.yogaImage2.value, onUpdate: onInputChange }
	const yogaImage3 = {type:'image-picker', images:images, fieldClass:'form-control', section:'food', field: 'yogaImage3', name:'yogaImage3', placeholder: '', value: yoga.yogaImage3.value, onUpdate: onInputChange }
	const foodTitle = { fieldClass:'form-control', section:'food',field: 'foodTitle', name:'foodTitle', placeholder: 'אוכל', value: food.foodTitle.value, onUpdate: onInputChange }
	const foodMainDescription = {type:'text-area', fieldClass:'form-control', section:'food', field: 'mainDescription', name:'mainDescription', placeholder: 'אוכל', value: food.mainDescription.value, onUpdate: onInputChange }
	const foodSecondDescription = {type:'text-area', fieldClass:'form-control', section:'food', field: 'secondDescription', name:'secondDescription', placeholder: 'אוכל', value: food.secondDescription.value, onUpdate: onInputChange }
	const foodThirdDescription = {type:'text-area', fieldClass:'form-control', section:'food', field: 'thirdDescription', name:'thirdDescription', placeholder: 'אוכל', value: food.thirdDescription.value, onUpdate: onInputChange }
	const foodImage = {type:'image-picker', images:images, fieldClass:'form-control', section:'food', field: 'foodImage', name:'foodImage', placeholder: 'אוכל', value: food.foodImage.value, onUpdate: onInputChange }
	const foodImage2 = {type:'image-picker', images:images, fieldClass:'form-control', section:'food', field: 'foodImage2', name:'foodImage2', placeholder: 'אוכל', value: food.foodImage2.value, onUpdate: onInputChange }
	const foodImage3 = {type:'image-picker', images:images, fieldClass:'form-control', section:'food', field: 'foodImage3', name:'foodImage3', placeholder: 'אוכל', value: food.foodImage3.value, onUpdate: onInputChange }
    const moreTitle = { fieldClass:'form-control', section:'more',field: 'moreTitle', name:'moreTitle', placeholder: '', value: more.moreTitle.value, onUpdate: onInputChange }
	const moreMainDescription = {type:'text-area', fieldClass:'form-control', section:'more', field: 'mainDescription', name:'mainDescription', placeholder: '', value: more.mainDescription.value, onUpdate: onInputChange }
	const moreSecondDescription = {type:'text-area', fieldClass:'form-control', section:'more', field: 'secondDescription', name:'secondDescription', placeholder: '', value: more.secondDescription.value, onUpdate: onInputChange }
	const moreThirdDescription = {type:'text-area', fieldClass:'form-control', section:'more', field: 'thirdDescription', name:'thirdDescription', placeholder: '', value: more.thirdDescription.value, onUpdate: onInputChange }
	const moreImage = {type:'image-picker', images:images, fieldClass:'form-control', section:'more', field: 'moreImage', name:'moreImage', placeholder: '', value: more.moreImage.value, onUpdate: onInputChange }
	const moreImage2 = {type:'image-picker', images:images, fieldClass:'form-control', section:'more', field: 'moreImage2', name:'moreImage2', placeholder: '', value: more.moreImage2.value, onUpdate: onInputChange }
	const moreImage3 = {type:'image-picker', images:images, fieldClass:'form-control', section:'more', field: 'moreImage3', name:'moreImage3', placeholder: '', value: more.moreImage3.value, onUpdate: onInputChange }
    const accommodationTitle = { fieldClass:'form-control', section:'accommodation',field: 'accommodationTitle', name:'accommodationTitle', placeholder: '', value: accommodation.accommodationTitle.value, onUpdate: onInputChange }
    const accommodationMainDescription = {type:'text-area', fieldClass:'form-control', section:'accommodation', field: 'mainDescription', name:'mainDescription', placeholder: '', value: accommodation.mainDescription.value, onUpdate: onInputChange }
    const accommodationImage = {type:'image-picker', images:images, fieldClass:'form-control', section:'accommodation', field: 'accommodationImage', name:'accommodationImage', placeholder: '', value: accommodation.accommodationImage.value, onUpdate: onInputChange }
    const aboutUsTitle = { fieldClass:'form-control', section:'about',field: 'aboutTitle', name:'aboutTitle', placeholder: '', value: about.aboutTitle.value, onUpdate: onInputChange }
    const aboutUsMainDescription = {type:'text-area', fieldClass:'form-control', section:'about', field: 'mainDescription', name:'mainDescription', placeholder: '', value: about.mainDescription.value, onUpdate: onInputChange }
    const aboutImage = {type:'image-picker', images:images, fieldClass:'form-control', section:'about', field: 'aboutImage', name:'aboutImage', placeholder: '', value: about.aboutImage.value, onUpdate: onInputChange }
    const homeAboutYogaImage = {type:'image-picker', images:images, fieldClass:'form-control', section:'home', field: 'homeAboutYogaImage', name:'homeAboutYogaImage', placeholder: '', value: home.homeAboutYogaImage.value, onUpdate: onInputChange }
    const homeAboutFoodImage = {type:'image-picker', images:images, fieldClass:'form-control', section:'home', field: 'homeAboutFoodImage', name:'homeAboutFoodImage', placeholder: '', value: home.homeAboutFoodImage.value, onUpdate: onInputChange }
    const homeAboutAccommodationImage = {type:'image-picker', images:images, fieldClass:'form-control', section:'home', field: 'homeAboutAccommodationImage', name:'homeAboutAccommodationImage', placeholder: '', value: home.homeAboutAccommodationImage.value, onUpdate: onInputChange }
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
          		<h3>{menuBar.home} - {menuBar.about}</h3>
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
	                    <label htmlFor="contact-name" className="form-label">לינה:</label>
	    	 			<Field {...homeAboutCardAccommodation}/>
	                  	<button onClick={()=>save(homeAboutCardAccommodation.section,homeAboutCardAccommodation.name,homeAboutCardAccommodation.value, homeAboutCardAccommodation._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                  <div className="form-group">
	    	 			<Field {...homeAboutAccommodationImage}/>
	                  	<button onClick={()=>save(homeAboutAccommodationImage.section,homeAboutAccommodationImage.name,homeAboutAccommodationImage.value, homeAboutAccommodationImage._id)} className="fa fa-arrow-circle-o-right login-button"></button>
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
          		<h3>{menuBar.about}</h3>
	          	<div className="range">
	          		<div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">אודות:</label>
	    	 			<Field {...aboutImage}/>
	                  	<button onClick={()=>save(aboutImage.section,aboutImage.name,aboutImage.value, aboutImage._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">אודות:</label>
	    	 			<Field {...aboutUsTitle}/>
	                  	<button onClick={()=>save(aboutUsTitle.section,aboutUsTitle.name,aboutUsTitle.value, aboutUsTitle._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">אודות:</label>
	    	 			<Field {...aboutUsMainDescription}/>
	                  	<button onClick={()=>save(aboutUsMainDescription.section,aboutUsMainDescription.name,aboutUsMainDescription.value, aboutUsMainDescription._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	            </div>
            </div>
            <div className="shell">
          		<h3>{menuBar.paros}</h3>
	          	<div className="range">
	          		<div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">פארוס:</label>
	    	 			<Field {...parosImage}/>
	                  	<button onClick={()=>save(parosImage.section,parosImage.name,parosImage.value, parosImage._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">פארוס:</label>
	    	 			<Field {...parosTitle}/>
	                  	<button onClick={()=>save(parosTitle.section,parosTitle.name,parosTitle.value, parosTitle._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">פארוס:</label>
	    	 			<Field {...parosMainDescription}/>
	                  	<button onClick={()=>save(parosMainDescription.section,parosMainDescription.name,parosMainDescription.value, parosMainDescription._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	            </div>
            </div>
            <div className="shell">
          		<h3>{menuBar.yoga}</h3>
	          	<div className="range">
	          		<div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">יוגה:</label>
	    	 			<Field {...yogaImage}/>
	                  	<button onClick={()=>save(yogaImage.section,yogaImage.name,yogaImage.value, yogaImage._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">יוגה:</label>
	    	 			<Field {...yogaTitle}/>
	                  	<button onClick={()=>save(yogaTitle.section,yogaTitle.name,yogaTitle.value, yogaTitle._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">יוגה:</label>
	    	 			<Field {...yogaMainDescription}/>
	                  	<button onClick={()=>save(yogaMainDescription.section,yogaMainDescription.name,yogaMainDescription.value, yogaMainDescription._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	            </div>
	            <div className="range">
	          		<div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">יוגה:</label>
	    	 			<Field {...yogaImage2}/>
	                  	<button onClick={()=>save(yogaImage2.section,yogaImage2.name,yogaImage2.value, yogaImage2._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">יוגה:</label>
	    	 			<Field {...yogaSecondDescription}/>
	                  	<button onClick={()=>save(yogaSecondDescription.section,yogaSecondDescription.name,yogaSecondDescription.value, yogaMainDescription._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	            </div>
	            <div className="range">
	          		<div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">יוגה:</label>
	    	 			<Field {...yogaImage3}/>
	                  	<button onClick={()=>save(yogaImage3.section,yogaImage3.name,yogaImage3.value, yogaImage3._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">יוגה:</label>
	    	 			<Field {...yogaThirdDescription}/>
	                  	<button onClick={()=>save(yogaThirdDescription.section,yogaThirdDescription.name,yogaThirdDescription.value, yogaMainDescription._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	            </div>
            </div>
            <div className="shell">
          		<h3>{menuBar.food}</h3>
	          	<div className="range">
	          		<div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">אוכל:</label>
	    	 			<Field {...foodImage}/>
	                  	<button onClick={()=>save(foodImage.section,foodImage.name,foodImage.value, foodImage._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">אוכל:</label>
	    	 			<Field {...foodTitle}/>
	                  	<button onClick={()=>save(foodTitle.section,foodTitle.name,foodTitle.value, foodTitle._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">אוכל:</label>
	    	 			<Field {...foodMainDescription}/>
	                  	<button onClick={()=>save(foodMainDescription.section,foodMainDescription.name,foodMainDescription.value, foodMainDescription._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	            </div>
	            <div className="range">
	          		<div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">אוכל:</label>
	    	 			<Field {...foodImage2}/>
	                  	<button onClick={()=>save(foodImage2.section,foodImage2.name,foodImage2.value, foodImage2._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">אוכל:</label>
	    	 			<Field {...foodSecondDescription}/>
	                  	<button onClick={()=>save(foodSecondDescription.section,foodSecondDescription.name,foodSecondDescription.value, foodMainDescription._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	            </div>
	            <div className="range">
	          		<div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">אוכל:</label>
	    	 			<Field {...foodImage3}/>
	                  	<button onClick={()=>save(foodImage3.section,foodImage3.name,foodImage3.value, foodImage3._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">אוכל:</label>
	    	 			<Field {...foodThirdDescription}/>
	                  	<button onClick={()=>save(foodThirdDescription.section,foodThirdDescription.name,foodThirdDescription.value, foodMainDescription._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	            </div>
            </div>
            <div className="shell">
          		<h3>{menuBar.more}</h3>
	          	<div className="range">
	          		<div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">עוד:</label>
	    	 			<Field {...moreImage}/>
	                  	<button onClick={()=>save(moreImage.section,moreImage.name,moreImage.value, moreImage._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">עוד:</label>
	    	 			<Field {...moreTitle}/>
	                  	<button onClick={()=>save(moreTitle.section,moreTitle.name,moreTitle.value, moreTitle._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">עוד:</label>
	    	 			<Field {...moreMainDescription}/>
	                  	<button onClick={()=>save(moreMainDescription.section,moreMainDescription.name,moreMainDescription.value, moreMainDescription._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	            </div>
	            <div className="range">
	          		<div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">עוד:</label>
	    	 			<Field {...moreImage2}/>
	                  	<button onClick={()=>save(moreImage2.section,moreImage2.name,moreImage2.value, moreImage2._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">עוד:</label>
	    	 			<Field {...moreSecondDescription}/>
	                  	<button onClick={()=>save(moreSecondDescription.section,moreSecondDescription.name,moreSecondDescription.value, moreMainDescription._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	            </div>
	            <div className="range">
	          		<div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">עוד:</label>
	    	 			<Field {...moreImage3}/>
	                  	<button onClick={()=>save(moreImage3.section,moreImage3.name,moreImage3.value, moreImage3._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">עוד:</label>
	    	 			<Field {...moreThirdDescription}/>
	                  	<button onClick={()=>save(moreThirdDescription.section,moreThirdDescription.name,moreThirdDescription.value, moreMainDescription._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	            </div>
            </div>
            <div className="shell">
          		<h3>{menuBar.accommodation}</h3>
	          	<div className="range">
	          		<div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">לינה:</label>
	    	 			<Field {...accommodationImage}/>
	                  	<button onClick={()=>save(accommodationImage.section,accommodationImage.name,accommodationImage.value, accommodationImage._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">לינה:</label>
	    	 			<Field {...accommodationTitle}/>
	                  	<button onClick={()=>save(accommodationTitle.section,accommodationTitle.name,accommodationTitle.value, accommodationTitle._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	                <div className="cell-sm-4">
	                  <div className="form-group">
	                    <label htmlFor="contact-name" className="form-label">לינה:</label>
	    	 			<Field {...accommodationMainDescription}/>
	                  	<button onClick={()=>save(accommodationMainDescription.section,accommodationMainDescription.name,accommodationMainDescription.value, accommodationMainDescription._id)} className="fa fa-arrow-circle-o-right login-button"></button>
	                  </div>
	                </div>
	            </div>
            </div>
        </div>
	)
}

export default Admin

