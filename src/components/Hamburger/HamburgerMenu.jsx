import React from 'react'
import './HamburgerMenu.css';

const HamburgerMenu = (props) => {
    if(!props.show) {
        return null;
    }
    
    return ( 
        <div className='hamburger-container' onClick={props.onClose}>
            <div className='list-container'>
                <div className='m-menu-text-container' onClick={ e => e.stopPropagation()}>
                    <p onClick={ props.onClose}>X</p>
                    <ul className='menu-list'>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contacts</li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default HamburgerMenu;