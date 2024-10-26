import React, { useEffect, useState } from 'react';


const Timeline = () => {


  return (
    <div class="timeline">
  <div class="time-container time-left block" >
    <div class="time-content">
      <h2 className='text-2xl font-bold p-2'>Our Story</h2>
      <p className='text-lg'>Our platform was born out of the desire to revolutionize learning. With a focus on personalization and real-world application, we have built an AI-powered platform that adapts to the needs of each learner, helping them achieve their goals faster and more effectively. Our journey started with a 
        vision to tackle traditional educational challenges by making learning accessible, engaging, and results-driven.</p>
    </div>
  </div>
  <div class="time-container time-right block">
    <div class="time-content">
      <h2 className='text-2xl font-bold p-2'>Our Team</h2>
      <p className='text-lg'>Behind our platform is a dedicated team of technology experts and AI innovators. 
          Our mission is to continually push the boundaries of education technology to 
          provide better learning experiences and results for all. Each team member brings expertise in artificial intelligence, 
          machine learning, and education, making our platform a trusted choice for learners worldwide.</p>
    </div>
  </div>
  <div class="time-container time-left block">
    <div class="time-content">
      <h2 className='text-2xl font-bold p-2'>Personalized Learning</h2>
          <p className='text-lg'>We believe every learner is unique and deserves tailored learning experiences.</p>
          
          
    </div>
  </div>
  <div class="time-container time-right block">
    <div class="time-content">
    <h2 className='text-2xl font-bold p-2'>Innovation</h2>
      <p className='text-lg'> We are constantly pushing the boundaries of AI and education to provide cutting-edge solutions.</p>
    </div>
  </div>
  <div class="time-container time-left block">
    <div class="time-content">
    <h2 className='text-2xl font-bold p-2'>Results-Driven Education</h2>
      <p className='text-lg'> Our focus is on delivering measurable outcomes that help learners succeed.</p>
    </div>
  </div>
</div>

  )
};

export default Timeline;
