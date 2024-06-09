import React from 'react'
import './ProgramPage.css'
import Navbar from '../../components/Navbar/Navbar'
import './ProgramPage.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
import { Link } from 'react-router-dom'
const ProgramPage = () => {
  return (
    <div>
      <div>
      <Navbar/>
      </div>
      <div className='courses'>
            <div className='courses-img'>
                <img src={program_1} alt="" /></div>
                <div className='courses-caption'>
                    <h2>Diploma</h2>
                    <p>
                    A diploma program is a type of educational program offered by various institutions, such as colleges, universities, vocational schools, or technical institutes. These programs typically provide specialized training and education in a specific field or industry.
                    <ul>
                  Key features of diploma programs include:
                    <li>
                    <h4>Focus: </h4>Diploma programs are often focused on practical skills and knowledge relevant to a particular career or industry. They are designed to prepare students for entry-level positions in their chosen field.
                    </li>
                    <li>
                    <h4>Duration:</h4> Diploma programs are usually shorter in duration compared to degree programs. They can range from a few months to a couple of years, depending on the institution and the specific program.
                    </li>
                    <li>
                    <h4>Curriculum:</h4> The curriculum of a diploma program is tailored to provide students with a comprehensive understanding of their chosen field. It may include both theoretical coursework and hands-on training.</li>
                    <li>
                    <h4>Career Opportunities:</h4> Diploma programs often lead directly to employment opportunities in various industries. Graduates may pursue careers in fields such as healthcare, business, technology, hospitality, automotive, and more.</li>
                  </ul>
                  Overall, diploma programs offer a practical and focused approach to education, equipping students with the skills and knowledge needed to succeed in their chosen career paths.
                    </p>
                    <button className= 'btn dark-btn'> <Link to = '/apply-now'> Apply Now </Link> </button> 
                </div></div> 
                <div className='courses'>
                  <div className='courses-img'>
                    <img src={program_2} alt="" /></div>
                    <div className='courses-caption'>
                      <h2>Bachelros</h2>
                      <p>A bachelor's degree is an exciting opportunity for international students to pursue higher education and expand their academic horizons. Offered by universities and colleges worldwide, a bachelor's degree program typically spans three to four years and provides in-depth study in a specific field of interest.

International students can choose from a wide range of bachelor's degree programs, including disciplines such as arts, sciences, engineering, business, humanities, social sciences, and more. Each program offers a unique curriculum designed to equip students with essential knowledge, skills, and competencies relevant to their chosen field.

Studying for a bachelor's degree abroad provides numerous benefits for international students. It offers the opportunity to immerse oneself in a new culture, engage with diverse perspectives, and build a global network of peers and mentors. Additionally, many universities and colleges offer support services tailored specifically for international students, including language assistance, academic advising, and cultural integration programs.

Completing a bachelor's degree opens doors to a wide range of opportunities. Graduates can pursue various career paths, enter the workforce, or continue their education with advanced degrees such as master's or doctoral programs. Additionally, a bachelor's degree is often a prerequisite for many professional roles, providing a solid foundation for future success.

Overall, pursuing a bachelor's degree as an international student is an enriching and transformative experience. It not only provides academic and career advancement but also fosters personal growth, cultural exchange, and lifelong connections with peers from around the world.".</p>
                    
                  </div>
                </div>
          
      </div>
  )
}

export default ProgramPage