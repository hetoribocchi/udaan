import React from 'react'
import Title from '../../components/Title/Title'
import About from '../../components/About/About'
import Campus from '../../components/Campus/Campus'
import Testimonials from '../../components/Testimonials/Testimonials'
import Contact from '../../components/Contact/Contact'
import Fotter from '../../components/Fotter/Fotter'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Programs from '../../components/Programs/Programs'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
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
