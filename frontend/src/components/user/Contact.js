import React from 'react';
import '../styles/contact.css';
import { RiTwitterLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Contact = () => {
  return (
      <div className="contact-container">
          <div className="contact-card">
               <h2>Contact Me</h2>
                  <form>
                      <input type="text" placeholder='Email...'/>
                      <input type="text" placeholder='Subject...'/>
                      <textarea placeholder='Type your message...'></textarea>
                      <button type="submit">Send</button>
                  </form>
               <span className="navigation-link"><Link id='link' to='/'>Home</Link></span>   
                  <div className="icons">
                      <span className="icon"><RiTwitterLine /></span>
                      <span className="icon"><FaFacebookF /></span>
                      <span className="icon"><FaLinkedinIn /></span>
                      <span className="icon"><FaInstagram /></span>
                  </div>
          </div>
      </div>
  )
}

export default Contact