import React from 'react'
import './home.css';
import { Link } from 'react-router-dom';
import { FaBuilding } from "react-icons/fa";
import { GiDivergence, GiTalk } from "react-icons/gi";
import { RiChatHeartFill } from "react-icons/ri";
import { BiSolidBrain } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";
import { FaCircleArrowRight } from "react-icons/fa6";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
    
  return (
    <div className='Home'>
      <div className='landing'>
        <img src="./Homebg.png" alt=""  className='bg'/>
        <div className='image_text'>Connecting Brands with Pixel-Perfect Web Design</div>
        <Link to='/services'> <button className='what_button'>What We Do</button></Link>  
      </div>


      <div className="landing1">

      

        <div className="landing1_text_img">

      


  <div className="landing1_text_section">
  <div className='knowaboutus'>
        <div className='knowaboutusline'></div>
        <div className='knowaboutustext'>
          KNOW ABOUT US</div> 
         </div>
  <div className="landing1texthead">Prushal Technology Private Limited</div>
  <div className="landing1_text_desc">
    <div className='landing1text1'>
          PrushalTech empowers enterprises to navigate and triumph over the intricate
challenges inherent in their business landscapes. As champions of the Digital India
vision, we are poised to deliver excellence, acting as catalysts for progress and digital
evolution.
</div>
<div className='landing1text2'>
Our comprehensive approach ensures that businesses not only adapt to the dynamic
digital environment but also thrive wand prosper in the face of ever-evolving challenges.
</div>

</div> 
<Link className='link'  onClick={scrollToTop}  to="/about"> <div className="landing1button">Learn more</div></Link>

</div>

<div className="landing1img"> <img className="landing1img" src ="/Landing1.jpg"  /></div>
        </div>
       
        </div>


        <div className='landing2'>
  <div className='landing2img'>
        <img  className='landing2img' src="/homedelivery.jpg" alt="" />
      </div>
    <div className='landing2text'>
     
      <h2 className='landing2texthead'>Delivering Services Beyond Promise</h2>
        <div className='textandline'>
       
        <div className='line2'></div>
        <div className='ltext'>
        <div className='landing2text1'>
             <div className='icon1'><FaBuilding/></div>
            Focus on understanding and addressing the specific needs of each client.
            </div>
            <div className='landing2text1'>
            <div className='icon1'><GiTalk/></div>
            Maintain regular, transparent communication to build trust and manage expectations.
            </div>
            <div className='landing2text1'>
            <div className='icon1'><RiChatHeartFill/></div>
            Strive to exceed agreed-upon service levels by delivering high-quality work.
            </div>
            <div className='landing2text1'>
            <div className='icon1'><BiSolidBrain/></div>
            Provide additional servicers or resources that align with client goals.
            </div>
            <div className='landing2text1'>
            <div className='icon1'><BiSupport/></div>
            Foster a client-centric mindset within your team, offering exceptional support.
            </div>
        </div>
        </div>
    </div>
  </div>



  <div className='landing3'>
    <div className='landing3heading'>
      <div className='landing3head'>Our Services</div>
      <div className='line3'></div>
    </div>
   
    <div className="sqauresec">
            <div className="webdev">
                    <img className='webdevimg' src ="./webdev.png" alt = "" />
                <div className="webdevhead">Web Development</div>
                <div className='webdevcontent'>We specialize in creating iconic brands from ideas, collaborating closely for resonance and success in a dynamic marketplace.</div>
                <Link to='/webdevelopment' onClick={scrollToTop}   className='Link' ><button className="webdevbutton">See more</button></Link>
            </div>
            <div className="data">
              <img className='data_img' src ="./data.png" alt = "" />
              <div className="datahead">Data and Analytical Services</div>
              <div className='datacontent'>Unlock business potential with innovative analytics services. We reveal actionable insights, revolutionizing your business.</div>
              <Link to='/data_analytics'  onClick={scrollToTop}   className='Link' > <button className="databutton">See more</button> </Link>
            </div>
            <div className="brand">
              <img className='brand_image' src ="./brandcrea.png" alt = "" />
              <div className="brandhead">Brand Creation and Brand Management</div>
              <div className='brandcontent'>Expert brand management and creation services to establish and enhance your brand's identity and presence effectively.</div>
              <Link to='/brand_management' onClick={scrollToTop}   className='Link' ><button className="webdevbutton">See more</button></Link>
            </div>
        </div>
  </div>


  <div className='landing4'>
    <div className='joinus'>
      <div className="joinus_bg_img"> <img  className='joinusbg' src="/joinus.png" alt="" /></div>
      <div className='contentjoin'>Need Help With The Brand Creation? We specialize in the end-to-end journey of brand creation and management. Let Us Help You Simplify the Process.</div>
      <div className='buttons_landing4'>
        <Link to ="/contact" onClick={scrollToTop} ><button className='first_landing4'>Contact Us</button></Link>
        <Link to ="/contact" onClick={scrollToTop} > <button className='second_landing4'>Help</button></Link>
      </div>
    </div>
  </div>



  <div className='landing5'>
    <div className='newsletter'>
      <div className='newsletterheading'>
        Newsletter
      </div>
      <div className='line4'></div>
      </div>
      <div className='newsletterphotos'>


        <div className='newletter_section'>
        <Link  to="https://www.linkedin.com/pulse/github-git-complete-guide-indeedinspiring/?trackingId=lRoZy5FXM5F%2FeHXd8TfNDg%3D%3D" target="_blank" rel="noopener noreferrer">
    <div className="newsletter_img_and_desc">
        <img className="newsletter_img" src="./newsletter1.png" alt="" />
        <div className="newsletter_desc">How to help engineers make time for on-the-job training</div>
    </div>
</Link>
        </div>



        <div className='newletter_section'>
    <Link to="https://www.linkedin.com/pulse/business-analyst-role-responsibilities-life-cycle-tools/?trackingId=m9zBRUpt7ELqqXAJId%2BiCg%3D%3D" target="_blank" rel="noopener noreferrer">
        <div className="newsletter_img_and_desc">
            <img className="newsletter_img" src="./newsletter2.png" alt="" />
            <div className="newsletter_desc">ChatGPT's new ‘Browse with Bing’: Watching AIs stalk you is odd</div>
        </div>
    </Link>
</div>


        <div className='newletter_section'>
        <div className="newsletter_img_and_desc">     
          <Link to= "https://www.linkedin.com/pulse/introduction-django-framework-building-web-applications/?trackingId=mkORTLqUCEW328ogigyPiQ%3D%3D" target="_blank" rel="noopener noreferrer">
          <img  className="newsletter_img" src="./newletter3.png" alt="" />
        <div className="newsletter_desc">New Research Points to Causes for Brain Disorders with No Obvious Injury</div>
        </Link>
        </div>
        </div>



        <div className='newletter_section'>
        <div className="newsletter_img_and_desc">
          <Link to="https://www.linkedin.com/pulse/marketing-analytics-indeedinspiring/?trackingId=lFgrEs46oBqTijmohp8RKQ%3D%3D">
        <img className="newsletter_img" src="./newsletter4.png" alt="" />
        <div className="newsletter_desc">Self-Fixing and Auto-Code with AI: Debating the Pros and Cons</div>
        </Link>
        </div>
        </div>
     



      </div>
    </div>
    <div className='landing6'>
      <div className='overviewhead'>
      <div className='landing6heading'>
        Company Overview
      </div>
      <div className='line5'></div>
      </div>
      <div className='overviewcontent'>
   
      <div className='ourvision'>
          <div className='ourvisionbox'>
            <div className='overviewcontent_headline'>
              Our VISION
            </div>
            <div className='ourvisioncontent'>
            " Be and be recognized as the best solution provider for the businesses and the individuals across the globe. "
            </div>
        
          </div>
        </div>  <div className='ourvision'>
          <div className='ourvisionbox'>
          <div className='overviewcontent_headline'>
              OUR MISSION

            </div>
            <div className='ourvisioncontent'>
            " Manifesting Automation and transformation for the improvement and betterment of the business process and upliftment of individual lives. "
            </div>
        
          </div>
        </div>


        <div className='ourvision'>
          <div className='ourvisionbox'>
          <div className='overviewcontent_headline'>
              OUR VALUE
            </div>
            <div className='ourvisioncontent'>
           " Customer Satisfaction First "  <hr></hr>            
             " Deliver Beyond Promise "

            </div>
        
          </div>
        </div>
       
      </div>
    </div>



</div>
  )
}
export {Home};