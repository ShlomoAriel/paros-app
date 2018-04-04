import React, { Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import HeaderComponent from './components/common/container/HeaderComponent'
import Footer from './components/common/Footer'
import * as contentActions from './redux/actions/contentActions'
import * as packageActions from './redux/actions/packageActions'
import GalleryPage from './components/gallery/ImageGallery';
// import logo from './logo.svg';
import './App.css';
import './main.css';

class App extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.getContentFromServer()
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
  return{}
}
function mapDispatchToProps(dispatch) {
    return {
        getContentFromServer(){
            dispatch( contentActions.getContentFromServer() )
            dispatch( packageActions.getPackagesFromServer() )
        }
    }
}

App.PropTypes = {
  children: PropTypes.object.isRequired
};
export default connect( mapStateToProps, mapDispatchToProps )(App)

