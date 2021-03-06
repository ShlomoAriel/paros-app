import React from 'react';
import Field from '../../../components/CustomElements/Field'

const Login = ({addUser, updateField,userForm, email, password, authenticated, onInputFieldChange, login}) => {
    const emailInput = { fieldClass:'form-control',field: 'email', name:'email', placeholder: 'email', value: email, onUpdate: onInputFieldChange }
    const passwordInput = { type:'password', fieldClass:'form-control',field: 'password', name:'password', placeholder: 'password', value: password, onUpdate: onInputFieldChange }
    let userFormFields = [
    	{field: 'password', name:'password', placeholder: 'password', value: userForm.password, onUpdate: updateField },
    	{field: 'email', name:'email', placeholder: 'email', value: userForm.email, onUpdate: updateField },
    	{field: 'name', name:'name', placeholder: 'name', value: userForm.name, onUpdate: updateField },
    	{field: 'role', name:'role', placeholder: 'role', value: userForm.role, onUpdate: updateField },
    ]

	return (
		<main className="page-content">
	        <section className="section-sm-top-133 text-center section-top-31">
			  <div className="login shell">
			  { !authenticated ?
			  	<form onSubmit={login} method="post" className="range">
				  	<div className="form cell-sm-4">
					  	<div>
					  		<Field {...emailInput}/>
					  	</div>
					  	<div className="form-group">
					  		<Field {...passwordInput}/>
					  		<button className="fa fa-arrow-circle-o-right login-button"></button>
					  	</div>
				  	</div>
			  	</form>
			  	:
			  	<h3> {email} You are logged in</h3>
			  }
				 </div>
			 </section>
		 </main>
);
}
export default Login;
