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
    review: "Udaan Education Infosys played a crucial role in securing my Canadian visa for Canadore College. Their dedicated assistance and expertise streamlined the application process. Now, as a student at Canadore College, I appreciate their support in making my educational journey abroad possible."
  },
  {
    name: "Ankit Dahal",
    photo: `/student/ANKIT-DAHAL.jpg`,
    college: "/college/centennial.png",
    review: "Udaan Education Infosys made my Canadian visa process stress-free. Their knowledgeable team guided me through every step, ensuring my application was strong. Now enrolled at Centennial College, I'm grateful for their support in making my international education dream a reality."
  },
  {
    name: "Anuja Tamang",
    photo: `/student/Anuja-tamang.jpg`,
    college: "/college/georgian.png",
    review: "Thanks to Udaan Education Infosys, securing my Canadian visa for Georgian College was effortless. Their expert guidance and support made the application process seamless. I'm excited to begin my journey at Georgian College, confident that Udaan Education Infosys has set me up for success abroad."
  },
  {
    name: "Ashmita Regmi",
    photo: `/student/ASHMITA-REGMI.jpg`,
    college: "/college/algoma.png",
    review: "Thanks to Udaan Education Infosys, my Canadian visa process for Algoma University was efficient and stress-free. Their expert guidance and personalized support ensured all requirements were met. Now at Algoma University, I'm grateful for their assistance in achieving my academic aspirations in Canada."
  },
  {
    name: "Ayush Karki",
    photo: `/student/Ayush-Karki.jpg`,
    college: "/college/Niagara-college.png",
    review: "Udaan Education Infosys made my dream of studying at Niagara College in Canada a reality. Their thorough guidance and prompt assistance throughout the visa application process were invaluable. I'm grateful for their professionalism and support, which has set me on the path to a successful academic journey abroad."
  },
  {
    name: "Bhishma Bam",
    photo: `/student/Bhishma-bam.jpg`,
    college: "/college/fleming-college.png",
    review: "Applying for my Canadian visa through Udaan Education Infosys was a seamless experience. Their knowledgeable team provided step-by-step guidance and ensured all necessary documents were in place for my enrollment at Fleming College. Thanks to their support, I am now pursuing my academic goals with confidence in Canada, grateful for Udaan Education Infosys's commitment to my success."
  },
  {
    name: "Bikram Subedi",
    photo: `/student/Bikram-subedi.jpg`,
    college: "/college/Niagara-college.png",
    review: "Udaan Education Infosys played a pivotal role in making my Canadian visa journey smooth and successful. Their meticulous guidance and unwavering support ensured all requirements were met promptly for my enrollment at Niagara College. I am grateful for their expertise and dedication, which have enabled me to pursue my educational aspirations in Canada with confidence and ease."
  },
  {
    name: "Christ Tamang",
    photo: `/student/CHRIST-TAMANG.jpg`,
    college: "/college/centennial.png",
    review: "After successfully securing my Canadian visa through Udaan Education Infosys, I am thrilled to begin my journey at Centennial College. Their expert guidance and seamless support made the entire process stress-free. I am grateful for their professionalism and dedication in helping me achieve my academic goals abroad. Thank you, Udaan Education Infosys!."
  },
  {
    name: "Dolma Sherpa",
    photo: `/student/DOLMA-SHERPA.jpg`,
    college: "/college/st-clair.png",
    review: "Securing my Canadian visa with Udaan Education Infosys was a seamless experience. Their dedicated team provided invaluable guidance and support throughout the application process for St. Clair College. Now, I am excited to embark on my educational journey in Canada, confident that Udaan Education Infosys has equipped me for success. I highly recommend their services to anyone aspiring to study abroad with ease and assurance."
  },
  {
    name: "Dorje Tamang",
    photo: `/student/DORJE-TAMANG.jpg`,
    college: "/college/fleming-college.png",
    review: "After securing my Canadian visa through Udaan Education Infosys, I am excited to start my studies at Fleming College. Their expert guidance and seamless support made the entire process stress-free. I am grateful for their dedication and professionalism, which ensured all my requirements were met. Udaan Education Infosys truly made my dream of studying in Canada a reality, and I highly recommend their services."
  },
  {
    name: "Hera Kumari Ghising",
    photo: `/student/HERA-KUMARI-GHISING.jpg`,
    college: "/college/fleming-college.png",
    review: "After successfully obtaining my Canadian visa with Udaan Education Infosys, I am thrilled to begin my studies at Fanshawe College. Their invaluable support and guidance throughout the application process ensured a seamless experience. I highly recommend Udaan Education Infosys for anyone pursuing their educational dreams in Canada."
  },
  {
    name: "Jenish Siral BK",
    photo: `/student/JENISH-SIRAL-BK.jpg`,
    college: "/college/fleming-college.png",
    review: "Thanks to Udaan Education Infosys, I successfully obtained my Canadian visa and am now enrolled at Fleming College. Their dedicated team provided invaluable support throughout the application process, ensuring all requirements were met efficiently. From visa documentation to pre-departure guidance, their expertise was instrumental in making my dream of studying abroad a reality. I highly commend Udaan Education Infosys for their professionalism and personalized assistance, and I'm excited to embark on this transformative academic journey."
  },
  {
    name: "Kalyan Thapa",
    photo: `/student/Kalyan-Thapa.jpg`,
    college: "/college/Canadore-college.png",
    review: "Udaan Education Infosys played a pivotal role in securing my Canadian visa and admission to Canadore College. Their meticulous guidance and unwavering support made the daunting process seamless. I appreciate their dedication and expertise, ensuring all my requirements were met promptly. Thanks to their assistance, I'm now pursuing my academic goals in Canada with confidence. I highly recommend Udaan Education Infosys to anyone seeking reliable support for studying abroad."
  },
  {
    name: "Kapil Bhandari Thapa",
    photo: `/student/KAPIL-BHANDARI.jpg`,
    college: "/college/fleming-college.png",
    review: "Udaan Education Infosys made my dream of studying at Fleming College in Canada a reality. Their expert guidance and efficient handling of the visa process were invaluable. I'm grateful for their support in navigating this journey smoothly and recommend their services wholeheartedly."
  },
  {
    name: "Karuna Bhandari",
    photo: `/student/KARUNA-BHANDARI.jpg`,
    college: "/college/georgian.png",
    review: "Udaan Education Infosys made my journey to Georgian College in Canada incredibly smooth. Their expert advice and efficient handling of my visa application were exemplary. I'm thankful for their dedicated support, which helped turn my dream of studying abroad into reality. I highly recommend Udaan Education Infosys to anyone looking for reliable guidance in pursuing education overseas."
  },
  {
    name: "laxman GC",
    photo: `/student/laxman-GC.jpg`,
    college: "/college/Niagara-college.png",
    review: "Udaan Education Infosys has been instrumental in making my study abroad journey a success. Their meticulous guidance and unwavering support ensured a seamless visa application process, allowing me to enroll at Niagara College with ease. Their professionalism and commitment to student success are commendable. I highly recommend Udaan Education Infosys to anyone seeking reliable assistance and expert advice for studying in Canada. They truly go above and beyond to fulfill academic dreams."
  },
  {
    name: "Neema Sherpa",
    photo: `/student/neema-sherpa.jpg`,
    college: "/college/fanshawe.png",
    review: "Udaan Education Infosys has been instrumental in realizing my dream of studying at Fanshawe College in Canada. Their expert guidance and personalized assistance made the visa application process seamless and stress-free. I'm grateful for their dedication and professionalism throughout, ensuring all requirements were met efficiently. I highly recommend Udaan Education Infosys to anyone aspiring to study abroad; their support is invaluable in achieving academic goals in Canada."
  },
  {
    name: "Niroj Subedi",
    photo: `/student/NIROJ-SUBEDI.jpg`,
    college: "/college/Niagara-college.png",
    review: "Udaan Education Infosys played a crucial role in securing my visa for Niagara College in Canada. Their comprehensive support and guidance made the application process straightforward and efficient. I appreciate their professionalism and personalized approach, which ensured I could pursue my educational aspirations abroad with confidence. I highly recommend Udaan Education Infosys for anyone seeking reliable assistance in studying overseas."
  },
  {
    name: "Niyukti Luitel",
    photo: `/student/NIYUKTI LUITEL.jpg`,
    college: "/college/st-clair.png",
    review: "Udaan Education Infosys has been instrumental in making my dream of studying at St. Clair College in Canada a reality. Their knowledgeable team provided exceptional guidance throughout the visa application process, ensuring every detail was meticulously handled. I'm grateful for their support and personalized approach, which enabled me to navigate this journey with confidence. I highly recommend Udaan Education Infosys to anyone seeking reliable assistance and expert advice for studying abroad."
  },
  {
    name: "Paras Rayamajhi",
    photo: `/student/PARAS-RAYAMAJH.jpg`,
    college: "/college/Niagara-college.png",
    review: "Udaan Education Infosys played a crucial role in securing my visa for Niagara College, Canada. Their expert guidance and seamless handling of the application process were invaluable. Thanks to their support, I am now pursuing my academic goals confidently. I highly recommend Udaan Education Infosys for their professionalism and commitment to helping students achieve their dreams abroad."
  },
  {
    name: "Pemba gyalu sherpa",
    photo: `/student/Pemba-gyalu-sherpa.jpg`,
    college: "/college/fleming-college.png",
    review: "Thanks to Udaan Education Infosys, I secured my visa for Fleming College, Canada, smoothly. Their dedicated team provided invaluable support and guided me through every step of the application process with professionalism and efficiency. I'm grateful for their expertise and personalized assistance, which made my transition to studying abroad seamless. I highly recommend Udaan Education Infosys for anyone pursuing education in Canada."
  },
  {
    name: "Prasant kunuwar",
    photo: `/student/Prasant-kunuwar.jpg`,
    college: "/college/centennial.png",
    review: "Udaan Education Infosys made my journey to Centennial College in Canada possible with their exceptional guidance and support. They navigated the visa application process seamlessly, ensuring all requirements were met with precision. Their professionalism and personalized approach instilled confidence in me throughout. I'm thankful for Udaan Education Infosys for helping me achieve my educational aspirations abroad. I highly recommend their services to anyone seeking reliable assistance for studying in Canada."
  },
  {
    name: "RANJAN CHAPAGAIN",
    photo: `/student/RANJAN-CHAPAGAIN.jpg`,
    college: "/college/georgian.png",
    review: "Thanks to Udaan Education Infosys, I successfully obtained my visa for Georgian College in Canada. Their expert guidance and meticulous support throughout the application process were invaluable. I appreciate their professionalism and personalized approach, which made my transition to studying abroad smooth and stress-free. I highly recommend Udaan Education Infosys for anyone pursuing education in Canada."
  },
  {
    name: "RISHAV RAUNIYAR SHAH",
    photo: `/student/RISHAV-RAUNIYAR-SHAH.jpg`,
    college: "/college/fanshawe.png",
    review: "Udaan Education Infosys has been instrumental in making my dream of studying at Fanshawe College in Canada a reality. Their knowledgeable team provided exceptional guidance throughout the visa application process, ensuring every detail was meticulously handled. I'm grateful for their support and personalized approach, which enabled me to navigate this journey with confidence. I highly recommend Udaan Education Infosys to anyone seeking reliable assistance and expert advice for studying abroad."
  },
  {
    name: "Roma khanal",
    photo: `/student/Roma-khanal.jpg`,
    college: "/college/Niagara-college.png",
    review: "Thanks to Udaan Education Infosys, I successfully obtained my visa for Niagara College in Canada. Their dedicated assistance and thorough guidance made the application process smooth and stress-free. I appreciate their professionalism and personalized approach, ensuring all necessary documents were meticulously handled. With their support, I am excited to pursue my academic goals at Niagara College. I highly recommend Udaan Education Infosys for their excellent services in facilitating study abroad journeys."
  },
  {
    name: "SALINA KHADKA",
    photo: `/student/SALINA KHADKA.jpg`,
    college: "/college/georgian.png",
    review: "Udaan Education Infosys played a pivotal role in securing my visa for Georgian College in Canada. Their expert guidance and unwavering support throughout the application process were invaluable. I deeply appreciate their professionalism and personalized approach, which made the transition to studying abroad seamless. I highly recommend Udaan Education Infosys to anyone looking for reliable assistance and expertise in pursuing their educational aspirations in Canada."
  },
  {
    name: "SIDDHARTHA KHADKA",
    photo: `/student/SIDDHARTHA KHADKA.jpg`,
    college: "/college/Seneca.png",
    review: "Udaan Education Infosys has been essential in making my dream of studying at Seneca College in Canada a reality. Their thorough guidance and support throughout the visa application process were exceptional. They navigated every step with professionalism and ensured all requirements were met seamlessly. I appreciate their dedication and personalized assistance, which made my transition to studying abroad smooth and exciting. I highly recommend Udaan Education Infosys for anyone pursuing education in Canada."
  },
  {
    name: "SULAV KUMAR GHIMIRE",
    photo: `/student/SULAV-KUMAR-GHIMIRE.jpg`,
    college: "/college/fleming-college.png",
    review: "Thanks to Udaan Education Infosys, I successfully obtained my visa for Fleming College in Canada. Their expert guidance and dedicated support were invaluable throughout the application process. They provided thorough assistance, ensuring all documentation was precise and timely. I commend their professionalism and personalized approach, which made my journey to studying abroad seamless. I highly recommend Udaan Education Infosys to anyone seeking reliable and effective support in pursuing their educational goals in Canada."
  },
  {
    name: "SUMAN KOIRALA",
    photo: `/student/SUMAN-KOIRALA.jpg`,
    college: "/college/fleming-college.png",
    review: "Udaan Education Infosys has been instrumental in my journey to Fleming College, Canada. Their knowledgeable team provided exceptional guidance and support throughout the visa application process, ensuring every detail was meticulously handled. They navigated the complexities with ease, making the experience stress-free. Their professionalism and dedication to student success are commendable. I'm grateful for Udaan Education Infosys for helping me achieve my academic aspirations abroad. I highly recommend their services to anyone looking to study in Canada with confidence."
  },
  {
    name: "Urusha puri",
    photo: `/student/Urusha-puri.jpg`,
    college: "/college/fanshawe.png",
    review: "Udaan Education Infosys played a crucial role in securing my visa for Fanshawe College in Canada. Their expert guidance and unwavering support throughout the application process were invaluable. They ensured all requirements were met seamlessly, making my transition to studying abroad smooth and stress-free. I commend their professionalism and personalized approach. I highly recommend Udaan Education Infosys to anyone seeking reliable assistance and expertise in pursuing education at Fanshawe College."
  },
  
]
export default Testimonials
                  