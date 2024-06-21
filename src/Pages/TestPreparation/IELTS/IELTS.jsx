import React from 'react'
import './IELTS.css'
import Navbar from '../../../components/Navbar/Navbar'
import What_ielts from '../../../assets/what-ielts.jpg'
import What_ielts_2 from '../../../assets/what-ielts-2.jpg'
import info_ielts from '../../../assets/info-ielts-2.png'

const IELTS = () => {
    return (
        <div>
            <Navbar />
            <div className="background-ielts">
                <div className='background-ielts-text'>
                    <h1>IELTS</h1>
                </div>
            </div>
            <div className="ielts">
                <div className='info-ielts'>
                    <div className='info-ielts-img'>
                        <img src={info_ielts} alt="" />
                    </div>
                    <div className='info-ielts-text'>
                        <h3>What is IELTS?</h3>
                        <p>IELTS stands for the International English Language Testing System – an English Language proficiency test. Globally, there are more than 4 million test takers a year, making IELTS the world’s most popular English language proficiency test for higher education and global migration.</p>
                        <p> IELTS is developed and run by the British Council in partnership with IDP Education and Cambridge Assessment English.</p>
                    </div>
                </div>
            </div>
            <div className="ielts-light">
                <div className='info-ielts'>
                    <div className='info-ielts-img'>
                        <img src={What_ielts} alt="" />
                    </div>
                    <div className='info-ielts-text'>
                        <h3>Who is it for?</h3>
                        <p>IELTS is recognised by universities and employers in many countries, including Australia, Canada, Ireland, New Zealand, the UK and the USA. It is also recognised by professional bodies, immigration authorities and other government agencies. More than 1.4 million people a year take the test. </p>

                        <p>What is IELTS test like? </p>

                            <p>You can choose between the Academic or General Training versions of the test. All candidates do the same Listening and Speaking sections
                            Level and scores: </p>

                            <p>Multi-level. You get a score between 1 and 9. Half scores such as 6.5 are possible. Universities often demand an IELTS score of 6 or 7. They may also demand a minimum score in each of the 4 sections</p>
                    </div>
                </div>
            </div>
            <div className="ielts">
                <div className='info-ielts'>
                    <div className='info-ielts-img'>
                        <img src={What_ielts_2} alt="" />
                    </div>
                    <div className='info-ielts-text'>
                        <h3>Who is it for?</h3>
                        <p>IELTS is recognised by universities and employers in many countries, including Australia, Canada, Ireland, New Zealand, the UK and the USA. It is also recognised by professional bodies, immigration authorities and other government agencies. More than 1.4 million people a year take the test. </p>

                        <p>What is IELTS test like? </p>

                            <p>You can choose between the Academic or General Training versions of the test. All candidates do the same Listening and Speaking sections
                            Level and scores: </p>

                            <p>Multi-level. You get a score between 1 and 9. Half scores such as 6.5 are possible. Universities often demand an IELTS score of 6 or 7. They may also demand a minimum score in each of the 4 sections</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IELTS