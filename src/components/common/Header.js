import React, { Component, PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import image1 from '../../../public/template/images/slider-1-2050x1040.jpg';
import image2 from '../../../public/template/images/index-2-370x262.jpg';
import image3 from '../../../public/template/images/index-3-370x262.jpg';

class Header extends Component {
  render() {
    return (
          <header className="page-head header-1 text-center">
              <div className="jumbotron-variant-1">
                <h1><a>Magic Garden</a></h1>
                <h5>Yoga and Food</h5>
              </div>
              <div data-height="" data-min-height="" className="swiper-container swiper-slider">
                <div className="swiper-wrapper">
                  <div data-slide-bg={image1} className="swiper-slide" style={{backgroundImage:"url("+image1+")"}}></div>
                  <div data-slide-bg={image2} className="swiper-slide"></div>
                  <div data-slide-bg={image3} className="swiper-slide"></div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
              <div className="rd-navbar-wrap">
                <nav data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fullwidth" data-sm-device-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-device-layout="rd-navbar-static" className="rd-navbar rd-navbar-static rd-navbar--is-stuck" data-sm-stick-up-offset="900px" data-md-stick-up-offset="900px" data-lg-stick-up-offset="1000px">
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
                          <li><a href="gallery.html">Gallery</a>
                            <ul className="rd-navbar-dropdown">
                              <li><a href="gallery_masonry.html">Masonry Style</a></li>
                              <li><a href="gallery_grid.html">Grid Style</a></li>
                              <li><a href="gallery_justified.html">Justified Style</a></li>
                              <li><a href="gallery_list.html">List Style</a></li>
                            </ul>
                            </li>
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
