import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";

export const Navbar = () => {

    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
      
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  return (
    <div className='Nav'>
      <nav>
        <div className='LeftSection'>
          <Link to='/' className='Logo'>
            <img src="/prushallogo.png" alt="Prushal Technologies Logo"/>
            <div className='text'>Prushal Tech.</div>
          </Link>
        </div>
        <div className='RightSection'>
          <div className='Buttons'>
            <Link to="/">Home</Link>
          </div>
        
        
          <div className='Buttons' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link to='/services'>Services </Link> {isHovered && (
          <div className='DropdownContent'>
           <Link to='/webdevelopment'  onClick={scrollToTop}   className='Link'> <div  className='drop_down_service'>Web Development</div></Link>
           <Link to='/data_analytics'  onClick={scrollToTop}   className='Link' ><div  className='drop_down_service'>Data Analysis</div></Link>
           <Link to='/brand_management' onClick={scrollToTop}   className='Link' > <div  className='drop_down_service'>Brand Creation & Management</div></Link>
          </div>
        )} 
          </div>
          <div className='Buttons'>
            <Link to="/about">About Us</Link>
          </div>
          <div className='Buttons'>
            <Link to="/blogs">Blogs</Link>
          </div>
          <div className='Buttons'>
            <Link to='/contact'>Contact Us</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
