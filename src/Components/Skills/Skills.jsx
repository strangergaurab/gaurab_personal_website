import React from 'react';
import './skills.css';
import Frontend from './Frontend.jsx';
import Backend from './Backend.jsx';
const Skills = ()=>{
    return (
    <div>
   <section className="skills section" id="skills">
  <h1 className='section_title'>Skills</h1>
  <span className='section_subtitle'>My technical Level</span>
<div className='skills_container container grid'>
 <Frontend />
 <Backend />

</div>
   </section>


    </div>

    )
}
export default Skills;