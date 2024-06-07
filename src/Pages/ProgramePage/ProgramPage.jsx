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
      <div className='diploma'>
            <div className='diploma-img'>
                <img src={program_1} alt="" /></div>
                <div className='diploma-caption'>
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
                <div className='bachelors'>
                  <div>
                    <img src={program_2} alt="" />
                    <div>
                      <h2>Bachelros</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolore tempore sapiente adipisci veniam quis dignissimos? Sit, deserunt dolore aliquam ut veniam ipsa labore placeat aliquid, error sequi debitis. Dignissimos.</p>
                    </div>
                  </div>
                </div>
          
      </div>
  )
}

export default ProgramPage