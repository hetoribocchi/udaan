import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './ApplyNow.css'
import { Form } from 'react-router-dom'


const ApplyNow = () => {
  return (
    <div className='container'>
        <Navbar/>
       <div className='apply-background container'>
          <h1>Udaan Online Application Form</h1>
          <div>
            <Form>

            </Form>
          </div>
       </div>
        </div>
  )
}

export default ApplyNow