import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import '../App.css';
import './HeroSection.css';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HeroSection() {
    const navigate = useNavigate();

    const handleWatchTrailer = () => {
        navigate('/video');
    };

    return (
        <div className='hero-container'>
            <h1>Welcome to my website</h1>
            <p>Have a Terrifying Experience</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Explore
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={handleWatchTrailer}>
                    WATCH TRAILER <FontAwesomeIcon icon={faPlay} />
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;

