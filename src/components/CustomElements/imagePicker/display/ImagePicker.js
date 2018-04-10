import image1 from './gallery_grid_1.jpg'
import React from 'react'
import '../style/style.css'
const ImagePicker = ({images, section, value, field, onUpdate, toggleOpen, isOpen})=>{
	field = field ? field : 'image'
	function updateField(image){
		toggleOpen()
		onUpdate(field,image, section)
	}
	return(
		<div>
		{ isOpen ?
			<div className="form-modal">
				<div className="image-picker">
			        <div className="shell">
			          <div className="range">
						{images.map(image =>
			               <div className="cell-sm-4" key={image}>
		                  {
		                  	<img onClick={()=>updateField(image) } src= { image ? image : image1} alt="" />
		                  }
			              </div>
			            )}
			            </div>
		            </div>
				</div>
			</div> :
			<div onClick={toggleOpen}>
				<img src= { value ? value : image1} alt="" />
			</div>
		}
		</div>
		)
}

export default ImagePicker
