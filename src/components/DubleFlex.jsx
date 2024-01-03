import React from 'react'
import './styles/style.scss'
import { GoArrowDown } from "react-icons/go";
const DubleFlex = () => {
  return (
    <div className="dubleFlex">
        <div className="first__flex">
            <div className="position__Offlex">
                <p className='UrbanSh'>Urban Shirts</p>
                <p className='position-title'> Live In Confort </p>
                <p className='position-flex-duble'> FLAT 60% OFF </p>
                <GoArrowDown className='goAppdv poxxuyy'/>
                <button className='button__of-flex'> <a href=""> SHOP NOW </a> </button>
            </div>
        </div>
        <div className="second__flex">
        <div className="position__Offlex">
                <p className='UrbanSh mainBU'>Oversized T-Shirts</p>
                <p className='position-title mainBUBU'> Street Style Icon </p>
                <p className='position-flex-duble'> FLAT 60% OFF </p>
                <GoArrowDown className='goAppdv poxxuyy'/>
                <button className='button__of-flex'> <a href=""> SHOP NOW </a> </button>
            </div>
        </div>
    </div>
  )
}

export default DubleFlex