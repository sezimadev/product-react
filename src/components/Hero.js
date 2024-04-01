import React from 'react';
import pana from "../img/pana.png"

const Hero = () => {
  return (
    <div id='hero'>
      <div className='container'>
      <div className='hero'>
<div className='hero-title'>
<h1>Making the most of the <br></br>ever-growing <br></br><span>Information Technology</span></h1>
      <p>Managed by a team of professional experts with extensive <br></br> experience and impressive track records</p>
      <button>Read More</button>
</div>
        <div className='hero-img'>
        <img src={pana} alt='' />
        </div>
      </div>

      </div>
    </div>
  );
};

export default Hero;