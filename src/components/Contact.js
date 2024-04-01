import React from 'react'
import foot from "../img/1.svg"

 const Contact = () => {
  return (
    <div id='contact'>
        <div className='contact'>
          <div className='text'>
            <img src={foot} alt=''/>
            <h4>PT Dwidasa Samsara Indonesia</h4>
            <p>Ruko Jalur Sutera 29A No. 53 <br></br>
Alam Sutera Serpong, Tangerang 15323
</p>
          </div>
          <div className='text'>
            <h4>Contact</h4>
            <p>Phone : +62.21.5314.1135 <br></br>
Fax : +62.21.5314.1135 <br></br>
Email : community@dwidasa.com</p>
          </div>
        </div>
        
    </div>
  )
}

export default Contact
