// import PropTypes from 'prop-types'
import React  from 'react'
import {Link} from 'react-router'
import * as adminActions from '../../../actions/adminActions'
// import * as TextInput from '../../../components/CustomElements/TextInput'

const Admin = ({homeObject,onInputChange})=> {
    const fieldExample = { field: 'welcomeText', name:'welcomeText', placeholder: 'Welcome Text', value: homeObject.welcomeText, onUpdate: onInputChange }

	return(
    	<div className="section-sm-top-133 text-center">
    		<h2>Admin page</h2>
	        <section>
	        	<div className="">
	        	{
	        		// <TextInput
		         //        field={fieldExample.field}
		         //        value={fieldExample.value}
		         //        label={fieldExample.label}
		         //        placeholder={fieldExample.placeholder}
		         //        onSelect={fieldExample.onSelect}
		         //        onKeyDownEnter={fieldExample.onEnter}
		         //        onUpdate={fieldExample.onUpdate}/>
	        	}
	        	</div>
	        </section>
        </div>
	)
}

export default Admin

