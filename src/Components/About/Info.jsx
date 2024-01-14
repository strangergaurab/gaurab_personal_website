import React from 'react';
import './about.css';

const Info = () => {
  return (
    <div className="about_info grid">
      <div className='about_box'>
        <h3 className='about_title'>Experience</h3>
        <span className='about_subtitle'>2 Years Working</span>
      </div>
      <div className='about_box'>
        <i className='bx bx-award'></i>
        <h3 className='about_title'>Completed</h3>
        <span className='about_subtitle'>1 Project</span>
      </div>
      <div className='about_box'>
        <i className='bx bx-briefcase'></i>
        <h3 className='about_title'>Skills</h3>
        <span className='about_subtitle'>Your skills here</span>
      </div>
    </div>
  );
};

export default Info;
