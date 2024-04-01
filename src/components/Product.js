import React from 'react'
import svg1 from "../img/svg1.svg"
import svg2 from "../img/svg2.svg"
import svg3 from "../img/svg3.svg"


const Product = () => {
  return (
    <div id='product'>
<div className='container'>
  <h2>Product and Service</h2>
  <div className='product'>
    <div>
      <img src={svg1} alt='' />
      <h2>Our Product</h2>
      <p>Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.</p>
      <button>Read More</button>
          </div>
    <div>
    <img src={svg2} alt='' />
      <h2>Our Service</h2>
      <p>DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.
</p>
      <button>Read More</button>
    </div>
    <div>
    <img src={svg3} alt='' />
      <h2>Our Technology</h2>
      <p>First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.</p>
      <button>Read More</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Product
