import React from 'react'
import './styles/style.scss'
import nonePpl from './images/nonePpl.png'
const Forest = () => {
  return (
    <div className="forest">
      <div className="mainB">
        <h1> WE MADE YOUR EVERYDAY FASHION BETTER! </h1>
        <h4> In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7 </h4>
        <button className='ShowNowMain'> <a href=""> Shop Now </a> </button>
      </div>
      <div className="simple">
         <img className='nonePpl' src={nonePpl} alt="" />
      </div>
    </div>
  )
}

export default Forest