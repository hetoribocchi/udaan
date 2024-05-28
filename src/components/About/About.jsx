import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
    return (
        <div className='about'>
            <div className='about-left'>
                <img src={about_img} alt="" className='about-img' />
              <a href="https://www.youtube.com/watch?v=tGlOaSxPR-E" target='_blank'><img src={play_icon} alt="" className='play-icon'/></a>  
            </div>
            <div className='about-right'>
                <h3>About Udaan Education Infosys</h3>
                <h2>Nuturing Tommorow's Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero modi enim, rem dolor blanditiis mollitia sunt dolorum cupiditate corrupti quis corporis sequi ad dignissimos aut necessitatibus quod nobis obcaecati.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero modi enim, rem dolor blanditiis mollitia sunt dolorum cupiditate corrupti quis corporis sequi ad dignissimos aut necessitatibus quod nobis obcaecati.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero modi enim, rem dolor blanditiis mollitia sunt dolorum cupiditate corrupti quis corporis sequi ad dignissimos aut necessitatibus quod nobis obcaecati.</p>
            </div>
        </div>
    )
}

export default About
