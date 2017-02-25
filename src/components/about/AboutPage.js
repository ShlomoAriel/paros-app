import React from 'react'


class AboutPage extends React.Component{
	render(){
		return(
			<main className="page-content">
       
        <section className="section-sm-top-133 text-center section-top-31">
          <div className="shell text-center">
            <h5 className="tt-u">about</h5>
            <ol className="breadcrumb">
              <li><a href="index.html">Home</a></li>
              <li>About</li>
            </ol>
          </div>
        </section>
       
        <section className="section-md-top-145 section-sm-bottom-153 section-34">
          <div className="shell">
            <h2 className="divider text-center">about us</h2>
            <div className="range">
              <div className="cell-md-4"><img src="images/about-1-370x286.jpg" alt="" width="370" height="286"/></div>
              <div className="cell-md-8 txt-base">
                <div className="inset-md-right-30">
                  <div className="h5">Our Company is the market leader in the area providing a professional comprehensive lettings agency and property management service from our computer linked offices.</div>
                  <div className="h5 offset-top-30">We send tenants SMS and email property alerts to keep applicants informed as new properties come on the rental market, each property is included in our colour brochure and the property estate agents style details are displayed in our offices.</div>
                </div>
              </div>
            </div>
          </div>
        </section>
       
        <section className="text-center section-sm-top-0 section-top-52">
          <div className="shell-fluid inset-left-0 inset-right-0">
            <h2 className="divider text-center">Apartment Styles</h2>
            <div className="range range-condensed">
              <div className="cell-sm-4">
                <div className="thumbnail thumbnail-variant-3"><img src="images/about-2-683x482.jpg" alt="" width="683" height="482"/>
                  <div className="caption"><a href="blog-post.html" className="h5">Luxury Property</a></div>
                </div>
              </div>
              <div className="cell-sm-4">
                <div className="thumbnail thumbnail-variant-3"><img src="images/about-3-683x482.jpg" alt="" width="683" height="482"/>
                  <div className="caption"><a href="blog-post.html" className="h5">Vacation Rentals</a></div>
                </div>
              </div>
              <div className="cell-sm-4">
                <div className="thumbnail thumbnail-variant-3"><img src="images/about-4-683x482.jpg" alt="" width="683" height="482"/>
                  <div className="caption"><a href="blog-post.html" className="h5">Student Living</a></div>
                </div>
              </div>
            </div>
          </div>
        </section>
       
        <section className="text-center">
          <div className="shell-fluid inset-left-0 inset-right-0">
            <div className="range range-condensed txt-white">
              <div className="cell-sm-6 bg-primary">
                <figure className="figure">
                  <figcaption className="figure-caption">
                    <h5 className="tt-u">Find a Rental</h5>
                    <h5>In addition to our online rental locator, we offer area experts that will personally show you rental properties that match your needs. Visit one of our local offices or call to speak with a friendly relocation specialist to begin your apartment or home rental search today.</h5>
                  </figcaption>
                </figure>
              </div>
              <div className="cell-sm-6 bg-starship">
                <figure className="figure">
                  <figcaption className="figure-caption">
                    <h5 className="tt-u">Corporate Housing</h5>
                    <h5>Whether you represent a company in need of corporate housing for your employees or you're booking your own short-term accommodations, we offer high quality furnished corporate apartments, condos, and executive rental homes backed by superior customer service.</h5>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
       
        <section className="section-md-148 text-center section-52">
          <div className="shell inset-left-0 inset-right-0">
            <h2 className="divider">why choose us</h2>
            <div className="range range-condensed offset-md-top-154 offset-md-top-104 offset-top-34">
              <div className="cell-xs-6 cell-sm-4">
                <div className="inset-left-15 inset-right-15"><span className="icon icon-xs icon-gray material-icons-filter_1"></span>
                  <h5 className="tt-u offset-md-top-50">Market knowledge</h5>
                  <p className="offset-md-top-40">Guiding you as to the maximum rental return achievable on your apartment.</p><a href="blog.html" className="btn-link offset-md-top-20">Learn more</a>
                </div>
              </div>
              <div className="cell-xs-6 cell-sm-4 offset-top-40 offset-xs-top-0">
                <div className="inset-left-15 inset-right-15"><span className="icon icon-xs icon-gray material-icons-filter_2"></span>
                  <h5 className="tt-u offset-md-top-50">Relationships</h5>
                  <p className="offset-md-top-40">Established relationships with corporate clients and business networks .</p><a href="blog.html" className="btn-link offset-md-top-20">Learn more</a>
                </div>
              </div>
              <div className="cell-xs-6 cell-sm-4 cell-xs-preffix-3 cell-sm-preffix-0 offset-top-40 offset-sm-top-0">
                <div className="inset-left-15 inset-right-15"><span className="icon icon-xs icon-gray material-icons-filter_3"></span>
                  <h5 className="tt-u offset-md-top-50">Experienced staff</h5>
                  <p className="offset-md-top-40">Our dedicated staff consists of a team of highly trained certified professionals.</p><a href="blog.html" className="btn-link offset-md-top-20">Learn more</a>
                </div>
              </div>
            </div>
          </div>
        </section>
       
        <section className="section-60 txt-white text-center bg-image bg-image-2 section-xl">
          <div className="shell">
            <h2 className="divider divider-variant-1">Our advantages</h2>
            <div className="range">
              <div className="cell-md-10 cell-md-preffix-1">
                <h5>We deal directly with prospects and tenants, saving you time and worry over marketing your rentals, collecting rent, handling maintenance and repair issues, responding to tenant complaints, and even pursuing evictions. Plus, bring our know-how and experience to your property, giving you the peace of mind that comes with knowing your investment is in good hands. Finally, we are an independent contractor, so you avoid the hassles of being an employer.</h5>
              </div>
            </div>
          </div>
        </section>
      </main>
			);
	}
}

export default AboutPage;