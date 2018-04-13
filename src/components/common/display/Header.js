// import PropTypes from 'prop-types'
import React  from 'react'
import {Link, IndexLink} from 'react-router'
import image1 from '../../../../public/template/images/8.png';
import image2 from '../../../../public/template/images/index-2-370x262.jpg';
import image3 from '../../../../public/template/images/index-3-370x262.jpg';

const Admin = ({home, menuBar, setLanguage, logout, authenticated, toggleMenu, menuState})=> {
	  			
	return(
    <div className={'header-wrapper ' + (menuState? 'active':'')}>
		  <header className="page-head bg-lighter header-2 text-center" style={{backgroundImage:"url("+image1+")"}}>
        <div className="top-bar-wrapper">
          <ul className="list-inline">
            <li onClick={()=>setLanguage('hebrew')}><a>עברית</a></li>
            <li onClick={()=>setLanguage('english')}><a>English</a></li>
            {authenticated && <li><Link to="/admin">admin</Link></li>}
            {!authenticated && <li><Link to="/login">login</Link></li>}
            {authenticated && <li><Link onClick={logout}>logout</Link></li>}
          </ul>
          <div className="my-bars"><i className="fas fa-bars" onClick={toggleMenu}></i></div>
        </div>
        <div className="jumbotron-variant-1"><span className="material-icons-notifications_active icon-lg icon-white"></span>
          <h1><a href="./">{home.headerTitle}</a></h1>
          <h5>{home.headerSubtitle}</h5>
        </div>
         <div className="rd-navbar-wrap">
                <nav data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fullwidth" data-sm-device-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-device-layout="rd-navbar-static" className="rd-navbar rd-navbar-static" data-sm-stick-up-offset="900px" data-md-stick-up-offset="900px" data-lg-stick-up-offset="1000px">
                  <div className="rd-navbar-inner">
                    <div className="rd-navbar-inner-wrap">
                        <div className="rd-navbar-panel">
                          <button data-rd-navbar-toggle=".rd-navbar-nav-wrap" className="rd-navbar-toggle"><span></span></button>
                          <div className="rd-navbar-brand"><a href="index.html" className="brand-name">apartments</a></div>
                        </div>
                        <div className="rd-navbar-nav-wrap">
                          <ul className="rd-navbar-nav">
                            <li><IndexLink to="/" activeClassName="active">{menuBar.home}</IndexLink></li>
                            <li><Link to="/about" activeClassName="active">{menuBar.about}</Link></li>
                            <li><Link to="/contact" activeClassName="active">{menuBar.contact}</Link></li>
                            <li><Link to="/package" activeClassName="active">{menuBar.packages}</Link></li>
                            <li><Link to="/gallery" activeClassName="active">{menuBar.gallery}</Link></li>
                          </ul>
                      </div>
                  </div>
                </div>
              </nav>
            </div>
      </header>
    </div>
	)
}

export default Admin

