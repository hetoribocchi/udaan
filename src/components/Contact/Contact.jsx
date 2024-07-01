import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.svg'
import phone_icon from '../../assets/phone-icon.svg'
import location_icon from '../../assets/location-icon.svg'
import white_arrow from '../../assets/white-arrow.png'
import Title from '../Title/Title'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dbf55b7e-40a3-44fe-aea7-1f899b6a636d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
    <div className="contact">
      <div className="contact-col">
        <h3>send us a message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magnam cumque impedit doloremque eaque animi, distinctio dolor aspernatur blanditiis ducimus quia asperiores cum exercitationem esse repellat rem pariatur ea voluptas!</p>
        <ul>
          <li><img src={mail_icon} alt="" />ssd.udaaaneducation@gmail.com</li>
          <li><img src={phone_icon} alt="" />01-5916536, +977-9841174718</li>
          <li><img src={location_icon} alt="" /> <div className='location'>  <p>Kathmandu Metropolitan City 28, Kamaladi, Kathmandu, Nepal</p>
          <p> Shanta Marga, House no. 177</p>
          <p> Opposite to Pragya Pratisthan/ Prabhu Bank</p></div></li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label >Your Name</label>
          <input type="text" name='name' placeholder='Enter your name' required />
          <label>Email Adress</label>
          <input type="text" name='Email' placeholder='Enter your Email Address' required />
          <label>Intrested Courese</label>
          <input type="text" name='Course' placeholder='Write The Course You are Intrested In' required />
          <label>Write your msg here</label>
          <textarea name="message" rows="6" placeholder='Enter Your message' required></textarea>
          <button type='submit' className='btn dark-btn'> Submit Now <img src={white_arrow} alt="" /></button>

        </form>
        <span>{result}</span>
      </div>
      
    </div>
    <Title title='Visit us at' />
    <div className='map container'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3420149417752!2d85.31696127425404!3d27.70672452552117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb197ac4466e65%3A0xeddbb3f5c4ed807f!2sUdaan%20Education%20Infosys%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1719568837310!5m2!1sen!2snp" width="100%" height="100%" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
  )
}

export default Contact
