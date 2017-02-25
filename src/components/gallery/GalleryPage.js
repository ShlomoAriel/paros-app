import React from 'react'
import image1 from '../../../public/template/images/gallery_justified-1.jpg';
import image2 from '../../../public/template/images/gallery_justified-2.jpg';
import image3 from '../../../public/template/images/gallery_justified-3.jpg';
import image4 from '../../../public/template/images/gallery_justified-4.jpg';
import image5 from '../../../public/template/images/gallery_justified-5.jpg';
import image6 from '../../../public/template/images/gallery_justified-6.jpg';
import image7 from '../../../public/template/images/gallery_justified-7.jpg';
import image8 from '../../../public/template/images/gallery_justified-8.jpg';
import image9 from '../../../public/template/images/gallery_justified-9.jpg';


class GalleryPage extends React.Component{
  render(){
    return(
      <main className="page-content">
       <section className="section-lg-top-145 section-sm-bottom-60 section-34 border-bottom section-md-top-52">
          <div className="shell">
            <div className="row">
              <div className="col-lg-12">
                <div className="isotope-filters isotope-filters-horizontal">
                  <ul className="list-inline-variant-1">
                    <li><a data-isotope-filter="*" data-isotope-group="gallery" href="#" className="active">Show all</a></li>
                    <li><a data-isotope-filter="Category 1" data-isotope-group="gallery" href="#">Category 1</a></li>
                    <li><a data-isotope-filter="Category 2" data-isotope-group="gallery" href="#">Category 2</a></li>
                    <li><a data-isotope-filter="Category 3" data-isotope-group="gallery" href="#">Category 3</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="col-lg-12">
                <div className="isotope isotope-justified">
                  <div className="row">
                    <div data-filter="Category 1" className="col-xs-12 col-sm-4 col-md-4 isotope-item">
                      <div className="thumbnail-variant-4">
                        
                        <div className="img-link-3 img-link-4">
                          <div className="icons-block"><a data-photo-swipe-item="" data-size="684x482" href="images/gallery-1_original.jpg" className="material-icons-control_point"></a><a href="image-format.html" className="material-icons-reply"></a></div>
                          <div className="h5 tt-u"><a href="image-format.html">Image Format</a></div>
                          <img src={image1} alt="" width="684" height="693"/>
                        </div>
                      </div>
                    </div>
                    <div data-filter="Category 3" className="col-xs-12 col-sm-8 col-md-8 isotope-item">
                      <div className="thumbnail-variant-4">
                        
                        <div className="img-link-3 img-link-4">
                          <div className="icons-block"><a data-photo-swipe-item="" data-size="1170x780" href="images/gallery-2_original.jpg" className="material-icons-control_point"></a><a href="gallery-format.html" className="material-icons-reply"></a></div>
                          <div className="h5 tt-u"><a href="gallery-format.html">Gallery Format</a></div><img src={image2} alt="" width="684" height="693"/>
                        </div>
                      </div>
                    </div>
                    <div data-filter="Category 3" className="col-xs-12 isotope-item">
                      <div className="thumbnail-variant-4">
                        
                        <div className="img-link-3 img-link-4">
                          <div className="icons-block"><a data-photo-swipe-item="" data-size="1170x780" href="images/gallery-3_original.jpg" className="material-icons-control_point"></a><a href="video-format.html" className="material-icons-reply"></a></div>
                          <div className="h5 tt-u"><a href="video-format.html">Video Format</a></div><img src={image3} alt="" width="684" height="693"/>
                        </div>
                      </div>
                    </div>
                    <div data-filter="Category 3" className="col-xs-12 col-sm-8 col-md-8 isotope-item">
                      <div className="thumbnail-variant-4">
                        
                        <div className="img-link-3 img-link-4">
                          <div className="icons-block"><a data-photo-swipe-item="" data-size="1170x780" href="images/gallery-4_original.jpg" className="material-icons-control_point"></a><a href="audio-format.html" className="material-icons-reply"></a></div>
                          <div className="h5 tt-u"><a href="audio-format.html">Audio format</a></div><img src={image4} alt="" width="684" height="693"/>
                        </div>
                      </div>
                    </div>
                    <div data-filter="Category 2" className="col-xs-12 col-sm-4 col-md-4 isotope-item">
                      <div className="thumbnail-variant-4">
                        
                        <div className="img-link-3 img-link-4">
                          <div className="icons-block"><a data-photo-swipe-item="" data-size="683x780" href="images/gallery-5_original.jpg" className="material-icons-control_point"></a><a href="choice.html" className="material-icons-reply"></a></div>
                          <div className="h5 tt-u"><a href="choice.html">your choice</a></div><img src={image5} alt="" width="684" height="693"/>
                        </div>
                      </div>
                    </div>
                    <div data-filter="Category 2" className="col-xs-12 col-sm-4 col-md-4 isotope-item">
                      <div className="thumbnail-variant-4">
                        
                        <div className="img-link-3 img-link-4">
                          <div className="icons-block"><a data-photo-swipe-item="" data-size="684x730" href="images/gallery-6_original.jpg" className="material-icons-control_point"></a><a href="choice.html" className="material-icons-reply"></a></div>
                          <div className="h5 tt-u"><a href="choice.html">your choice</a></div><img src={image6} alt="" width="684" height="693"/>
                        </div>
                      </div>
                    </div>
                    <div data-filter="Category 1" className="col-xs-12 col-sm-4 col-md-4 isotope-item">
                      <div className="thumbnail-variant-4">
                        
                        <div className="img-link-3 img-link-4">
                          <div className="icons-block"><a data-photo-swipe-item="" data-size="684x1024" href="images/gallery-8_original.jpg" className="material-icons-control_point"></a><a href="choice.html" className="material-icons-reply"></a></div>
                          <div className="h5 tt-u"><a href="choice.html">your choice</a></div><img src={image7} alt="" width="684" height="693"/>
                        </div>
                      </div>
                    </div>
                    <div data-filter="Category 1" className="col-xs-12 col-sm-4 col-md-4 isotope-item">
                      <div className="thumbnail-variant-4">
                        
                        <div className="img-link-3 img-link-4">
                          <div className="icons-block"><a data-photo-swipe-item="" data-size="684x780" href="images/gallery-7_original.jpg" className="material-icons-control_point"></a><a href="choice.html" className="material-icons-reply"></a></div>
                          <div className="h5 tt-u"><a href="choice.html">your choice</a></div><img src={image8} alt="" width="684" height="693"/>
                        </div>
                      </div>
                    </div>
                    <div data-filter="Category 1" className="col-xs-12 isotope-item">
                      <div className="thumbnail-variant-4">
                        
                        <div className="img-link-3 img-link-4">
                          <div className="icons-block"><a data-photo-swipe-item="" data-size="1024x780" href="images/gallery-9_original.jpg" className="material-icons-control_point"></a><a href="choice.html" className="material-icons-reply"></a></div>
                          <div className="h5 tt-u"><a href="choice.html">your choice</a></div><img src={image9} alt="" width="684" height="693"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <ul className="pagination clearfix">
                  <li className="active"><span> 1</span></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">Next page</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>     );
  }
}

export default GalleryPage;