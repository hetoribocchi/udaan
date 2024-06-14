import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Canada.css'
import toronto from '../../assets/toronto-sunrise.jpg'
import why_canada from '../../assets/why-canada.jpg'

const Canada = () => {
  return (
    <div>
    <Navbar/>
        <div className='background'>
           <div className='background-text'><h1>canada</h1>
           <h2>Rich Culture, Quality Education, Vast Opportunities</h2>
          <p>Canda has much more to offer</p></div>
          </div> 
          <div className='container'>
          <div className='canada-description'>
         <h1>CANADA</h1>
         <div className='description'> 
          <div className='description-img'><img src={toronto} alt="" /></div>
         <p>Education in Canada is one of the highest quality and most prestigious in the world. While studying students are given unique opportunities to gain practical experience in Canadian companies, which significantly enhances their further employment in any country. Upon successful completion of the program, a talented graduate has every chance to immigrate to Canada without major obstacles from the government.</p>
         </div>
         </div>
         <div className='canada-description'>
          <h1>Why canada </h1>
            <div className='description'>
              <div className='description-img'> <img src={why_canada} alt="" /></div>
          <p>
            Studying in Canada as an international student offers a multifaceted experience that encompasses academic excellence, cultural diversity, and abundant opportunities for personal and professional growth. Renowned for its high-quality education system, Canadian universities consistently rank among the best globally, ensuring that students receive top-notch instruction and earn degrees recognized worldwide. Beyond academics, Canada's multicultural environment fosters understanding and appreciation of diverse cultures, enriching students' experiences both inside and outside the classroom. Moreover, Canada's reputation as a safe and welcoming country provides international students with a supportive environment to pursue their studies without compromising their sense of security. With various work opportunities available during and after studies, including internships, co-op programs, and pathways to work permits and permanent residency, Canada offers a promising future for international graduates. Additionally, the country's breathtaking natural landscapes, excellent quality of life, and access to cutting-edge research facilities further enhance the appeal of studying in Canada. In essence, choosing Canada as a study destination promises a holistic educational journey characterized by academic excellence, cultural immersion, and abundant opportunities for personal and professional development.
            </p>
            </div>
            </div>
        </div>
    </div>
   
  )
}

export default Canada