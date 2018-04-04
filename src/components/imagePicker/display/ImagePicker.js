import image1 from '../../../images/gallery_list-1.jpg'
import React from 'react'
import '../style/style.css'
const ImagePicker = ({images, setImage})=>{
	// function setImageAndCallback(image){
	// 	setImage('image',image)
	// 	if(parentCallback){
	// 		parentCallback()
	// 	}
	// }
	return(
		<div className="image-picker">
	        <div className="shell">
	          <div className="range">
				{images.map(image =>
	               <div className="cell-sm-4" key={image}>
                  {
                  	<img onClick={()=>setImage('image',image)} src= { image ? image : image1} alt="" />
                  }
	              </div>
	            )}
	            </div>
            </div>
		</div>
		)
}

export default ImagePicker
