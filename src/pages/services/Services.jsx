
import React from 'react'
import  "./service.css"
import { Link, NavLink } from 'react-router-dom';
const Services = () => {
    
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
        
  return (
   
        <div className= "Service">


          
            <div className="service_tile_and_line">
            <div className="project_line"></div>
            <div className='project_title'>OUR SERVICES</div>
          </div>
 

          <div className="servicedescription">
          <div className="servicehead">What we Deliver</div>
            <div className='desc1'>Welcome to Prushal Technologies, where our commitment to excellence intersects seamlessly with innovation. At our core, we hold a deep-seated pride in our capacity to provide solutions that are not only timely but also precise. This dedication is powered by our relentless pursuit of advanced technology and bolstered by the expertise of our skilled personnel.
    In an ever-evolving digital landscape, we understand the importance of staying ahead of the curve. That's why we continuously seek out cutting-edge technologies and methodologies to enhance our services. From the latest programming languages to state-of-the-art development tools, we leverage every resource available to ensure that our solutions are at the forefront of industry standards.
    But technology alone is not enough. We recognize that the true measure of excellence lies in the hands of our team members. With their diverse skills, unwavering dedication, and commitment to continuous improvement, they form the backbone of our organization. 
    </div>
    <div  className='desc2'>
    Their passion for innovation drives us forward, propelling us to exceed expectations and deliver results that inspire confidence.
    Whether it's crafting custom web solutions, developing compelling brand identities, or harnessing the power of data analytics, our team stands ready to meet the unique challenges of your business. With a focus on precision, efficiency, and ingenuity, we turn your vision into reality, one solution at a time.
    Experience the difference with Prushal Technologies . Join us on a journey where excellence meets innovation, and together, let's redefine what's possible in the digital realm.
    </div>
    
    </div>
    
     
    <div className="services_section">
    <div className="service_webdevelopment">
        <div className="web_img_section">
            <img className="web_img"  alt ="" src="./web_img.jpg"/>
        </div>
        <div className="web_description">
             <div className="section_tile_and_line">
            <div className="project_line"></div>
            <div className='project_title'>WHAT WE DO</div>
          </div>
 
            <div className="desc_headline">Web Development</div>
            Welcome to Prushal Technology, your one-stop destination for top-notch web development services. With a team of highly skilled developers and designers, we are passionate about crafting engaging and dynamic websites that leave a lasting impression on your target audience. Whether you need a stunning portfolio site to showcase your creative work, a robust e-commerce platform to boost your online sales, or a custom web application to streamline your business processes, we have the expertise to bring your vision to life. Our comprehensive web development solutions encompass responsive design, seamless functionality, and cutting-edge technologies to ensure your website stands out in the digital landscape. Partner with us to unleash the full potential of your online presence and take your business to new heights.</div>
    </div>
    <div className="service_brandmanagement">
        <div className="brand_img_section">
        <img className="brand_img"  alt ="" src="./brand_img.jpg"/>
        </div>
        <div className="brand_description">
        <div className="section_tile_and_line">
            <div className="project_line"></div>
            <div className='project_title'>WHAT WE DO</div>
          </div>
 
        <div className="desc_headline">Brand Creation and Brand Management</div>We specialized in the end-to-end journey of brand creation and management, are passionate about transforming ideas into iconic brands that inspire and empower and are equally dedicated to guiding those brands towards long-term success in a dynamic marketplace.
    Our team of creative visionaries and strategists collaborates closely with you to bring your brand’s vision to life.  With our expertise in logo design, brand positioning, and market analysis, In addition to this effective brand management is crucial for sustained growth and influence for comprehensive brand management strategies that encompass brand positioning, messaging consistency, reputation management, and proactive adaptation to market trends.</div>
    </div>
    <div className="service_dataanalytics">
        <div className="analytics_img_section">
        <img className="analytics_img"  alt ="" src="./analytics_img.jpg"/>
        </div>
        <div className="analytics_description">
        <div className="section_tile_and_line">
            <div className="project_line"></div>
            <div className='project_title'>WHAT WE DO</div>
          </div>
 
        <div className="desc_headline">Data analytics</div>Prushal Technology!  Where innovation meets data-driven excellence. A rising star solutions provider of cutting-edge Data and Analytics services, we redefine the standards of unlocking business potential through insightful data exploration. We are specialized in unraveling the hidden value within your data, leveraging advanced analytics techniques to extract actionable insights that propel your organization forward. Our team of skilled data scientists, analysts, and consultants meticulously analyze your data, uncovering patterns, trends, and correlations that traditional methods often overlook.
    Partner with Prushal Technology and embark on a data-driven journey that will revolutionize your business. Our commitment to excellence, innovation, and industry standards ensures that you receive world-class solutions tailored to your specific needs.</div>
    </div>
    
    
    </div>
    
    
    
    
    <div className="delivering_section">
        <div className="delivering_text">Delivering Beyond Promise</div>
        <div className="service_delivery">
            <div className="web_delivery">
                <div className="web_delivery_logo_section">
                    <img className='web_logo' src ="./web_logo.png" alt = "" />
                </div>
                <div className="delivery_headline">Web Development</div>
                <Link to='/webdevelopment'  onClick={scrollToTop}   className='Link' > <div className="data_delivery_know">Know More </div>
                </Link>
               
            </div>
            <div className="data_delivery">
            <div className="data_delivery_logo_section">
            <img className='data_logo' src ="./data_logo.png" alt = "" />
            </div>
            <div className="delivery_headline">Data and Analytical Services</div>
            <Link to='/data_analytics'  onClick={scrollToTop}   className='Link' > <div className="data_delivery_know">Know More </div>
                </Link>
            </div>
            <div className="brand_delivery">
            <div className="brand_delivery_logo_section">
            <img className='brand_logo' src ="./brand_logo.png" alt = "" />
            </div>
            <div className="delivery_headline">Brand Creation and Brand Management</div>
            <Link to='/brand_management' onClick={scrollToTop}   className='Link' > <div className="data_delivery_know">Know More </div>
                </Link>
            </div>
        </div>
    
    
        <div className="ourservices_bottom_img">
         <img src ="./service_bottom.jpg" alt = "" className="bottom_img" />
         <div alt = "" className="bottom_img_over"/>
        </div>
    
    
     </div>
    
    
    
     
    
        </div>
   
  )
}
export {Services}
