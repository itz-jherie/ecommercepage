import React, {useState} from 'react'
import './Navbar.css'
import menu from '../../assets/icon-menu.svg'
import cart from '../../assets/icon-cart.svg'
import avatar from '../../assets/image-avatar.png'
import HamburgerMenu from '../../components/Hamburger/HamburgerMenu'


const Navbar = () => {
    const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

    return (
      <div className="navbar">
         <div className='links'>
           <div className='menu' >
             <img src={menu} alt="menu" onClick={() => setShowHamburgerMenu(true)}/>
               </div>
            <a href='./'className='logo'> sneakers</a>  
                <a href='./'className='link-1'>Collections</a>
                <a href='./' className='link-2'>Men</a>
                <a href='./' className='link-3'>Women</a>
                <a href='./' className='link-4'>About</a>
                <a href='./' className='link-5'>Contact</a>
        </div> 
        <div className='cart'>
          <div className='smt'>
            <img className='carrt'src={cart} alt="cart"/>
            <span className='cart-item-no'>3</span>
            </div>
            <img className='avatar'src={avatar}alt='avatar' width="40" height="40"></img>
            
        </div>
        <HamburgerMenu onClose={() => setShowHamburgerMenu(false)}show={showHamburgerMenu}/>
      </div>
    )
  }
  
  export default Navbar