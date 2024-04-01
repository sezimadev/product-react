import React from 'react';
import img1 from "../img/1.svg"
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdShuffle } from "react-icons/md";


const Header = () => {
  return (
    <div id='header'>
      <div className='container'>
        <div className='header'>
          <img src={img1} alt='img' />
          <div className='header-nav'>
            <p>Services</p>
            <p>Product</p>
            <p>Technology</p>
            <p>About</p>
            <p>Client</p>
            <p>Partner</p>
          </div>
          <div className='header-icon'>
            <span><FaHome /></span>
            <span>
              <MdEmail />
            </span>
            <span>
              <MdShuffle />
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header;