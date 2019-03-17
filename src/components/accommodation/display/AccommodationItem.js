// import PropTypes from 'prop-types'
import React  from 'react'
import Checkbox from '../../../components/CustomElements/Checkbox/Checkbox'
import {Link} from 'react-router'
import TextInput from '../../../components/CustomElements/TextInput/TextInput'
import image1 from '../../../../public/template/images/img/image61).jpg';
import R from 'ramda'
import moment from 'moment'
import ImageGallery from 'react-image-gallery';

const AccommodationItem = ({ categories, accommodationContent, isAdmin, handleImageLoad})=> {
    function importAll(r) {
      return r.keys().map(r)
    }
    let folderPath = accommodationContent != undefined ? accommodationContent.images : ''
      let images = importAll(require.context('../../../../public/template/images/', false, /\.(png|jpe?g|svg|PNG)$/));
      images = images.map(image=>{
        return { original:image, thumbnail:image, name: image.substr(image.lastIndexOf('/') + 1 )}
      })
    if(accommodationContent && accommodationContent.images == 'halamish'){
      images = importAll(require.context('../../../../public/template/images/halamish', false, /\.(png|jpe?g|svg|PNG)$/));
      images = images.map(image=>{
        return { original:image, thumbnail:image, name: image.substr(image.lastIndexOf('/') + 1 )}
      })
    }
    if(accommodationContent && accommodationContent.images == 'home'){
      images = importAll(require.context('../../../../public/template/images/home', false, /\.(png|jpe?g|svg|PNG)$/));
      images = images.map(image=>{
        return { original:image, thumbnail:image, name: image.substr(image.lastIndexOf('/') + 1 )}
      })
    }
	return(
    <div>
      <section className="section-sm-top-133 text-center section-top-31">
        <div className="shell text-center">
              <div><h5 className="tt-u">{accommodationContent && accommodationContent.name}</h5></div>
              <ol className="breadcrumb">
                <li><Link to="/" activeClassName="active">Home</Link></li>
                <li>Accommodations</li>
              </ol>
            </div>
      </section>
      <section className="border-bottom container">
        <div className="shell">
          <div className="range">
            <div className="cell-xs-12 cell-sm-6 cell-sm-preffix-3 cell-md-8 cell-md-preffix-2 cell-lg-12 cell-lg-preffix-0 img-height"></div>
          </div>
          <div className="h5 tt-u offset-top-20">{accommodationContent && accommodationContent.name}</div>
          <p className="offset-top-20">{accommodationContent && accommodationContent.description}</p>
        </div>
          <div className="shell-fluid inset-left-0 inset-right-0 offset-top-20">
            <div className="range range-condensed" id="range-fix">
              <ImageGallery
                items={images}
                sizes={0.1} 
                slideInterval={2000}
                onImageLoad={handleImageLoad}/>
                </div>
            </div>
            {accommodationContent && accommodationContent.price && <div className="offset-top-20 border-bottom border-top section-7 fw-300"><span className="txt-primary">Price:</span> <span>{accommodationContent.price}</span></div>}
          <Link to="/accommodation" className="btn btn-sm btn-darker offset-top-50">All Accommodations</Link>
          {isAdmin && <Link to={"/accommodationForm/" +  (accommodationContent && accommodationContent._id)} className="btn btn-sm btn-darker offset-top-50">Edit</Link>}
        </section>
      </div>
	)
}

export default AccommodationItem

