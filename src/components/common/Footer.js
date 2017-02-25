import React, { Component, PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import image1 from '../../../public/template/images/slider-1-2050x1040.jpg';
import image2 from '../../../public/template/images/index-2-370x262.jpg';
import image3 from '../../../public/template/images/index-3-370x262.jpg';

class Footer extends Component {
  render() {
    return (
          <footer className="page-foot section-90">
        <div className="container text-center">
          <div className="range range">
            <div className="cell-xs-6 text-xs-right">
              <dl className="contact-info">
                <dt>Freephone:</dt> 
                <dd><a href="callto:#">+1 800 559 6580</a></dd>
              </dl>
              <dl className="contact-info">
                <dt>Telephone: 
                </dt>
                <dd><a href="callto:#">+1 959 603 6035</a></dd>
              </dl>
              <dl className="contact-info">
                <dt>FAX: 
                </dt>
                <dd><a href="callto:#">+1 504 889 9898</a></dd>
              </dl>
              <dl className="contact-info">
                <dt className="offset-top-22">E-mail: 
                </dt>
                <dd className="offset-top-22"><a href="mailto:#">mail@demolink.org</a></dd>
              </dl>
            </div>
            <div className="cell-xs-6 text-xs-left">
              <address className="address">8901 Marmora Road<br/>Glasgow, DO4 89GR.<br/><a href="#" className="reveal-inline-block offset-top-22">Get Directions</a></address>
            </div>
          </div>
          <p className="offset-top-70">Apartments &#169; <span id="copyright-year"></span> <span>&#8226;</span> <a href="privacy.html" className="txt-base">Privacy Policy</a>
          </p>
        </div>
      </footer>
    );
  }
}
export default Footer;
