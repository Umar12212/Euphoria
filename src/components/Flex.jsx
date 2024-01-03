import React from 'react'
import './styles/style.scss'
import { GoArrowDown } from "react-icons/go";
const Flex = () => {
  return (

    <>
    <div className='saving__pupe-d'>
            <p className='saving__pupe-d-p'>|</p>
            <p className='saving__pupe-d-dp'>New Arrival</p>
    </div>
    <div className="saving__pupe">
        <div className="triple__flex">
            <div className="triple__flex-one">
                <p className='triple__flex-one-p'>Hawaiian Shirts</p>
                <p className='triple__flex-one-pp'>Dress up in summer vibe</p>
                <p className='triple__flex-one-ppp'>UPTO 50% OFF</p>
                <GoArrowDown className='GoArrowDown-p'/>
                <button className='newdevOffClass'> <a className='textggbt NewTextgg' href="#!"> SHOP NOW </a> </button>
            </div>
            <div className="triple__flex-two">
                <button className='triple__flex-two-button'> <a className='triple__flex-two-button-p' href=""> Limited Stock </a> </button>
                <p className='Printed'> Printed T-Shirt </p>
                <p className='NewDesigns'> New Designs Every Week </p>
                <p className='UPTO'> UPTO 40% OFF </p>
                <GoArrowDown className='GoArrowDown-p goAppdv'/>
                <button className='textggbt textNEW'> <a className='hrefOfButton' href=""> SHOP NOW </a> </button>
            </div>
            <div className="triple__flex-three">
                <p className='Printed four'> Printed T-Shirt </p>
                <p className='NewDesigns four'> New Designs Every Week </p>
                <p className='UPTO four'> UPTO 40% OFF </p>
                <GoArrowDown className='GoArrowDown-p goAppdv fourd'/>
                <button className='textggbt fourf'> <a href=""> SHOP NOW </a> </button>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Flex