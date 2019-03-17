import React, { Component} from 'react';

class Footer extends Component {
  render() {
    return (
          <footer className="page-foot section-90 ltr">
        <div className="container text-center">
          <div className="range range">
            <div className="cell-xs-4 text-xs-right">
              <dl className="contact-info">
                <dt>Whatapp: 
                </dt>
                <dd><a href="callto:+30 6944 966 132">+30 6944 966 132</a></dd>
              </dl>
            </div>
            <div className="cell-xs-4 text-xs-center">
              <dl className="contact-info">
                <dt>Telephone: 
                </dt>
                <dd><a href="callto:+972 52 864 0642">+972 52 864 0642</a></dd>
              </dl>
            </div>
            <div className="cell-xs-4 text-xs-left">
              <dl className="contact-info">
                <dt>E-mail: 
                </dt>
                <dd><a href="mailto:paroscastel@gmail.com">paroscastel@gmail.com</a></dd>
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
