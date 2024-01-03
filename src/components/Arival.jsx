import React from 'react'
import style from './styles/arival.module.scss'
import Arival1 from './images/Arival1.jpg'
import Arival2 from './images/Arival2.jpg'
import Arival3 from './images/Arival3.jpg'
import Arival4 from './images/Arival4.jpg'
import './styles/style.scss'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';




const Arival = () => {
    return (
        <>
        
        <div className={style.main__Arrival}>
            <p className={style.main__border}>|</p>
            <p className={style.main__text}>New Arrival</p>
            
        </div>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        className={style.mySwiper}
      >
        <SwiperSlide><img src={Arival1} alt="" /> <p className='SwipperSlide__p'>Urban Shirts</p> </SwiperSlide>
        <SwiperSlide><img src={Arival2} alt="" /> <p className='SwipperSlide__p'>Active T-Shirts</p> </SwiperSlide>
        <SwiperSlide><img src={Arival3} alt="" /> <p className='SwipperSlide__p'> Full Sleeve </p> </SwiperSlide>
        <SwiperSlide><img src={Arival4} alt="" /> <p className='SwipperSlide__p'> Knitted Joggerss </p></SwiperSlide>
      </Swiper>
      </>
    )
}

export default Arival