import React, { Component} from 'react';

class Footer extends Component {
  render() {
    return (
          <footer className="page-foot section-90">
        <div className="container text-center">
          <div className="range range">
            <div className="cell-xs-6 text-xs-right">
              <dl className="contact-info">
                <dt>Telephone: 
                </dt>
                <dd><a href="callto:#">+1 959 603 6035</a></dd>
              </dl>
            </div>
            <div className="cell-xs-6 text-xs-left">
              <dl className="contact-info">
                <dt>E-mail: 
                </dt>
                <dd><a href="mailto:#">paroscastel@gmail.com</a></dd>
              </dl>
            </div>
          </div>
          <p className="">Sea Lion &#169; <span id="copyright-year"></span>
          </p>
        </div>
      </footer>
    );
  }
}
export default Footer;
