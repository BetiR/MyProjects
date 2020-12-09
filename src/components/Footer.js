import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";


export default function Footer () {
 
    return (
        <div className='footer'>
        <a href="https://www.facebook.com/brainster.co"><FaFacebookF size={30} color="white" /></a>
        <a href="https://www.instagram.com/brainsterco/"><FaInstagram size={30} color="white" /></a>
        <a href="https://www.linkedin.com/school/brainster-co/"><FaLinkedinIn size={30} color="white" /></a>
        <a href="https://twitter.com/BrainsterCo"><FaTwitter size={30} color="white" /></a>
         <h4>© Copyright Brainster 2020, all rights reserved</h4>
        </div>
    );
  }




