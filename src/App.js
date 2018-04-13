import React, { Component, PropTypes} from 'react';
import { withRouter } from 'react-router';
import {connect} from 'react-redux'
import HeaderComponent from './components/common/container/HeaderComponent'
import Footer from './components/common/Footer'
import * as contentActions from './redux/actions/contentActions'
import * as packageActions from './redux/actions/packageActions'
import * as loginActions from './redux/actions/loginActions'
import * as config from './utils/config'
import GalleryPage from './components/gallery/ImageGallery';
import './App.css';
import './main.css';
class App extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount(){
      this.props.getContentFromServer()
      if( !(this.props.authenticated)){
          const jwt = localStorage.getItem('token')
          if(!jwt){
            this.props.router.push('/login')
          } else{
            this.props.setToken(jwt)
          }
      }  
    }
    componentDidUpdate(prevProps, prevState) {
      console.log((config.restricted.includes(this.props.location.pathname)))
      if( (!(this.props.authenticated)) && 
          (this.props.location.pathname != '/login') && 
          (config.restricted.includes(this.props.location.pathname)) ) 
      {
         this.props.router.push('/login')
      }
    }
  render() {
    return (
        <div className="page">
          <HeaderComponent/>
          {this.props.children}
          <Footer/>
        </div>
    );
  }
}
function mapStateToProps(state) {
  return{
    authenticated:state.login.authenticated,
  }
}
function mapDispatchToProps(dispatch) {
    return {
        getContentFromServer(){
            dispatch( contentActions.getContentFromServer() )
            dispatch( packageActions.getPackagesFromServer() )
        },
        setToken(token){
          dispatch(loginActions.setToken(token))
        }
    }
}

App.PropTypes = {
  children: PropTypes.object.isRequired
};
export default withRouter(connect( mapStateToProps, mapDispatchToProps )(App))

