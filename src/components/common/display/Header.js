// import PropTypes from 'prop-types'
import React  from 'react'
import {Link, IndexLink} from 'react-router'
import logo from   "../../../../public/template/images/sealion.png"
import image1 from '../../../../public/template/images/head.png';


const Header = ({home, menuBar, setLanguage, logout, authenticated, toggleMenu, menuState})=> {
	return(
    <div className={'header-wrapper ' + (menuState? 'active':'')}>
		  <header className="page-head bg-lighter header-2 text-center" style={{backgroundImage:"url("+image1+")"}}>
        <div className="top-bar-wrapper">
          <ul className="list-inline ltr">
            <li onClick={()=>setLanguage('hebrew')}><a>עברית</a></li>
            <li onClick={()=>setLanguage('english')}><a>English</a></li>
            <li onClick={()=>setLanguage('french')}><a>François</a></li>
            {authenticated && <li><Link to="/admin">admin</Link></li>}
            {!authenticated && <li><Link to="/login">login</Link></li>}
            {authenticated && <li><Link onClick={logout}>logout</Link></li>}
          </ul>
          <div className="my-bars"><i className="fas fa-bars" onClick={toggleMenu}></i></div>
        </div>
        <div className="jumbotron-variant-1">
          <span className="location-title">
            <span>{home.headerLocationTitle.value}</span>
            <span><img src={logo}/></span>
          </span>
          <h1><a href="./">{home.headerTitle.value}</a></h1>
          <h5>{home.headerSubtitle.value}</h5>
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
                            <li><IndexLink onClick={toggleMenu} to="/" activeClassName="active">{menuBar.home}</IndexLink></li>
                            <li><Link onClick={toggleMenu} to="/about" activeClassName="active">{menuBar.about}</Link></li>
                            <li><Link onClick={toggleMenu} to="/paros" activeClassName="active">{menuBar.paros}</Link></li>
                            {//<li><Link onClick={toggleMenu} to="/contact" activeClassName="active">{menuBar.contact}</Link></li>
                            }
                            <li><Link onClick={toggleMenu} to="/package" activeClassName="active">{menuBar.packages}</Link></li>
                            <li><Link onClick={toggleMenu} to="/gallery" activeClassName="active">{menuBar.gallery}</Link></li>
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

export default Header

