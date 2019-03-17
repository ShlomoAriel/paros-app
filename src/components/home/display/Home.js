// import PropTypes from 'prop-types'
import React  from 'react'
import {Link} from 'react-router'
import * as adminActions from '../../../redux/actions/adminActions'
import TextInput from '../../../components/CustomElements/TextInput/TextInput'
import TextAreaInput from '../../../components/CustomElements/TextAreaInput/TextAreaInput'


import image1 from '../../../../public/template/images/img/image61).jpg';

const Home = ({home, packages, menuBar, labels})=> {

	return(
		 <main className="page-content">
        <section className="section-sm-top-133 text-center">
          <div className="shell">
            <h2 className="divider">{home.welcomeTitle.value}</h2>
            <div className="range">
              <div className="cell-md-10 cell-md-preffix-1">
                <h5 className="txt-base">
                {home.welcomeText.value}
                </h5>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section-md-top-150 text-center section-md-bottom-31 section-52">
          <div className="shell-fluid inset-left-0 inset-right-0">
            {
              // <h2 className="divider">מוצרים</h2>
            }
            <div className="range range-condensed">
              <div className="cell-xs-6 cell-md-3 cell-xs-push-1 cell-md-push-1">
                <div className="thumbnail-variant-1"><div className="img-link">
                <img src={home.homeAboutYogaImage.value} alt=""/></div>
                  <div className="caption">
                    <div className="h5 tt-u">{home.sectionNames.yoga}</div>
                    <p>{home.homeAboutYoga.value} <a href='#/yoga'>{labels.more}</a></p>
                  </div>
                </div>
              </div>
              <div className="cell-xs-6 cell-md-3 cell-xs-push-3 cell-md-push-2 offset-top-30 offset-xs-top-0">
                <div className="thumbnail-variant-1"><div className="img-link">
                <img src={home.homeAboutFoodImage.value} alt=""/></div>
                  <div className="caption">
                    <div className="h5 tt-u">{home.sectionNames.food}</div>
                    <p>{home.homeAboutFood.value} <a href='#/food'>{labels.more}</a></p>
                  </div>
                </div>
              </div>
              <div className="cell-xs-6 cell-md-3 cell-xs-push-2 cell-md-push-3 offset-top-30 offset-xs-top-0">
                <div className="thumbnail-variant-1"><div className="img-link">
                <img src={home.homeAboutAccommodationImage.value} alt=""/></div>
                  <div className="caption">
                    <div className="h5 tt-u">{home.sectionNames.accommodation}</div>
                    <p>{home.homeAboutAccommodation.value} <a href='#/accommodation'>{labels.more}</a></p>
                  </div>
                </div>
              </div>
              <div className="cell-xs-6 cell-md-3 cell-xs-push-4 cell-md-push-4 offset-top-30 offset-xs-top-0">
                <div className="thumbnail-variant-1"><div className="img-link">
                <img src={home.homeAboutMoreImage.value} alt="" /></div>
                  <div className="caption">
                    <div className="h5 tt-u">{home.sectionNames.more}</div>
                    <p>{home.homeAboutMore.value} <a href='#/more'>{labels.more}</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
         <section className="text-center">
         <div className="shell-fluid inset-left-0 inset-right-0">
            <h2 className="divider">{menuBar.packages}</h2>
            <div className="range range-condensed">
              <div className="shell-fluid inset-left-0 inset-right-0">
                <div className="range range-condensed">
                { packages &&
                  packages.map(packageContent =>
                  <div key={packageContent._id} className="cell-sm-4 overflow-hidden">
                    <Link className="h5 tt-u" to={"package/"+(packageContent._id)}>
                    <div className="thumbnail">
                      <img src={packageContent.image ? packageContent.image : image1} alt="" width="683" height="482"/>
                      <div className="caption">
                          {packageContent.name}
                        <div className="small">...</div>
                      </div>
                    </div>
                    </Link>
                  </div>)
                }
                </div>
              </div>
            </div>
          </div>
        </section>
        {
          
        // <section className="section-sm-top-130 text-center section-bottom-0 section-top-52">
        //   <div className="shell-fluid inset-left-0 inset-right-0">
        //     <h2 className="divider">{menuBar.gallery}</h2>
        //     <div data-photo-swipe-gallery="gallery" className="range range-condensed">
        //       <div className="cell-xs-4 overflow-hidden"><a data-photo-swipe-item="" data-size="684x693" href="images/index-14-684x693_original.jpg" className="img-link img-link-2">
        //       <img width="684" height="693" src={imageGallery1} alt=""/></a><a data-photo-swipe-item="" data-size="684x1087" href="images/index-17-684x1087_original.jpg" className="img-link img-link-2">
        //       <img width="684" height="1087" src={imageGallery2} alt=""/></a></div>
        //       <div className="cell-xs-4 overflow-hidden margin-xs-top-1"><a data-photo-swipe-item="" data-size="684x916" href="images/index-15-684x916_original.jpg" className="img-link img-link-2">
        //       <img width="684" height="916" src={imageGallery3} alt=""/></a><a data-photo-swipe-item="" data-size="684x864" href="images/index-18-684x864_original.jpg" className="img-link img-link-2">
        //       <img width="684" height="864" src={imageGallery4} alt=""/></a></div>
        //       <div className="cell-xs-4 overflow-hidden margin-xs-top-1"><a data-photo-swipe-item="" data-size="684x730" href="images/index-16-684x730_original.jpg" className="img-link img-link-2">
        //       <img width="684" height="730" src={imageGallery5} alt=""/></a><a data-photo-swipe-item="" data-size="684x1050" href="images/index-19-684x1050_original.jpg" className="img-link img-link-2">
        //       <img width="684" height="1050" src={imageGallery6} alt=""/></a></div>
        //     </div>
        //   </div>
        // </section>
        }
      </main>
	)
}

export default Home

