import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';
import heroimage from '../assets/heroimage.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='container '>
       <div className='hero-holder  '>
       <div className=''>
        <h2 className='hero-header '>Manage your Tasks on <span>TaskDuty</span></h2>
        <p className='hero-base '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl semper porttitor. Nec accumsan.</p>
        <Link className='text-decoration-none goto' to='/AllTasks'>Go to My Tasks</Link>
        </div>
       <div className='hero-image '>
       <img src={heroimage} alt="hero-image" />
       </div>
       </div>
      </div>
    </div>
  )
}

export default Hero