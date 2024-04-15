
import './about.css'
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const Counter = ({ start, end }) => {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView();
  
    useEffect(() => {
      if (inView && !isVisible) {
        setIsVisible(true);
      }
    }, [inView, isVisible]);
  
    return (
      <div ref={ref} className="counter">
        <CountUp start={isVisible ? start : 0} end={isVisible ? end : 0} duration={2} separator="," />
      </div>
    );
  };
  return (
    <div className='About'>

    <>
     <div className='about'>
      <div className='about-container'>
      <div className="About_tile_and_line">
            <div className="project_line"></div>
          <div className='project_title'>ABOUT US</div>
          </div>

      <h1> PRUSHAL TECHNOLOGY
      </h1>
      <p className='about_head_desc'>PrushalTech wholeheartedly endorses the Digital India initiative of the Indian Government and is fully ready to contribute to this visionary project. Our commitment lies in providing comprehensive solutions for data-intensive business processes, aimed at assisting enterprises in overcoming their operational hurdles and delivering significant value.
</p><br></br>

<p className='about_head_desc'>We provide a range of services to our clients, including Website Design, Web Applications, Big Data Solutions, analytical solutions, data-driven solutions, Cluster Setup, Brand Creation, Brand Management, Digital Marketing Campaigns, and Corporate Trainings.
</p>

      </div>

      <div className='about-container'>
       <img src='/About_us.png'    alt =" " className = 'img1' />
      </div>
     </div>

     <div className='about-para1'>
      <div className='about-para1-container'>
      <div className='what_we_ensure_headline'>What we ensure
</div>
      <p className='about_head_desc' >Through our dedication, proficiency, and unwavering pursuit of excellence, we aim to elevate your brand to unprecedented levels of success, leaving a lasting mark on your desired audience. Our team, composed of imaginative visionaries and strategic minds, works closely with you to actualize your brand's vision. Our objective is to craft brands that connect with the target audience, distinguish themselves from competitors, and leave a lasting impression.

We offer a spectrum of services encompassing data management and analysis, specializing in the conversion of data into valuable insights. Harnessing the capabilities of industry 5.0 tools and technologies, our solutions range from automating Excel for data analysis to establishing data portals and dashboards. We focus on developing predictive models tailored to address diverse functional areas in various industries, including sales and marketing, HR and operations, manufacturing, pharmaceuticals and chemistry, finance, and biotechnology.


</p>
      </div>
      <div className='about-para1-container'>
      <div className='what_we_ensure_headline'>Overview
</div>
      <hr/>
     <p>We at PrushalTech aim to bring together cumulative “Thought Leadership” of seasoned professionals in the IT Industry along with the drive and passion of Industry acknowledged leaders of various verticals and domains.
.</p>
<hr/>
<p>We empower startups, MSMEs, and organizations to establish web-based solutions for efficient process management and data handling. Our focus is on technology enablement to enhance organizational strength and productivity through tailor-made solutions. Additionally, we provide Annual Maintenance Contract (AMC) services, overseeing the management of digital and cloud-based IT infrastructure to ensure seamless operation and optimal performance .</p>
     
      </div>
     </div>
   <hr/>
   <div className='about-para2'>


   <div className="what_we_ensure">
      <div className="what_we_ensure_headline">Satisfaction Guarantee:</div>
<div className="what_we_ensure_desc_1">Commitment to ensuring customer satisfaction.</div>
<div className="what_we_ensure_desc_2">A pledge to deliver services that go beyond initial promises.</div>
   </div>


   <div className="what_we_ensure">
      <div className="what_we_ensure_headline">Client-Centric Focus:</div>
<div className="what_we_ensure_desc_1">Tailoring services to understand and address the specific needs of each client.</div>
<div className="what_we_ensure_desc_2">Fostering a mindset that places the client at the center of decision-making and actions.</div>
   </div>
  

   <div className="what_we_ensure">
      <div className="what_we_ensure_headline">Transparent Communication:</div>
<div className="what_we_ensure_desc_1">Maintaining regular and transparent communication channels.</div>
<div className="what_we_ensure_desc_2">Building trust through openness and honesty in all interactions.</div>
   </div>


   <div className="what_we_ensure">
      <div className="what_we_ensure_headline">Exceeding Service Levels:</div>
<div className="what_we_ensure_desc_1">Striving to surpass agreed-upon service levels by consistently delivering high-quality work.</div>
<div className="what_we_ensure_desc_2">Going the extra mile to meet or exceed client expectations.</div>
   </div>


   <div className="what_we_ensure">
      <div className="what_we_ensure_headline">Additional Services and Resources:</div>
<div className="what_we_ensure_desc_1">Providing extra services or resources that align with and contribute to client goals.</div>
<div className="what_we_ensure_desc_2">Offering value beyond the initially agreed-upon scope.</div>
   </div>


   <div className="what_we_ensure">
      <div className="what_we_ensure_headline">Exceptional Support:</div>
<div className="what_we_ensure_desc_1">Cultivating a client-centric mindset within the team.</div>
<div className="what_we_ensure_desc_2">Ensuring exceptional support to enhance the overall customer experience.</div>
   </div>
  
 
 


   </div>

<div className="stats_section">
  <div className="stats_headline"><h1>Our Company's Impressive Statistics</h1></div>

   <div className="counter_module">
   <div className='Project_Completed'>  <div className="title_project_completed">Project Completed</div>
   <div className="no_stats_counter">  <Counter start={0} end={50} />+</div>
    </div>
    <div className='Satisfaction_Rate'> <div className="title_project_completed">Satisfaction Rate</div>
    <div className="no_stats_counter">  <Counter start={0} end={90} />+</div>
   </div>
   <div className='Years_of_Experience'><div className="title_project_completed">Years of Experience</div> 
   <div className="no_stats_counter">  <Counter start={0} end={10} />+</div>
   </div>
    </div>
    </div>

   <div className="image-container">
       <img src="/About_us_bottom_img.png" className="img4" alt="" width="85%" />
       <div className="overlay-content1" style={{ marginTop: "50px", width : "850px" }}>

           <h1 >Need Help With The Brand Creation? We specialize in the end-to-end journey of brand creation and management. Let Us Help You Simplify the Process.</h1>
           <div className="buttons">
           <Link onClick={scrollToTop}    to='/contact'> <button  className='button-white'  style={{width : "200px"}}>Contact us</button></Link>
              
           </div>
       </div>
   </div>

    </>

      </div>
  )
  }
  export {About};
