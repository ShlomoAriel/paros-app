import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import image1 from '../public/template/images/slider-1-2050x1040.jpg';
import image2 from '../public/template/images/index-2-370x262.jpg';
import image3 from '../public/template/images/index-3-370x262.jpg';
import image4 from '../public/template/images/index-4-683x482.jpg';
import image5 from '../public/template/images/index-5-683x482.jpg';
import image6 from '../public/template/images/index-6-683x482.jpg';
import image7 from '../public/template/images/index-7-1025x639.jpg';
import image8 from '../public/template/images/index-8-1025x639.jpg';
import image9 from '../public/template/images/index-9-514x550.jpg';
import image10 from '../public/template/images/index-10-514x670.jpg';
import image11 from '../public/template/images/index-11-514x550.jpg';
import image12 from '../public/template/images/index-12-514x730.jpg';
import imageGallery1 from '../public/template/images/index-14-684x693.jpg';
import imageGallery2 from '../public/template/images/index-17-684x1087.jpg';
import imageGallery3 from '../public/template/images/index-15-684x916.jpg';
import imageGallery4 from '../public/template/images/index-18-684x864.jpg';
import imageGallery5 from '../public/template/images/index-16-684x730.jpg';
import imageGallery6 from '../public/template/images/index-19-684x1050.jpg';





