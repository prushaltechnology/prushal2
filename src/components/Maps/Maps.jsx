import React from 'react'
import "./maps.css"
const Maps = () => {
  return (
    <div className='map-container'>

   
    <div className='map-container flex flex-row items-center'>
     
        <div className='map-check lg:w-3/5 '>
            <iframe
                // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5970980220777!2d73.89156157488719!3d18.592194482515282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c6d994e8d719%3A0x9453d9228ce9e020!2sGanga%20Aria!5e0!3m2!1sen!2sin!4v1704177350949!5m2!1sen!2sin"
                // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5970980220777!2d73.89156157488719!3d18.592194482515282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c6d994e8d719%3A0x9453d9228ce9e020!2sGanga%20Aria!5e0!3m2!1sen!2sin!4v1704177350949!5m2!1sen!2sin"
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d472.7478027820648!2d73.98021653160927!3d18.574831190262813!3m2!1i1024!2i768!4f13.1!5e0!3m2!1smr!2sin!4v1712994762743!5m2!1smr!2sin" 
                width="100%"
                height="400"
                style={{ border: "0", borderRadius: "8px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    </div>
    
    </div>
  )
}

export default Maps