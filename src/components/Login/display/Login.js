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
			  	<form onSubmit={login} method="post">
			  		
				  	<div className="form cell-sm-4">
					  	<div>
					  		<Field {...emailInput}/>
					  	</div>
					  	<div>
					  		<Field {...passwordInput}/>
					  	</div>
					  	<div className="button-holder">
					  		<button className="fa fa-arrow-circle-o-right login-button"></button>
					  	</div>
				  	</div>
			  	</form>
			  	:
			  	<h3> {email} You are logged in</h3>
			  }
				 </div>
			 </section>
			 <section>
			  <div className="login shell">
			 	<form>
				  	{ userFormFields.map( field =>
				  		<div className="form cell-sm-4">
				  			<Field {...field} />
				  		</div>
				  		)

				  	}
					  	<div className="button-holder">
					  		<button type='button' onClick={addUser}className="fa fa-arrow-circle-o-right login-button"></button>
					  	</div>
			  	</form>
			  	</div>
		  	</section>
		 </main>
);
}
export default Login;
