import React from 'react';
import './Modal.css';

import image1 from '../../assets/image-product-1.jpg'

import thumbimg1 from "../../assets/image-product-1-thumbnail.jpg"
import thumbimg2 from "../../assets/image-product-2-thumbnail.jpg"
import thumbimg3 from "../../assets/image-product-3-thumbnail.jpg"
import thumbimg4 from "../../assets/image-product-4-thumbnail.jpg"

const Modal = (props) => {
        if(!props.show) {
            return null
        }
    return ( 
        <div className='modal' onClick={props.onClose}> 
            <div className='content-container' onClick={ e => e.stopPropagation()}>
                <p onClick={props.onClose}>X</p>
                <div className='main-pic-frame'>
                    <img src={image1} width='200px'  alt='shoe-img'/>
                </div>
                
                <div className='img-grid-container'>
                    <div className='img-grid'>
                       <img src={thumbimg1} width='33px' alt="thumb1"></img>
                       <img src={thumbimg2} width='33px' alt="thumb2"></img>
                       <img src={thumbimg3} width='33px' alt="thumb3"></img>
                       <img src={thumbimg4} width='33px' alt="thumb4"></img>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default Modal;