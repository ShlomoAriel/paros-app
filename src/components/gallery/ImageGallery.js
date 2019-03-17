import React from 'react';
import { withRouter } from 'react-router';
import {connect} from 'react-redux'
import {Link} from 'react-router';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

class ImageGallery2 extends React.Component {

  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  render() {

    function importAll(r) {
      return r.keys().map(r)
    }
    let images = importAll(require.context('../../../public/template/images/img', false, /\.(png|jpe?g|svg|PNG)$/));
    images = images.map(image=>{
      return { original:image, thumbnail:image, name: image.substr(image.lastIndexOf('/') + 1 )}
    })
    return (
      <main className="page-content">
      {
        // <section className="section-sm-top-133 text-center section-top-31">
        //         <div className="shell text-center">
        //           <h5 className="tt-u">Gallery</h5>
        //           <ol className="breadcrumb">
        //             <li><Link to="/" activeClassName="active">Home</Link></li>
        //             <li>About</li>
        //           </ol>
        //         </div>
        //       </section>
            }
        <section className="section-sm-top-133 border-bottom container">
          <div className="shell-fluid inset-left-0 inset-right-0">
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

function mapStateToProps(state) {
  return{
    galleryPath:state.galleryPath,
  }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default withRouter(connect( mapStateToProps, mapDispatchToProps )(ImageGallery2))