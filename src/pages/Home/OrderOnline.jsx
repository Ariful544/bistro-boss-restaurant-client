import React from 'react';
import Heading from '../../components/Heading';
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const OrderOnline = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-24'>
            <Heading title={"---From 11:00am to 10:00pm---"} subTitle={"ORDER ONLINE"} />
            <div className='w-full'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='relative'>
                            <img className='w-full' src={slide1} alt="" />
                            <p className='font-cinzel text-center -mt-10 font-medium md:text-3xl text-xs text-white'>Salads</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative'>
                            <img className='w-full' src={slide2} alt="" />
                            <p className='font-cinzel text-center -mt-10 font-medium md:text-3xl text-xs text-white'>pizzas</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative'>
                            <img className='w-full' src={slide3} alt="" />
                            <p className='font-cinzel text-center -mt-10 font-medium md:text-3xl text-xs text-white'>Soups</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative'>
                            <img className='w-full' src={slide4} alt="" />
                            <p className='font-cinzel text-center -mt-10 font-medium md:text-3xl text-xs text-white'>desserts</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative'>
                            <img className='w-full' src={slide5} alt="" />
                            <p className='font-cinzel text-center -mt-10 font-medium md:text-3xl text-xs text-white'>Salads</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default OrderOnline;