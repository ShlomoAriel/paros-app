// import PropTypes from 'prop-types'
import React  from 'react'
import {Link} from 'react-router'
import image1 from '../../../images/gallery_list-1.jpg';
import image2 from '../../../../public/template/images/gallery_list-2.jpg';
import image3 from '../../../../public/template/images/gallery_list-3.jpg';
import image4 from '../../../../public/template/images/gallery_list-4.jpg';
import image5 from '../../../../public/template/images/gallery_list-5.jpg';
import image6 from '../../../../public/template/images/gallery_list-6.jpg';
import image7 from '../../../../public/template/images/gallery_list-7.jpg';
import image8 from '../../../../public/template/images/gallery_list-8.jpg';
import image9 from '../../../../public/template/images/gallery_list-9.jpg';

const PackageOverview = ({packages})=> {

	return(
    	<main className="page-content">
	      <section className="section-sm-top-133 text-center section-top-31">
	          <div className="shell text-center">
	            <Link to="/package"><h5 className="tt-u">Packages</h5></Link>
	            <ol className="breadcrumb">
	              <li><Link to="/" activeClassName="active">Home</Link></li>
	              <li>About</li>
	            </ol>
	          </div>
	        </section>
	         <section className="section-sm-bottom-60 section-34 border-bottom section-md-top-52">
	          <div className="shell">
	            <div className="row">
	              <div className="col-lg-12 isotope-item">
	                <div className="isotope">
	                  <div className="row">
	                  {
	                  	packages.map( item => 
	                  	<div className="col-xs-12 col-sm-6 col-md-12 col-lg-12 isotope-item">
	                      <div className="media-variant-1 thumbnail-variant-5">
	                      	{

	                      	}
	                      	<Link to={"/package/" + item._id} className="img-link-2 img-link-4 img-link-4-mod-1 media-left">
	                      		<img src={item.image ? item.image: image1} alt="" width="684" height="693"/>
	                      	</Link>
	                        <div className="caption media-body">
	                          <Link className="h5 tt-u" to={"package/"+(item._id)}>{item.name}</Link>
	                          {item.description && <p>{item.description}</p>}
	                          {item.meals && <p>Meals: {item.meals}</p>}
	                          {item.accommodation && <p>Accommadation: {item.accommodation}</p>}
	                          {item.price && <p>Price: {item.price}</p>}
	           				 <Link to={"/package/" + item._id}><h5 className="btn-link">Learn More</h5></Link>
	                        </div>
	                      </div>
	                    </div>
	                    )
	                  }        
	                  </div>
	                </div>
	              </div>
	              {
	              	// <div className="col-xs-12">
		              //   <ul className="pagination clearfix">
		              //     <li className="active"><span> 1</span></li>
		              //     <li><a href="#">2</a></li>
		              //     <li><a href="#">Next page</a></li>
		              //   </ul>
		              // </div>
	              }
	            </div>
	          </div>
	        </section>
	      </main>     
	)
}

export default PackageOverview

