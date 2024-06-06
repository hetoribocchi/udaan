import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.svg'
import phone_icon from '../../assets/phone-icon.svg'
import location_icon from '../../assets/location-icon.svg'
import white_arrow from '../../assets/white-arrow.png'
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
    <div className="contact">
        <div className="contact-col">
            <h3>send us a message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magnam cumque impedit doloremque eaque animi, distinctio dolor aspernatur blanditiis ducimus quia asperiores cum exercitationem esse repellat rem pariatur ea voluptas!</p>
            <ul>
                <li><img src={mail_icon} alt="" />udanneducation@gmail.com</li>
                <li><img src={phone_icon} alt="" />01-5215842, +977-98511256312</li>
                <li><img src={location_icon} alt="" />Kamaladi kathmandu</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label >Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label >Phone Numebr</label>
                <input type="tel" name='phone' placeholder='Enter your Mobile Number' required/>
                <label>Write your msg here</label>
                <textarea name="message" rows ="6" placeholder='Enter Your message' required></textarea>
                <button type='submit' className='btn dark-btn'> Submit Now <img src={white_arrow} alt="" /></button>

            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact