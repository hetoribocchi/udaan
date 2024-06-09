import React from 'react'
import './AboutUs.css'
import Navbar from '../../components/Navbar/Navbar'
import about_us from '../../assets/about-us.mp4'

const AboutUs = () => {
  return (
    <div>
        <Navbar/>
        <div className='about-us'>
          <div className='box1'>
          <video src={about_us} autoPlay loop controls></video>
          <h1>Udaan Education Infosys</h1>
          <p>Udaan Education Infosys Pvt. Ltd.  was formed in 2022, as an independent organization, for the promotion of international education with special emphasis on student counseling and consultancy services. Its core objective is to provide formal and authorized link between international education enterprises, national institutions and students planning to study abroad.
          In order to achieve our aim we operate a full-time Education Counseling Service. Our primary goal is to ensure that students who are planning to study abroad are given professional advice and information on the various requirements and procedures in a systematic manner and processing their applications for admission. To support and coordinate education promotions through seminars and exhibitions, marketing and recruitment activities, communicating the needs and visions of our clients in a well-managed and quality assured manner for the realization of the full scope of marketing objectives.
          </p>
          <p>Udaan Education, ensure that students are equipped to cope with change to acquire the correct skills and knowledge in order to continue  their learning and observation skills throughout their lives and to develop positive attitudes that create individual and collective commitment to standards of perfection and excellence.</p>
          <p>Students are strongly advised to consult education reference material available, and through interaction with acknowledged resource centers, and professionals, who have already studied or lived in abroad.</p>
        </div>
        </div>
        <div className='our-services'>
          <div>
            
          </div>
        </div>
    </div>
  )
}

export default AboutUs