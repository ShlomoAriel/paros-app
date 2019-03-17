// import PropTypes from 'prop-types'
import React  from 'react'
import Checkbox from '../../../components/CustomElements/Checkbox/Checkbox'
import {Link} from 'react-router'
import TextInput from '../../../components/CustomElements/TextInput/TextInput'
import image1 from '../../../../public/template/images/img/image61).jpg';
import R from 'ramda'
import moment from 'moment'

const PackageItem = ({ categories, packageContent, isAdmin })=> {
	return(
    <div>
      <section className="section-sm-top-133 text-center section-top-31">
        <div className="shell text-center">
              <div><h5 className="tt-u">{packageContent && packageContent.name}</h5></div>
              <ol className="breadcrumb">
                <li><Link to="/" activeClassName="active">Home</Link></li>
                <li>Packages</li>
              </ol>
            </div>
      </section>
        <section className="section-sm-top-133 section-top-31">
          <div className="shell">
            <div className="range">
              <div className="cell-xs-12 cell-sm-6 cell-sm-preffix-3 cell-md-8 cell-md-preffix-2 cell-lg-12 cell-lg-preffix-0 img-height"></div>
            </div>
            <a data-photo-swipe-item="" href="images/image-format-1_original.jpg" className="img-link-5 img-height">
              <img src={ packageContent && packageContent.image ? packageContent.image : image1} alt=""/>
            </a>
            <div className="h5 tt-u offset-top-20">{packageContent && packageContent.name}</div>
            <div className="offset-top-20 border-bottom border-top section-7 fw-300">
               {(packageContent && packageContent.start && packageContent.end) && <time datetime="2016" className="txt-primary"> {moment(packageContent.start).format('DD/MM/YYYY')} - {moment(packageContent.end).format('DD/MM/YYYY')} </time>}
               {packageContent && packageContent.accommodation && <span> / Accommodation: {packageContent.accommodation}</span>}
               {packageContent && packageContent.meals && <span> / Meals: {packageContent.meals}</span>}
            </div>
            <p className="offset-top-20">{packageContent && packageContent.description}</p>
            {packageContent && packageContent.price && <div className="offset-top-20 border-bottom border-top section-7 fw-300"><span className="txt-primary">Price:</span> <span>{packageContent.price}</span></div>}
            <Link to="/package" className="btn btn-sm btn-darker offset-top-50">All Packages</Link>
            {isAdmin && <Link to={"/packageForm/" +  (packageContent && packageContent._id)} className="btn btn-sm btn-darker offset-top-50">Edit</Link>}
          </div>
        </section>
         
      </div>
	)
}

export default PackageItem

