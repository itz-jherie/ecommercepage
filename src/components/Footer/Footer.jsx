import React from "react";
import './Footer.css'


const Footer = () => {
    const dater = new Date();
    const date = dater.getFullYear();
    return ( 
        <div>
                <div className="footer">
                    Frontend Mentor Project <br/> Developed by JHERIE <br />{date}
                 </div>
        </div>
       
     )
}
 
export default Footer;