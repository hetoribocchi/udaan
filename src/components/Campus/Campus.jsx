import React from 'react'
import './Campus.css'
import study_canada from '../../assets/study-canada.jpg'
import study_usa from '../../assets/study-usa.jpg'
import study_uk from '../../assets/study-uk.jpg'
import study_australia from '../../assets/study-australia-2.png'
import white_arrow from '../../assets/white-arrow.png'
import { Link } from 'react-router-dom'
const Campus = () => {
  return (
    <div className='campus'>
       <div className="gallery">
       <Link to="/canada"><div className='gallery-com'>
          <img src={study_canada} alt="" />
        <p> STUDY IN CANADA</p>
        </div></Link>
        <Link to="/usa"><div className='gallery-com'><img src={study_usa} alt="" />
        <p> STUDY IN USA</p></div></Link>
        <Link to="/uk"><div className='gallery-com'><img src={study_uk} alt="" />
        <p> STUDY IN UK</p></div></Link>
        <Link to="/australia"><div className='gallery-com'><img src={study_australia} alt="" />
        <p> STUDY IN Australia</p></div></Link>
      </div>

    </div>
  )
}

export default Campus
