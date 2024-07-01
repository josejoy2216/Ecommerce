import React from 'react'
import Slide from './Slide'
import "./assets/css/bgtxt.css"

const Banner = () => {
  return (
  <div>
    <div className="container cardcss">
      <div className="row ">
      <div className="col-md-6 mt-4 " >
          <h1>Book Nook</h1>
          <h3 className='text-light'>Check out our Latest books</h3>
          <input className='form-control' placeholder='Search' />
        </div>
        <div className="col-md-6 mt-4">
          <Slide/>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Banner
