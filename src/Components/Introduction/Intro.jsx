import React, { useState, useEffect } from 'react';
import './intro.css';
import { Link } from 'react-scroll';
import btnImg from '../../assest/hireme.png';
import gaurab from '../../assest/gaurav.png';

const Intro = () => {
  const jobTitles = ['Full Stack Developer', 'Programmer', 'Data Analyst'];
  const [currentJobTitleIndex, setCurrentJobTitleIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentJobTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
    }, 2000);
  
    return () => {
      clearInterval(interval);
    };
  }, [jobTitles.length]); // Include jobTitles.length in the dependency array
  
  const currentJobTitle = jobTitles[currentJobTitleIndex];

  return (
    <section id="intro">
      <div className="introContent">
        <span className='hello'>Hello,</span>
        <span className='introText'>
          I'm <span className='introName'>Gaurab</span><br/>
          <span className='jobTitle'>{currentJobTitle}</span>
        </span>
        <p className='introPara'>I am a web developer with creating visually <br/>appealing and user-friendly websites</p>
        <Link><button className='btn'><img src={btnImg} className='btnImg' alt=""/>Hire Me</button></Link>
      </div>
      <img src={gaurab} alt="Profile" className='bg' />
    </section>
  );
};

export default Intro;
