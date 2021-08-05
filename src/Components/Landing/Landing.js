import React from 'react'
import homeLogo from '../../images/home.JPG';
import aboutLogo from '../../images/about.JPG';
import playLogo from '../../images/play.jpg';
import '../Landing/landingStyles.scss';
import { Link } from 'react-router-dom';



function Landing() {
    return (
        <div className='landingContainer'>

            <div className='home'>
                <Link to='/home'>
                <img src={homeLogo} alt='Goal'></img>
                <button class='btn'>Home</button>
                </Link>
            </div>

            <div className='about'>
                <Link to='/about'>
                <img src={aboutLogo} alt='hockey'></img>
                <button class='btn'>About</button>
                </Link>
            </div>

            <div className='play'>
                <Link to='/play'>
                <img src={playLogo} alt='hockey player'></img>
                <button class='btn'>Play</button>
                </Link>
            </div>

        </div>
    )
}

export default Landing
