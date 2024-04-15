import React, { useState } from 'react';
import "./contact.css";
import Maps from '../../components/Maps/Maps';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className='contact1'>
        <div className='contact-container'>
          <div className="contact_us_tile_and_line">
            <div className="contact_line"></div>
          <div className='contact_us_title'>Contact Us</div>
          </div>
          <h1>We'd love to hear from you </h1>
          <p>Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details.</p>
        </div>
        <div className='contact-container'>
          <ul>
            <li>Lets Talk</li>
            <p>(+91) 9850113269,
(+91) 9850603269,
(+91) 9850803269,
(+91) 9762203269</p>
            <hr />
            <li>E-mail Office</li>
            <p>info@prushal.com ,
			hr@prushal.com ,
			prushaltech@gmail.com
</p>
            <hr />
            <li>Branch Office</li>
            <p>Indeed Inspiring Infotech
Flat no 401
Vrudhawan Vishwavilas Society,
BAIF Road, wagoli Pune - 412207
</p>
            <hr />
          </ul>
          <div className="social-links">
            <a href="https://www.instagram.com/prushaltech" target="_blank" rel="noopener noreferrer"><img src="instagram.png" alt="Instagram Logo" width={50} height={50} /></a>
            <a href="https://twitter.com/Prushaltech" target="_blank" rel="noopener noreferrer"><img className="social-link_1" src="linkedin.png" alt="LinkedIn Logo" width={50} height={50} /></a>
            <a href="https://www.facebook.com/prushal" target="_blank" rel="noopener noreferrer"><img  className="social-link_1" src="twitter.png" alt="LinkedIn Logo" width={50} height={50} /></a>
          </div>
        </div>
      </div>

     {/* <div className="form_container">
     <div class="form_input_section">
    <div class="form_input_line_1">
        <div class="form_left_section">
            <div class="form_field_name">First name</div>
            <input type="text" id="first_name" class="form_field_input"/>
        </div>
        <div class="form_right_section">
            <div class="form_field_name">Last Name</div>
            <input type="text" id="last_name" class="form_field_input"/>
        </div>
    </div>
    <div class="form_input_line_1">    
        <div class="form_left_section">
            <div class="form_field_name">Email</div>
            <input type="text" id="subject" class="form_field_input"/>
        </div>
        <div class="form_right_section">
            <div class="form_field_name">Subject</div>
            <input type="text" id="subject" class="form_field_input"/>
        </div>
    </div>
    <div class="form_input_line_2">
        <div class="form_field_name">Message</div>
        <textarea id="message" class="form_field_input form_field_message"></textarea>
    </div>
</div>

      <div className="form_submit_button">
        <div className="form_button_border">
          <div className="form_button_text">Send message</div></div> </div>
     </div> */}

     <form action="https://formspree.io/f/mzbnkezl" method="POST">
  <div className="form_container">
    <div class="form_input_section">
      <div class="form_input_line_1">
        <div class="form_left_section">
          <div class="form_field_name">First name</div>
          <input type="text" name="first_name" class="form_field_input"/>
        </div>
        <div class="form_right_section">
          <div class="form_field_name">Last Name</div>
          <input type="text" name="last_name" class="form_field_input"/>
        </div>
      </div>
      <div class="form_input_line_1">    
        <div class="form_right_section">
          <div class="form_field_name">Email</div>
          <input type="email" id= "email" name="email" class="form_field_input"/>
        </div>
        <div class="form_right_section">
          <div class="form_field_name">Subject</div>
          <input type="text" name="subject" class="form_field_input"/>
        </div>
      </div>
      <div class="form_input_line_2">
        <div class="form_field_name">Message</div>
        <textarea name="message" class="form_field_input form_field_message"></textarea>
      </div>
    </div>

    <div className="form_submit_button">
      <div className="form_button_border">
        <button type="submit" class="form_button_text form_button_border">Send message</button>

      </div>
    </div>
  </div>
</form>



      <Maps />
    </>
  );
};

export default Contact;
