import React, { useState, useEffect } from 'react';
import './intro.css';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';
import gaurab from '../../assets/gaurav.png';

const Intro = () => {
  const jobTitles = ['Full Stack Developer', 'Programmer', 'Data Analyst'];
  const [currentJobTitleIndex, setCurrentJobTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentJobTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
    }, 2000); // Change the job title every 2 seconds (2000 milliseconds)

    return () => {
      clearInterval(interval); // Cleanup the interval when the component unmounts
    };
  }, []);

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
