import React from 'react'
import Cards from './Cards'

const Maincard = () => {
  return (
    <div>
      <div className="container cardcss">
      <div className="row ">
        <div className="col-md-6 mt-4" >
          <h1>Top Choice</h1>
        </div>
      </div>
        <div className="col-md-12 mt-2">
          <Cards/>
        </div>

    </div>
    </div>
  )
}

export default Maincard
