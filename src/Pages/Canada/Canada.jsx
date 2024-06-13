import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Canada.css'
import canada_background from '../../assets/Canada-background.jpg'

const Canada = () => {
  return (
    <div>
        <div><Navbar/></div>
        <div className='background'>
          <img src={canada_background} alt="" />
          <div className='background-text'><h1>canada</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem delectus assumenda natus dolores tempore minus tenetur vitae quibusdam. Minus incidunt nemo quidem officia asperiores sed itaque alias ipsa nesciunt nihil.</p></div>
        </div>
    </div>
  )
}

export default Canada