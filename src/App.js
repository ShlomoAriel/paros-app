import React, { Component, PropTypes} from 'react';
import HeaderComponent from './components/common/container/HeaderComponent'
import Footer from './components/common/Footer'
import GalleryPage from './components/gallery/ImageGallery';
// import logo from './logo.svg';
import './App.css';
import './main.css';

class App extends Component {
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
App.PropTypes = {
  children: PropTypes.object.isRequired
};
export default App;
