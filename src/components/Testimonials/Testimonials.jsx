import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonials = () => {
  const slider = useRef()
let tx = 0;

const slideForward = ()=>{
 if (tx > -50) {
    tx -= 25;
 }
 slider.current.style.transform = `translateX(${tx}%)`
}
const slideBackward = ()=>{
  if (tx < 0) {
    tx += 25;
 }
 slider.current.style.transform = `translateX(${tx}%)`
}
  return (
    <div className='testimonials'>
      <h1></h1>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className="user-info">
                <img src={user_1} alt="" />
                <div><h3>William Jackson</h3>
                <span>Edusity, Usa</span></div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente animi molestias fugiat explicabo hic mollitia numquam reiciendis, consequuntur qui doloribus. Aut nesciunt maiores eligendi a eius non exercitationem tenetur magni?</p>
            </div></li>
            <li>
            <div className='slide'>
              <div className="user-info">
                <img src={user_2} alt="" />
                <div><h3>Hari ram</h3>
                <span>london, UK</span></div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente animi molestias fugiat explicabo hic mollitia numquam reiciendis, consequuntur qui doloribus. Aut nesciunt maiores eligendi a eius non exercitationem tenetur magni?</p>
            </div></li>
           <li> <div className='slide'>
              <div className="user-info">
                <img src={user_3} alt="" />
                <div><h3>Shyam</h3>
                <span>toronto, canada</span></div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente animi molestias fugiat explicabo hic mollitia numquam reiciendis, consequuntur qui doloribus. Aut nesciunt maiores eligendi a eius non exercitationem tenetur magni?</p>
            </div></li>
            <li><div className='slide'>
              <div className="user-info">
                <img src={user_4} alt="" />
                <div><h3>gita</h3>
                <span>university of Niagra falls , canada</span></div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente animi molestias fugiat explicabo hic mollitia numquam reiciendis, consequuntur qui doloribus. Aut nesciunt maiores eligendi a eius non exercitationem tenetur magni?</p>
            </div>
        </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
