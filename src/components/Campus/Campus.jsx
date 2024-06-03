import React from 'react'
import './Campus.css'
import study_canada from '../../assets/study-canada.jpg'
import study_usa from '../../assets/study-usa.jpg'
import study_uk from '../../assets/study-uk.jpg'
import white_arrow from '../../assets/white-arrow.png'
const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={study_canada} alt="" />
        <img src={study_usa} alt="" />
        <img src={study_uk} alt="" />
        <img src={study_uk} alt="" />
      </div>
        <div className='galary-text'>
          <span><p> STUDY IN CANADA</p></span>
          <span><p> STUDY IN USA</p></span>
          <span><p> STUDY IN UK</p></span>
          <span><p> STUDY IN Australia</p></span>
          </div>
      <button className='btn dark-btn'>See more Here <img src=
        {white_arrow} alt="" /></button>

    </div>
  )
}

export default Campus
