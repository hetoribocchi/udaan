import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
      <Programs/>
        <About/>
        <Title subTitle='Galary ' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='Testimonials ' title='What Students Says'/>
      </div>
    </div>

  )
}

export default App
