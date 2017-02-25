import React, { Component, PropTypes} from 'react';
import Header from './components/common/Header'
import Footer from './components/common/Footer'
// import logo from './logo.svg';
import './App.css';
import image1 from '../public/template/images/slider-1-2050x1040.jpg';
import image2 from '../public/template/images/index-2-370x262.jpg';
import image3 from '../public/template/images/index-3-370x262.jpg';

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
