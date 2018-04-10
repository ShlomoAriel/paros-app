import image1 from '../../../images/gallery_list-1.jpg'
import React from 'react'
import '../style/style.css'
const ImagePicker = ({images, field, setImage})=>{
	field = field ? field : 'image'
	return(
		<div className="image-picker">
	        <div className="shell">
	          <div className="range">
				{images.map(image =>
	               <div className="cell-sm-4" key={image}>
                  {
                  	<img onClick={()=>setImage(field,image)} src= { image ? image : image1} alt="" />
                  }
	              </div>
	            )}
	            </div>
            </div>
		</div>
		)
}

export default ImagePicker
