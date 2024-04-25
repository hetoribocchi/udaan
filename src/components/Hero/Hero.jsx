import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
          <div className='hero-text'>
              <h1>We ensure better education for a better world</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, aliquam sit quo nobis inventore esse exercitationem quis porro deleniti explicabo dolorem? Velit, sit soluta. Quidem odit animi corrupti facere itaque.</p>
              <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
