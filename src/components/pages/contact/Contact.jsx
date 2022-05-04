import React from 'react'
import SocialLink from '../../comp/SocialLink'
import './contact.css'
import './contactno.css'

import ContactNo from './ContactNo'
function Contact() {
  const image1 = '/images/sun_flower.jpg'

  return (
    <div className='contact_container' >
      <h1 align='center'>CONTACT WITH US </h1>

      <h3>CONTACT NUMBERS</h3>

      <ContactNo />
      <br />
      <h3>LEAVE A MESSAGE</h3>
      <h3>Contact form</h3>
      <div className='contact_form_container'>
        <form className='contact_form'>
          <label>
            <p>Email</p><span>:</span>
            <input className='contact_input' name='email' type="email" />
          </label>
          <label>
            <p>Mobile</p><span>:</span>
            <input className='contact_input' name='number' type="number" />
          </label>
          <label>
            <p>Message</p><span>:</span>
            <textarea className='contact_input' name="message" cols="30" rows="10"></textarea>
          </label>
          <label >
            <span></span><span></span>
            <button className='about_btn'>Leave a message</button>
          </label>
        </form>
        <img src={image1} alt='contact side banner' className='banner_image' />
      </div>

      <h3>OUR LOCATION</h3>
      <div className="map_demo"></div>
      <h3>WAY TO COME FROM MAIN STATION WITH BUS OR TRAIN</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, obcaecati?</p>
      <div className='way_guide'>
        <div className="by_train">
          <h5>By Train</h5>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem facilis tempora quaerat id odit ex saepe optio ab reiciendis! Numquam possimus, sint eum consectetur enim laudantium voluptatem saepe minus eaque.

        </div>
        <div className="by_bus">
          <h5>By Bus</h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam expedita dolores cumque odit, suscipit magni. Ipsum deserunt veniam sapiente, assumenda voluptates nam magnam ratione nulla eaque minima ab commodi recusandae.
        </div>
      </div>
      <h3>SOCIAL LINKS</h3>
      <SocialLink />
    </div>
  )
}

export default Contact