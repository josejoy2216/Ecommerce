import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './assets/css/Slide.css'

// import required modules
import { EffectCards } from 'swiper/modules';

const Slide = () => {
  return (
    <>
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      <SwiperSlide className='Swiperslide'></SwiperSlide>
      <SwiperSlide className='Swiperslide'></SwiperSlide>
      <SwiperSlide className='Swiperslide'></SwiperSlide>
      <SwiperSlide className='Swiperslide'></SwiperSlide>
      <SwiperSlide className='Swiperslide'></SwiperSlide>
      <SwiperSlide className='Swiperslide'></SwiperSlide>
      <SwiperSlide className='Swiperslide'></SwiperSlide>
      <SwiperSlide className='Swiperslide'></SwiperSlide>


    </Swiper>
  </>
  )
}

export default Slide
