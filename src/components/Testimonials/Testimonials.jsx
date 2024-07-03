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
      name: "Ashish Dhakal",
      photo: `/student/Ashish-Dhakal.jpg`,
      college: "/college/centennial.png",
      review: "I am incredibly grateful to Udaan Education Infosys for guiding me towards Centennial College. The personalized counseling and support I received were instrumental in making my transition smooth and successful. Centennial College's dynamic environment and excellent faculty have exceeded my expectations, providing me with not only knowledge but also practical skills that are invaluable for my career. I highly recommend Udaan Education Infosys to anyone looking for expert guidance in pursuing education abroad."
    },
    {
      name: "Ashish Dhakal",
      photo: `/student/Ashish-Dhakal.jpg`,
      college: "/college/centennial.png",
      review: "I am incredibly grateful to Udaan Education Infosys for guiding me towards Centennial College. The personalized counseling and support I received were instrumental in making my transition smooth and successful. Centennial College's dynamic environment and excellent faculty have exceeded my expectations, providing me with not only knowledge but also practical skills that are invaluable for my career. I highly recommend Udaan Education Infosys to anyone looking for expert guidance in pursuing education abroad."
    },
  ]

  return (
    <div className='container'>
      <div>
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
