
import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import "./blog.css" ;

import blog_1 from './blog_images/blog_1.jpeg' ;
import blog_2 from './blog_images/blog_2.jpeg';
import blog_3 from './blog_images/blog_3.jpeg';
import blog_4 from './blog_images/blog_4.jpeg';
import blog_5 from './blog_images/blog_5.jpg';
import blog_6 from './blog_images/blog_6.jpg';
import blog_7 from './blog_images/blog_7.jpg';
import blog_8 from './blog_images/blog_8.jpg' ;

const Blogs = () => {
    const blogsData = [
        {
          id: 1,
          blog_Date: "March 25, 2024",
          blog_img: blog_1,
          blog_headline: "GitHub & Git: A Complete Guide",
          blog_desc: "A distributed version control system called Git tracks changes made to your software" ,
        },
    {
          id: 2,
          blog_Date: "March 1, 2016",
          blog_img: blog_2,
          blog_headline: "The Business Analyst Role",
          blog_desc: "Responsibilities, Life Cycle, Tools, and Opportunities"
        } ,
        {
            id: 3,
            blog_Date: "March 1, 2016",
            blog_img: blog_3,
            blog_headline: "What is Marketing Analytics?",
            blog_desc: "the practice of using data analysis techniques to gain insights into marketing"
          } ,
          {
            id: 4,
            blog_Date: "March 1, 2016",
            blog_img: blog_4,
            blog_headline: "An Introduction to the Django Framework",
            blog_desc: "Building Web Applications with Ease"
          } ,
          // {
          //   id: 5,
          //   blog_Date: "March 1, 2016",
          //   blog_img: blog_5,
          //   blog_headline: "Fifth Blog Headline",
          //   blog_desc: "Description of the second blog."
          // } ,
          // {
          //   id: 6,
          //   blog_Date: "March 1, 2016",
          //   blog_img: blog_6,
          //   blog_headline: "Second Blog Headline",
          //   blog_desc: "Description of the second blog."
          // } ,  
          // {
          //   id: 7,
          //   blog_Date: "March 1, 2016",
          //   blog_img: blog_7,
          //   blog_headline: "Second Blog Headline",
          //   blog_desc: "Description of the second blog."
          // } ,  
          // {
          //   id: 8,
          //   blog_Date: "March 1, 2016",
          //   blog_img: blog_8,
          //   blog_headline: "Second Blog Headline",
          //   blog_desc: "Description of the second blog."
          // } ,  
    ];

  
     
    return (
        <div className='blogs_section'>

            <div className="blogs_headtag_blur">
                <div className="blogs_head_text">Blog & Updates| Have a look at some interesting reads  </div>

                
                <div className="social_accounts_blog">  <a className="social-fb-third-retail" href="https://www.linkedin.com/company/prushal-technology-pvt-ltd/mycompany/" target="_blank" rel="noreferrer">
                <div className="blog_link_head">Prushal Technology on LinkedIn -{'>'}</div>
                              </a> </div>
            </div>
        
            <div className="blogs-container">
            {blogsData.map(blog => (
               <Link  className = "Link" to={`/Blogs/${blog.id}`}>
            <div className="blog-item" key={blog.id}>
             
                <div className="blog_img_sec">
                  <img className="blog_img" src={blog.blog_img} alt="Blog" /> 
                </div>
                <div className="blog-content">
                  <div className="blog-date"> Blog : # {blog.id} | <span style={{ color: '#707070' }}>{blog.blog_Date}</span></div>
                  <div className="blog-headline">{blog.blog_headline}</div>
                  <div className="blog-desc">{blog.blog_desc}</div>
                  <div className="blog_full_read">Read More -{'>'}</div>
                </div>
            
            </div>
            </Link>
          ))}
                {/* <div className="blog_underline"></div> */}
            </div>

          {/* <div className="subscribe_section_newsletter">
              <div className="subscribe_head">Subscribe to our newsletter</div>
              <div className="subscribe_sub_heading">Receive updates on new blog posts & Tech updates</div>
              <div className="subscribe_email_button">
                <div className="input_subscribe_field">
                    <input type="email" id="email" name="email" placeholder="Enter your email"  required />
                </div>
                <div className="subscribe_button">
                    <div className="subscribe_border">
                        <div className="subscribe_text">Subscribe</div>
                    </div>
                </div>
              </div>
          </div> */}
        </div>
    );
}

export default Blogs;