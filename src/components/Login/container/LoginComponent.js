import React from 'react'
import {connect} from 'react-redux';
import R from 'ramda';
import * as loginActions from '../../../redux/actions/loginActions'
// import * as webUIActions from 'redux/actions/webUIActions'
import Login from '../display/Login';

class LoginComponent extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.addUser = this.addUser.bind(this)
        this.updateField = this.updateField.bind(this)
    }
    state={
        userForm:{
            password:'1234',
            email:'shlomd@example.com',
            name:'some name',
            role:'57d2837a13d468481b1fe133',
        },
    }
    componentWillMount(){}
      
    componentDidUpdate(prevProps, prevState) {
        if( (this.props.authenticated)){
          const jwt = localStorage.getItem('token')
          if(jwt){
            this.props.history.push('/')
          } 
      }  
    }

    addUser = ()=>{
        this.props.dispatch( loginActions.addUser(this.state.userForm) )

    }
    updateField = (field, value)=>{
        // this.setState(R.assoc( field, value, this.state.userForm ));
        this.setState( { userForm:{...this.state.userForm, [field]: value}} );
    }

    render() {
        return (
            <Login 
            {...this.props}
            addUser={this.addUser}
            userForm={this.state.userForm}
            updateField={this.updateField}
            />
        )
    }

}

function mapStateToProps(state) {
    return {
    	username:state.login.username,
        password:state.login.password,
    	authenticated:state.login.authenticated,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        onInputFieldChange(field, value){
            dispatch( loginActions.updateInputField(field, value) )
        },
        login(e){
            e.preventDefault();
            dispatch( loginActions.login() )
        },
        toggleLoader(){
            // dispatch(webUIActions.toggleLoaderAt('main'))
        }

    }
}

export default connect( mapStateToProps, mapDispatchToProps )(LoginComponent)

