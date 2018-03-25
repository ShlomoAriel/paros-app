// import PropTypes from 'prop-types'
import React  from 'react'
import Checkbox from '../../../components/CustomElements/Checkbox/Checkbox'
import {Link} from 'react-router'
import TextInput from '../../../components/CustomElements/TextInput/TextInput'
import image1 from 'images/gallery_list-1.jpg';
import R from 'ramda'
import moment from 'moment'

const PackageItem = ({categories, packageContent})=> {
	return(
    <div>
    <section className="section-md-top-145 section-sm-bottom-153 section-34">
          <div className="shell">
            <h2 className="divider text-center">{packageContent.name}</h2>
            <div className="range">
              <div className="cell-md-4"><img src= { packageContent.image ? require('images/' + packageContent.image) : image1} alt="" width="370" height="286"/></div>
              <div className="cell-md-8 txt-base">
                <div className="inset-md-right-30">
                  <div className="h5">{packageContent.description}</div>
                </div>
              </div>
            </div>
            <div className="range">
              <div className="cell-md-4"></div>
              <div className="cell-md-8">
                {(packageContent.start && packageContent.end) && <div>Dates: {moment(packageContent.start).format('DD/MM/YYYY')} - {moment(packageContent.end).format('DD/MM/YYYY')}</div>}
                {packageContent.meals && <div>Meals: {packageContent.meals}</div>}
                {packageContent.accommodation && <div>Accommadation: {packageContent.accommodation}</div>}
                {packageContent.price && <div>Price: {packageContent.price}</div>}
              </div>
            </div>
          </div>
        </section>
        <div className="shell text-center">
          <Link to="/package"><h5 className="tt-u">All Packages</h5></Link>
        </div>
    {
     //   <ol className="breadcrumb">
     //        <li><Link to="/" activeClassName="active">Home</Link></li>
     //        <li>About</li>
     //      </ol>
     //    </div>
     //  <div className="shell">
     //    <TextInput {...packageName}/>
     //    {
     //      // R.keys(products).map( groupKey =>
     //      //   <div key={groupKey} className="product-items">
     //      //     <h3>{categories[groupKey].name}</h3>
     //      //   {
     //      //   products[groupKey].map( item =>
     //      //     <div key ={item.id} onClick={()=>toggleSelectedProduct(packageContent.id, item.id)}
     //      //         className={"flex-row product-item" + ( R.contains(item.id, packageContent.products) ? ' active' : '')}>
     //      //        <Checkbox
     //      //             name={'Active'}
     //      //             value={R.contains(item.id, packageContent.products)}
     //      //             // onChange={()=>toggleSelectedProduct(packageContent.id, item.id)}
     //      //             />
     //      //       <div>{item.name}</div>
     //      //       <div>{item.description}</div>
     //      //       <div>{item.price}</div>
     //      //     </div>
     //      //     ) 
     //      //   }</div>
     //      // )
     //    }  
     //  </div>
     // </section>
    }
         
      </div>
	)
}

export default PackageItem

