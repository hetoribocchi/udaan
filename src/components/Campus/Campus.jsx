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
        <div className='gallery-com'>
          <img src={study_canada} alt="" />
        <p> STUDY IN CANADA</p>
        </div>
        <div className='gallery-com'><img src={study_usa} alt="" />
        <p> STUDY IN USA</p></div>
        <div className='gallery-com'><img src={study_uk} alt="" />
        <p> STUDY IN UK</p></div>
        <div className='gallery-com'><img src={study_uk} alt="" />
        <p> STUDY IN Australia</p></div>
      </div>
      <button className='btn dark-btn'>See more Here <img src=
        {white_arrow} alt="" /></button>

    </div>
  )
}

export default Campus
