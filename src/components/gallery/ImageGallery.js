import React from 'react';
import {Link} from 'react-router';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
class ImageGallery2 extends React.Component {

  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  render() {

    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]

    return (
      <main className="page-content">
      <section className="section-sm-top-133 text-center section-top-31">
          <div className="shell text-center">
            <h5 className="tt-u">Gallery</h5>
            <ol className="breadcrumb">
              <li><Link to="/" activeClassName="active">Home</Link></li>
              <li>About</li>
            </ol>
          </div>
        </section>
        <section className="section-sm-top-133 border-bottom container">
          <div className="shell-fluid inset-left-0 inset-right-0">
            <h2 className="divider text-center">Gallery</h2>
            <div className="range range-condensed" id="range-fix">
              <ImageGallery
                items={images}
                sizes={0.2}
                slideInterval={2000}
                onImageLoad={this.handleImageLoad}/>
                </div>
            </div>
        </section>
      </main>
    );
  }
}
export default ImageGallery2