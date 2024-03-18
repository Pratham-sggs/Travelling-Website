import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
          </div>
        </div>
        
          <div class='footer-link-items'>
            <h2>Social Media</h2> 
            <a href='https://www.instagram.com/mr_pratham189/' target="_blank" rel="noopener noreferrer">Instagram </a>
            <a href='https://www.facebook.com/profile.php?id=100071083053623' target="_blank" rel="noopener noreferrer">Facebook </a>
            <a href='https://twitter.com/Mr_Prathmesh189' target="_blank" rel="noopener noreferrer">X</a>
            <a href='https://www.linkedin.com/in/prathmesh-ushkewar-565932254/' target="_blank" rel="noopener noreferrer">Linked In</a>
          </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
             
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>TAVEL © 2024</small>
          <div class='social-icons'>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
