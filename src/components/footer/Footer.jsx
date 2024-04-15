import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';
export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
    
  return (
    <div className="footer_class">
    <footer className="Footer">
      <style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap')
</style>
        <h3>Prushal Tech.</h3>
        <div className="Column">
      
         <h4>Our Team</h4>
      
        <p> <Link   onClick={scrollToTop}  className= "Link_footer" to="/about">About Us</Link></p>
        <p>
        <Link   onClick={scrollToTop} className= "Link_footer"to='/contact'>Contact Us</Link>
        </p>
        <p>
        <Link  onClick={scrollToTop} className= "Link_footer"to="/blogs">Blogs</Link>
        </p>
        <p>
        <Link  onClick={scrollToTop}  className= "Link_footer"to='/services'>What We Do</Link>
        </p>
        
        
        
  
        
      </div>
      <div className="Column">
        <h4>More</h4>
        <p>Projects</p>
        <p>Events</p>
        <p>  <Link   className='Link_footer' to="/blogs">Blogs</Link></p>
       
          
        

        <p>Donate</p>
      </div>
      <div className="Column">
        <h4>Connect</h4>
        <p  ><a   className='Link_footer' href="https://www.linkedin.com/company/prushal-technology-pvt-ltd">LinkedIn</a></p>
<p><a  className='Link_footer' href="https://www.instagram.com/prushaltech/">Instagram</a></p>
<p><a  className='Link_footer'href="https://twitter.com/Prushaltech">Twitter</a></p>
<p><a   className='Link_footer'href="https://www.facebook.com/prushal">Facebook</a></p>

      </div>
      {/* <div className="Subscribe">
        <h2>Subscribe to get latest updates</h2>
        <form>
          <input type="email" placeholder="Your email" />
          <button type="submit"><b>Subscribe</b></button>
        </form>
      </div> */}
    </footer>
    </div>
  );
}

