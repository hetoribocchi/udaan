import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <div className='container'>
        <Title className="program-title" subTitle='What we offer ' title='Our Programs'/>
      <Programs/>
        <About/>
        <Title subTitle='Study Abroad' title='Study in the best universities of the World'/>
        <Campus/>
        <Title subTitle='Testimonials ' title='What our Students says about us'/>
        <Testimonials/>
        <Title subTitle='Contact us' title='Intrested in a course?'/>
        <Contact/>
        <Fotter/>
        </div>
    </div>
  )
}

export default Home
