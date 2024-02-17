import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination,Autoplay } from 'swiper/modules';

const SlideImages = () => {
  return (
    <div className='pt-5'>
      <p className='text-center text-orange-500'>Our recent works</p>
          <h1 className='text-center text-purple-700 lg:text-5xl text-xl font-bold italic'>Our completed  <span className='text-orange-400'>projects</span></h1>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://isdi.in/blog/wp-content/uploads/2022/03/50.jpg" alt="" className='h-[420px] w-[800px] mx-auto pb-2 pt-10  '/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://happho.com/wp-content/uploads/2017/05/rooftop-meeting-space-with-swopping-lush-panoramic-interior-garden.png" alt="" className='h-[420px] w-[800px] mx-auto pb-2 pt-10 ' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://isdi.in/blog/wp-content/uploads/2022/03/51.jpg" alt="" className='h-[420px] w-[800px] mx-auto pb-2 pt-10 '  />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-[420px] w-[800px] mx-auto pb-2 pt-10 '/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?q=80&w=1513&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-[420px] w-[800px] mx-auto pb-2 pt-10 '/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
          className='h-[420px] w-[800px] mx-auto pb-2 pt-10 '/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SlideImages