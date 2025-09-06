import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume_pdf from '../../assets/MuhammadToufeeqParker_CV.pdf'


  

const Hero = () => {    

const handleView = () => {
    window.open(resume_pdf, "_blank");
  };

  return (
    <div id='home' className='hero'>
        {/* change image to something else */}
     
     <h1><span>I'm Muhammad Toufeeq Parker,</span> a software developer based in South Africa</h1>
     {/* add a description here */}
     <p></p>
     <div className="hero-action">
        <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#Contact'> Connect with me</AnchorLink></div>
        <div className="hero-resume" onClick={handleView}>My resume</div>
     </div>
    </div>
  )
}

export default Hero