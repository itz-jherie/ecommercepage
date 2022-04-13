import React, {useState} from "react";
import './body.css';
import icon from '../../assets/icon-cart.svg';
import mainImg from '../../assets/image-product-1.jpg'
import thumbimg1 from '../../assets/image-product-1-thumbnail.jpg'
import thumbimg2 from '../../assets/image-product-2-thumbnail.jpg'
import thumbimg3 from '../../assets/image-product-3-thumbnail.jpg'
import thumbimg4 from '../../assets/image-product-4-thumbnail.jpg'
import Modal from "../Modal/Modal";


const Body = () => {
    let [count, setCount] = useState(0);

    const handleIncrement = ()=> {
         if(count <= 3){
            setCount(count++)
         }
        
    } 
    const handleDecrement =() => {

        if(count >= 1) {
            setCount(count--)
        }
    }
    
    const [showModal, setShowModal] = useState(false);
    


    return (
        
        <div className="main-container">
            <div className="pic">
                <div class= 'img-container'>
                    <img src={mainImg}  alt="main-img" onClick={()=> setShowModal(true)}> 
                    </img><div></div>
                </div>
                <div className="thumbnails">
                    <img src={thumbimg1} alt="thumbnail1"/>
                    <img src={thumbimg2} alt="thumbnail2"/>
                    <img src={thumbimg3} alt="thumbnail3"/>
                    <img src={thumbimg4} alt="thumbnail4"/>
                </div>
                
            </div>
            <div className="details">
                <p className="detail-p1">SNEAKER COMPANY</p>
                <p className="detail-p2">Fall Limited Edition<br/>Sneakers
                </p>
                
                <p className="detail-p3">
                    These low profile sneakers are your perfect casual wear<br/>
                    companion. Featuring a durable rubber outer sole, they'll<br/>
                    withstand everything the weather can offer.
                </p>
                <div className="detail-p4">
                    <p className="detail-p4a">$125.00 </p>
                    <p className="detail-p4b">50%</p>
                </div>
                <p className="detail-p5">$250.00</p>
                <div className='detail-p6'>
                    <div className="detail-p6a">
                        <p className="detail-p6a1"onClick={ handleDecrement} >-</p> 
                        <p className="detail-p6a2">{count}</p> 
                        <p className="detail-p6a3"onClick = {handleIncrement}>+</p>
                    </div>
                    <div className="detail-p6b">
                        <div className="detail-p6b1">
                            <img src={icon} alt='icon'/>
                            <p>Add to cart</p>
                            </div>
                        </div>
                </div>
            </div>
            <Modal onClose={() => setShowModal(false)}show={showModal}/>
        </div>
        
    )
}
export default Body;