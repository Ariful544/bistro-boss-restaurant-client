import React, { useEffect, useState } from 'react';
import Heading from '../../components/Heading';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import axios from 'axios';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/reviews')
            .then(data => {
                setReviews(data.data);
            })
    }, [])
    return (
        <div className='max-w-screen-xl my-24 mx-auto'>
            <Heading title={"---What Our Clients Say---"} subTitle={"TESTIMONIALS"} />
            <div>
                <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className='text-center flex flex-col items-center space-y-4 px-24'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className='text-5xl text-slate-950'><FaQuoteLeft /></p>
                                <p className='text-black'>{review.details}</p>
                                <p className='text-yellow-600 text-2xl uppercase'>{review.name}</p>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;