import React, { Component} from 'react';
import {Link, IndexLink} from 'react-router';
import image1 from '../../../public/template/images/slider-1-2050x1040.jpg';
import image2 from '../../../public/template/images/index-2-370x262.jpg';
import image3 from '../../../public/template/images/index-3-370x262.jpg';

class Header extends Component {
  render() {
    return (
          <header className="page-head bg-lighter header-2 text-center">
        <ul className="list-inline">
          <li><a href="#">twitter</a></li>
          <li><a href="#">facebook</a></li>
          <li><a href="#">pinterest</a></li>
          <li><a href="#">youtube</a></li>
          <li><a href="#">instagram</a></li>
        </ul>
        <div className="jumbotron-variant-1"><span className="material-icons-notifications_active icon-lg icon-white"></span>
          <h1><a href="./">Apartments</a></h1>
          <h5>We'll help you find your new home</h5>
        </div>
    
         <div className="rd-navbar-wrap">
                <nav data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fullwidth" data-sm-device-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-device-layout="rd-navbar-static" className="rd-navbar rd-navbar-static" data-sm-stick-up-offset="900px" data-md-stick-up-offset="900px" data-lg-stick-up-offset="1000px">
                  <div className="rd-navbar-inner">
                    <div className="rd-navbar-inner-wrap">
                        <div className="rd-navbar-panel">
                          <button data-rd-navbar-toggle=".rd-navbar-nav-wrap" className="rd-navbar-toggle"><span></span></button>
                          <div className="rd-navbar-brand"><a href="index.html" className="brand-name">apartments</a></div>
                        </div>
                        <div className="rd-navbar-nav-wrap">
                        <ul className="rd-navbar-nav">
                          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                          <li><Link to="/about" activeClassName="active">About</Link></li>
                          <li><Link to="/contact" activeClassName="active">Contact</Link></li>
                          <li><Link to="/package" activeClassName="active">Packages</Link></li>
                          <li><Link to="/gallery" activeClassName="active">Gallery</Link></li>
                        </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
      </header>
    );
  }
}
export default Header;
