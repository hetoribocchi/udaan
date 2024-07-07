import React, { useRef } from 'react'
import './Testimonials.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import Ashbin_photo from '../../assets/Ashbin-Shrestha.jpg'
// import TestimoniallsApi from './TestimoniallsApi'

const Testimonials = () => {
  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "#223a80" }}
  //       onClick={onClick}
  //     />
  //   );
  // }
  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "#223a80" }}
  //       onClick={onClick}
  //     />
  //   );
  // }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const data = [
    {
      name: "Ashbin Shrestha ",
      photo: '/student/Ashbin-Shrestha.jpg',
      college: `/college/georgian.png`,
      review: "I am Ashbin Shrestha, a student from Nepal, and I am currently studying at Georgian College in Canada, thanks to the outstanding support from Udaan Education Infosys. Their expert guidance made the entire process seamless, from application to visa approval. The team at Udaan Education Infosys was always available to address my queries and provided invaluable assistance every step of the way. Georgian College has exceeded my expectations with its excellent academic programs, experienced faculty, and vibrant campus life. I am grateful to Udaan Education Infosys for helping me achieve my dream of studying abroad and setting the foundation for a successful future."
    },
    {
      name: "Ashish Dhakal",
      photo: `/student/Ashish-Dhakal.jpg`,
      college: "/college/centennial.png",
      review: "I am incredibly grateful to Udaan Education Infosys for guiding me towards Centennial College. The personalized counseling and support I received were instrumental in making my transition smooth and successful. Centennial College's dynamic environment and excellent faculty have exceeded my expectations, providing me with not only knowledge but also practical skills that are invaluable for my career. I highly recommend Udaan Education Infosys to anyone looking for expert guidance in pursuing education abroad."
    },
    {
      name: "Milan Lama ",
      photo: `/student/Niran-Lama.jpg`,
      college: "/college/georgian.png",
      review: "Choosing Georgian College with the guidance of Udaan Education Infosys has been one of the best decisions of my life. Udaan Education Infosys provided me with personalized support throughout the entire application process, ensuring I had all the information and resources needed to succeed. Canadore College has exceeded my expectations with its dedicated faculty, state-of-the-art facilities, and hands-on learning opportunities. The practical skills and industry knowledge I've gained here are invaluable, and I feel well-prepared for my career ahead. I am immensely grateful to Udaan Education Infosys for their expertise and unwavering support."
    },
    {
      name: "Krishna Prasad Wagley",
      photo: `/student/Krishna-Prasad.jpg`,
      college: "/college/centennial.png",
      review: "My experience at Centennial College, guided by Udaan Education Infosys, has been nothing short of transformative. Udaan Education Infosys provided me with invaluable support and guidance throughout the entire application and enrollment process. Centennial College's diverse community, exceptional faculty, and cutting-edge facilities have provided me with an enriching educational experience. The practical knowledge and skills I've gained here are preparing me for a successful career in my field. I highly recommend Udaan Education Infosys for their professionalism and commitment to student success."
    },
    {
      name: "Abhishek Tamang",
      photo: `/student/ABISHEK-TAMANG.jpg`,
      college: "/college/fleming-college.png",
      review: "Choosing Fleming College with the support of Udaan Education Infosys has been a life-changing decision for me. Udaan Education Infosys provided me with personalized guidance and assistance every step of the way, making the process of applying to an international college smooth and stress-free. Fleming College's welcoming environment, dedicated professors, and practical approach to learning have exceeded my expectations. The hands-on experience and industry-relevant skills I am acquiring here are preparing me well for my future career. I am grateful to Udaan Education Infosys for their expertise and unwavering support throughout my journey."
    },
    {
      name: "Bishal Bharati",
      photo: `/student/Bishal-barathi.jpg`,
      college: "/college/Niagara-college.png",
      review: "My experience at Niagara College, guided by Udaan Education Infosys, has been truly remarkable. Udaan Education Infosys provided me with invaluable support and guidance throughout my journey to Niagara College, ensuring a smooth transition and successful enrollment. Niagara College's supportive community, knowledgeable faculty, and hands-on learning opportunities have surpassed my expectations. The practical skills and industry connections I've gained here are invaluable for my career development. I highly recommend Udaan Education Infosys for their professionalism and dedication to helping students achieve their academic goals."
    },
    {
      name: "Khem Raj Paneru",
      photo: `/student/Khem-raj.JPG`,
      college: "/college/Canadore-college.png",
      review: "My experience at Niagara College, guided by Udaan Education Infosys, has been truly remarkable. Udaan Education Infosys provided me with invaluable support and guidance throughout my journey to Niagara College, ensuring a smooth transition and successful enrollment. Niagara College's supportive community, knowledgeable faculty, and hands-on learning opportunities have surpassed my expectations. The practical skills and industry connections I've gained here are invaluable for my career development. I highly recommend Udaan Education Infosys for their professionalism and dedication to helping students achieve their academic goals."
    },
  ]

  return (
    <div className='container '>
      <div className='testimonial'>
        <Slider {...settings}>
          {data.map((d) => (
            <div className='card'>
              <div className='up-card'>
                <img src={d.photo} alt="" />
              </div>
              <div className='down-card'> <h1>
                {d.name}</h1>
                <img src={d.college} alt="" />
                <p>{d.review}</p></div>
            </div>

          ))}</Slider></div>

    </div>
  )
}

export default Testimonials
