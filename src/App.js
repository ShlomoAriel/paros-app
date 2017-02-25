import React, { Component, PropTypes} from 'react';
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import GalleryPage from './components/gallery/ImageGallery';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="page">
          <Header/>
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
