import React from 'react'
import PropTypes from 'prop-types'
import './Loader.css'
const Loader = ({}) => {
    return (
       <div className="loader">
		  <div className="spinner">
		  </div>
		</div>
    )
}

Loader.propTypes = {
    message: PropTypes.string,
    className: PropTypes.string
}

export default Loader