class App extends Component {
  render() {
    return (
       <div className="page">
         <header className="page-head header-1 text-center">
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
                      <li className="active"><a href="./">Home</a>
                      </li>
                      <li><a href="about.html">About</a></li>
                      <li><a href="gallery.html">Gallery</a>
                        <ul className="rd-navbar-dropdown">
                          <li><a href="gallery_masonry.html">Masonry Style</a></li>
                          <li><a href="gallery_grid.html">Grid Style</a></li>
                          <li><a href="gallery_justified.html">Justified Style</a></li>
                          <li><a href="gallery_list.html">List Style</a></li>
                        </ul>
                      </li>
                      <li><a href="blog.html">Blog</a>
                        <ul className="rd-navbar-dropdown">
                          <li><a href="blog-post.html">Blog Post</a></li>
                          <li><a href="image-format.html">Image Format</a></li>
                          <li><a href="video-format.html">Video Format</a></li>
                          <li><a href="audio-format.html">Audio Format</a></li>
                          <li><a href="gallery-format.html">Gallery Format</a></li>
                          <li><a href="choice.html">Your Choice</a></li>
                        </ul>
                      </li>
                      <li><a href="contacts.html">Contacts</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <main className="page-content">
        
        <section className="section-52 text-center section-md-bottom-153">
          <div className="shell">
            <h2 className="divider">welcome</h2>
            <div className="range">
              <div className="cell-md-10 cell-md-preffix-1">
                <h5 className="txt-base"> Welcome to our Rental Company and thank you for taking the time to visit our site! In today’s real estate market, renting is becoming a popular option again for a lot of people. We pride ourselves on our service to our clients.</h5>
              </div>
            </div>
          </div>
        </section>
        
        <section className="text-center">
          <div className="shell-fluid inset-left-0 inset-right-0">
            <div className="range range-condensed txt-white">
              <div className="cell-sm-6 bg-primary">
                <figure className="figure">
                <img src={image7} alt="" width="1025" height="639"/>
                  <figcaption className="figure-caption">
                    <h5 className="tt-u">How can we help you?</h5>
                    <h5>Whether searching for your dream home, apartment hunting, relocating, or in need of corporate housing, we can help. Our unique approach combines a diverse selection of properties and housing solutions with the friendly professional service we're known for.</h5>
                  </figcaption>
                </figure>
              </div>
              <div className="cell-sm-6 bg-starship">
                <figure className="figure">
                <img src={image8} alt="" width="1025" height="639"/>
                  <figcaption className="figure-caption">
                    <h5 className="tt-u">Sell My Home</h5>
                    <h5>Selling your home in USA is easy when you let us do all the work. Our real estate brokers will promote your home or condo with a comprehensive marketing program and<br className="veil reveal-sm-inline"/> responsive service.</h5>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section-md-top-150 text-center section-md-bottom-31 section-52">
          <div className="shell-fluid inset-left-0 inset-right-0">
            <h2 className="divider">Services</h2>
            <div className="range range-condensed">
              <div className="cell-xs-6 cell-md-3 cell-xs-push-1 cell-md-push-1">
                <div className="thumbnail-variant-1"><a href="#" className="img-link">
                <img src={image9} alt="" width="514" height="550"/></a>
                  <div className="caption">
                    <div className="h5 tt-u"><a href="#">Vacation Rentals</a></div>
                    <p>Furnished rentals, located in every area of the city, are a comfortable alternative to staying at hotel.</p><a href="#" className="btn-link">Learn more</a>
                  </div>
                </div>
              </div>
              <div className="cell-xs-6 cell-md-3 cell-xs-push-3 cell-md-push-2 offset-top-30 offset-xs-top-0">
                <div className="thumbnail-variant-1"><a href="#" className="img-link">
                <img src={image10} alt="" width="514" height="670"/></a>
                  <div className="caption">
                    <div className="h5 tt-u"><a href="#">Roommate Share</a></div>
                    <p>Furnished apartments throughout the city, equipped with various amenities, such as internet and a full kitchen.</p><a href="#" className="btn-link">Learn more</a>
                  </div>
                </div>
              </div>
              <div className="cell-xs-6 cell-md-3 cell-xs-push-2 cell-md-push-3 offset-top-30 offset-xs-top-0">
                <div className="thumbnail-variant-1"><a href="#" className="img-link">
                <img src={image11} alt="" width="514" height="550"/></a>
                  <div className="caption">
                    <div className="h5 tt-u"><a href="#">Corporate Apartments</a></div>
                    <p>Long and short term furnished and unfurnished properties, equipped to provide your client with privacy and comfort.</p><a href="#" className="btn-link">Learn more</a>
                  </div>
                </div>
              </div>
              <div className="cell-xs-6 cell-md-3 cell-xs-push-4 cell-md-push-4 offset-top-30 offset-xs-top-0">
                <div className="thumbnail-variant-1"><a href="#" className="img-link">
                <img src={image12} alt="" width="514" height="730"/></a>
                  <div className="caption">
                    <div className="h5 tt-u"><a href="#">Unfurnished</a></div>
                    <p>Our variety of unfurnished apartments will provide you with a place to create the perfect personalized home.</p><a href="#" className="btn-link">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section-60 txt-white text-center bg-image bg-image-1 section-xl">
          <div className="shell">
            <h2 className="divider divider-variant-1">Property Management</h2>
            <div className="range">
              <div className="cell-md-10 cell-md-preffix-1">
                <h5>We provide complete rental Property Management and our services for luxury and affordable condos, apartments, penthouses, lofts, townhouses, houses and mansions.</h5>
                <h5 className="offset-top-0">Our licensed Property Managers provide specialized services to suit the type of management appropriate to your real estate investment property and the options that best serve you, our client.</h5>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section-sm-top-130 text-center section-bottom-0 section-top-52">
          <div className="shell-fluid inset-left-0 inset-right-0">
            <h2 className="divider">Gallery</h2>
            
            <div data-photo-swipe-gallery="gallery" className="range range-condensed">
              <div className="cell-xs-4 overflow-hidden"><a data-photo-swipe-item="" data-size="684x693" href="images/index-14-684x693_original.jpg" className="img-link img-link-2">
              <img width="684" height="693" src={imageGallery1} alt=""/></a><a data-photo-swipe-item="" data-size="684x1087" href="images/index-17-684x1087_original.jpg" className="img-link img-link-2">
              <img width="684" height="1087" src={imageGallery2} alt=""/></a></div>
              <div className="cell-xs-4 overflow-hidden margin-xs-top-1"><a data-photo-swipe-item="" data-size="684x916" href="images/index-15-684x916_original.jpg" className="img-link img-link-2">
              <img width="684" height="916" src={imageGallery3} alt=""/></a><a data-photo-swipe-item="" data-size="684x864" href="images/index-18-684x864_original.jpg" className="img-link img-link-2">
              <img width="684" height="864" src={imageGallery4} alt=""/></a></div>
              <div className="cell-xs-4 overflow-hidden margin-xs-top-1"><a data-photo-swipe-item="" data-size="684x730" href="images/index-16-684x730_original.jpg" className="img-link img-link-2">
              <img width="684" height="730" src={imageGallery5} alt=""/></a><a data-photo-swipe-item="" data-size="684x1050" href="images/index-19-684x1050_original.jpg" className="img-link img-link-2">
              <img width="684" height="1050" src={imageGallery6} alt=""/></a></div>
            </div>
          </div>
        </section>
        <section className="text-center">
          <div className="shell-fluid inset-left-0 inset-right-0">
            <div className="range range-condensed">
              <div className="cell-sm-4 overflow-hidden">
                <div className="thumbnail">
                  <img src={image4} alt="" width="683" height="482"/>
                  <div className="caption"><a href="blog-post.html" className="h5">Vancouver</a>
                    <div className="small">Unfurnished Vancouver</div>
                  </div>
                </div>
              </div>
              <div className="cell-sm-4 overflow-hidden">
                <div className="thumbnail">
                <img src={image5} alt="" width="683" height="482"/>
                  <div className="caption"><a href="blog-post.html" className="h5">Burnaby</a>
                    <div className="small">Unfurnished Burnaby</div>
                  </div>
                </div>
              </div>
              <div className="cell-sm-4 overflow-hidden">
                <div className="thumbnail">
                <img src={image6} alt="" width="683" height="482"/>
                  <div className="caption"><a href="blog-post.html" className="h5">Richmond</a>
                    <div className="small">Unfurnished Richmond</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-md-top-145 section-sm-bottom-68 section-68">
          <h2 className="divider text-center">Contacts</h2>
          
          <div className="rd-google-map offset-sm-top-104 offset-top-40">
            <div id="rd-google-map" data-zoom="15" data-x="-73.9874068" data-y="40.643180" data-styles="[{&quot;featureType&quot;:&quot;water&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#e9e9e9&quot;},{&quot;lightness&quot;:17}]},{&quot;featureType&quot;:&quot;landscape&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#f5f5f5&quot;},{&quot;lightness&quot;:20}]},{&quot;featureType&quot;:&quot;road.highway&quot;,&quot;elementType&quot;:&quot;geometry.fill&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#ffffff&quot;},{&quot;lightness&quot;:17}]},{&quot;featureType&quot;:&quot;road.highway&quot;,&quot;elementType&quot;:&quot;geometry.stroke&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#ffffff&quot;},{&quot;lightness&quot;:29},{&quot;weight&quot;:0.2}]},{&quot;featureType&quot;:&quot;road.arterial&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#ffffff&quot;},{&quot;lightness&quot;:18}]},{&quot;featureType&quot;:&quot;road.local&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#ffffff&quot;},{&quot;lightness&quot;:16}]},{&quot;featureType&quot;:&quot;poi&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#f5f5f5&quot;},{&quot;lightness&quot;:21}]},{&quot;featureType&quot;:&quot;poi.park&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#dedede&quot;},{&quot;lightness&quot;:21}]},{&quot;elementType&quot;:&quot;labels.text.stroke&quot;,&quot;stylers&quot;:[{&quot;visibility&quot;:&quot;on&quot;},{&quot;color&quot;:&quot;#ffffff&quot;},{&quot;lightness&quot;:16}]},{&quot;elementType&quot;:&quot;labels.text.fill&quot;,&quot;stylers&quot;:[{&quot;saturation&quot;:36},{&quot;color&quot;:&quot;#333333&quot;},{&quot;lightness&quot;:40}]},{&quot;elementType&quot;:&quot;labels.icon&quot;,&quot;stylers&quot;:[{&quot;visibility&quot;:&quot;off&quot;}]},{&quot;featureType&quot;:&quot;transit&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#f2f2f2&quot;},{&quot;lightness&quot;:19}]},{&quot;featureType&quot;:&quot;administrative&quot;,&quot;elementType&quot;:&quot;geometry.fill&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#fefefe&quot;},{&quot;lightness&quot;:20}]},{&quot;featureType&quot;:&quot;administrative&quot;,&quot;elementType&quot;:&quot;geometry.stroke&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#fefefe&quot;},{&quot;lightness&quot;:17},{&quot;weight&quot;:1.2}]}]" className="rd-google-map__model"></div>
            <ul className="map_locations">
              <li data-x="-73.9874068" data-y="40.643180">
                <p>9870 St Vincent Place, Glasgow, DC 45 Fr 45.</p>
              </li>
            </ul>
          </div>
          <div className="range text-center offset-top-93">
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
        </section>
      </main>
      </div>
    );
  }
}

export default App;
