import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'


const About = () => {
  return (
    <div id='About' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
           
            <div className="about-right">
            <div className="about-para">
                    <p>I'm a enthusiastic developer with a strong interest in software development, machine learning, and building practical solutions through code. I enjoy turning ideas into working applications and constantly exploring new technologies to expand my skill set.</p>
                    <p>Whether it's crafting clean user interfaces, training ML models, or deploying full-stack apps — I'm always eager to learn, create, and grow as a developer.</p>
            </div>
            <div className="about-skills">
                <div className='about-skill'><p>HTML & CSS</p><hr style= {{width:"60%"}}/></div>
                <div className='about-skill'><p >Python</p><hr style= {{width:"70%"}}/></div>
                <div className='about-skill'><p >C#</p><hr style= {{width:"100%"}}/></div>
                <div className='about-skill'><p >Java</p><hr style= {{width:"65%"}}/></div>
                <div className='about-skill'><p >JavaScript</p><hr style= {{width:"80%"}}/></div>
                <div className='about-skill'><p >TypeScript</p><hr style= {{width:"70%"}}/></div>
                <div className='about-skill'><p >React js</p><hr style= {{width:"60%"}}/></div>
            </div>
         </div>
            <div className="about-achievments">
                <div className="about-achievement">
                    {/* add achievements here */}
                    <h1></h1>
                    <p></p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About