import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './ApplyNow.css'
import { Form } from 'react-router-dom'
import { useState } from 'react'


const ApplyNow = () => {
  const [englishTest, setEnglishTest] = useState (true)
  function ieltsCheck() {
    setEnglishTest(true)
  }
  function pteCheck() {
    setEnglishTest(false)
    
  }
  if (englishTest==true) {
    console.log('ielts');
  } else {
    console.log("pte");
  }
  console.log('reredner');
  return (
    <div className='container'>
        <Navbar/>
       <div className='apply-background container'>
          <h1>Udaan Online Application Form</h1>
          <Form>
            <div className='info-box'>
                <h1>Personal Details</h1>
          <div className='personal-information'>
              <div className='i-box'>
                <label  className = 'required'>Frist Name</label>
                <input type="text" name='First Name' placeholder='Enter your First Name' required />
                </div>
              <div className='i-box'>
                <label >Middle Name</label>
                <input type="text" name='Middle Name' placeholder='Enter Your Middle Name' /></div>
                <div className='i-box'>
                <label  className = 'required'>Last Name</label>
                <input type="text" name='Last Name' placeholder='Enter Your Last Name' required />
                </div>
                <div className='i-box'>
                <label  className = 'required'>Date of Birth</label>
                <input type="date" name='Last Name' placeholder='' required />
                </div>
                <div className='i-box'>
                <label className='required' >Mobile Number</label>
                <input type="phone-number" name='Last Name' placeholder='Enter Your Mobile Number' required />
                </div>
                <div className='i-box'>
                <label className = 'required' >Email Adress</label>
                <input type="Email" name='Last Name' placeholder='Enter Email Adress' required />
                </div>
                </div>
                </div>
                <div>
                <div className='info-box'>
                <h1>Address</h1>
          <div className='adress-information'>
              <div className='i-box'>
                <label  className = 'required'>District</label>
                <input type="text" name='First Name' placeholder='' required />
                </div>
              <div className='i-box'>
                <label  className = 'required'>Ward No.</label>
                <input type="text" name='First Name' placeholder='' required />
                </div>
              <div className='i-box'>
                <label className = 'required' >Province</label>
                <input type="text" name='First Name' placeholder='' required />
                </div>
              <div className='i-box'>
                <label  className = 'required'>Vdc/R.Munipality/Municipality/S.M.C/M.C</label>
                <input type="text" name='First Name' placeholder='' required />
                </div>
              <div className='i-box'>
                <label >Town</label>
                <input type="text" name='First Name' placeholder=''/>
                </div>

                </div>
                </div>
                <div className='info-box'>
                <h1>Academics Details</h1>
          <div className='academic-information'>
              <div className='i-box'>
                <h2>High School/ 12 Class Certificate</h2>
                <label  className = 'required' >Transcript </label>
                <input type="file" accept='.jpg, .jpeg, .png, .pdf' placeholder='' required />
                <label  className = 'required' >Provisional Certificate </label>
                <input type="file" accept='.jpg, .jpeg, .png, .pdf' placeholder='' required />
                <label  className = 'required' >Character Certificate </label>
                <input type="file" accept='.jpg, .jpeg, .png, .pdf' placeholder='' required />
                
                </div>
              <div className='i-box'>
                <h2>Secondary School/SEE/Class 10 </h2>
                <label  className = 'required' >Mark Sheet </label>
                <input type="file" accept='.jpg, .jpeg, .png, .pdf' placeholder='' required />
                <label  className = '' >Provisional Certificate </label>
                <input type="file" accept='.jpg, .jpeg, .png, .pdf' placeholder=''  />
                <label  className = '' >Character Certificate </label>
                <input type="file" accept='.jpg, .jpeg, .png, .pdf' placeholder='' />
                
                </div>
            
              <div className='i-box'>
                <h2> If applying for Master's/PG Certificate Level Program</h2>
                <h2> Bachelors</h2>
                <label  className = '' >Transcript </label>
                <input type="file" accept='.jpg, .jpeg, .png, .pdf' placeholder=''  />
                <label  className = '' >Provisional Certificate </label>
                <input type="file" accept='.jpg, .jpeg, .png, .pdf' placeholder=''  />
                <label  className = '' >Character Certificate </label>
                <input type="file" accept='.jpg, .jpeg, .png, .pdf' placeholder='' />
                <label  className = '' >Degree Certificate </label>
                <input type="file" accept='.jpg, .jpeg, .png, .pdf' placeholder='' />
                
                </div>
                

                </div>
                
                </div>
                <div className='info-box'>
                <h1>English Proficency Test</h1>
          <div className='english-information'>
              <div className='i-tick'>
                <div>
                  <p> IELTS </p><input type="checkbox" defaultChecked={englishTest? true: false}  onClick={ieltsCheck}/>
                </div>
                <div>
                  <p> PTE </p><input type="checkbox"defaultChecked={englishTest? false: true} onClick={pteCheck} />
                </div>
                </div>
             

                </div>
                </div>
                </div>
            </Form>
          
       </div>
        </div>
  )
}

export default ApplyNow