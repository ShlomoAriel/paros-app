import React from 'react'
import {Link} from 'react-router'
import image4 from '../../../public/template/images/index-4-683x482.jpg';
import image5 from '../../../public/template/images/index-5-683x482.jpg';
import image6 from '../../../public/template/images/index-6-683x482.jpg';
import image7 from '../../../public/template/images/index-7-1025x639.jpg';
import image8 from '../../../public/template/images/index-8-1025x639.jpg';
import image9 from '../../../public/template/images/index-9-514x550.jpg';
import image10 from '../../../public/template/images/index-10-514x670.jpg';
import image11 from '../../../public/template/images/index-11-514x550.jpg';
import image12 from '../../../public/template/images/index-12-514x730.jpg';
import imageGallery1 from '../../../public/template/images/index-14-684x693.jpg';
import imageGallery2 from '../../../public/template/images/index-17-684x1087.jpg';
import imageGallery3 from '../../../public/template/images/index-15-684x916.jpg';
import imageGallery4 from '../../../public/template/images/index-18-684x864.jpg';
import imageGallery5 from '../../../public/template/images/index-16-684x730.jpg';
import imageGallery6 from '../../../public/template/images/index-19-684x1050.jpg';


class ContactPage extends React.Component{
  render(){
    return(
      <main className="page-content">
                <section className="section-60 border-bottom">
                  <div className="shell">
                    <h2 className="text-center divider">Contact us</h2>
                    
                    <form data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php" className="rd-mailform text-left offset-top-93">
                      <div className="range">
                        <div className="cell-sm-4">
                          <div className="form-group">
                            <label for="contact-name" className="form-label">Name:</label>
                            <input id="contact-name" type="text" name="name" data-constraints="@Required" className="form-control"/>
                          </div>
                        </div>
                        <div className="cell-sm-4">
                          <div className="form-group">
                            <label for="contact-email" className="form-label">E-Mail:</label>
                            <input id="contact-email" type="email" name="email" data-constraints="@Required @Email" className="form-control"/>
                          </div>
                        </div>
                        <div className="cell-sm-4">
                          <div className="form-group">
                            <label for="contact-phone" className="form-label">Phone:</label>
                            <input id="contact-phone" type="text" name="phone" data-constraints="@Required @Numeric" className="form-control"/>
                          </div>
                        </div>
                        <div className="cell-xs-12 offset-top-30">
                          <div className="form-group">
                            <label for="contact-message" className="form-label">Message:</label>
                            <textarea id="contact-message" name="message" data-constraints="@Required" className="form-control"></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="text-center offset-top-30">
                        <button type="submit" className="btn btn-transparent btn-sm">Send</button>
                        <button type="reset" className="btn btn-transparent btn-sm">Clear</button>
                      </div>
                    </form>
                  </div>
                </section>
      </main>     );
  }
}

export default ContactPage;