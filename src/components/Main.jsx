import React from 'react'
import './styles/style.scss'
import Arival from './Arival'
const Main = () => {

  return (
    <div className="main">
        <div className="main__cards">
            <div className="main__cards-first">
              <div className="main__cards-first-positions">
                    <h6 className='main__cards-first-positions-h6'> Low Price </h6>
                    <h2 className='main__cards-first-positions-h2'> High Coziness </h2>
                    <h3 className='main__cards-first-positions-h3'> UPTO 50% OFF </h3>
                    <h6 className='main__cards-first-positions-h7'> Explore Items </h6>
                </div>
            </div>
            <div className="main__cards-second">
            <div className="main__cards-first-positionss">
                    <h6 className='main__cards-first-positions-h6'> Low Price </h6>
                    <h2 className='main__cards-first-positions-h2'> High Coziness </h2>
                    <h3 className='main__cards-first-positions-h3'> UPTO 50% OFF </h3>
                    <h6 className='main__cards-first-positions-h7'> Explore Items </h6>
            </div>
            </div>
        </div>
        <Arival/>

    </div>
  )
}

export default Main