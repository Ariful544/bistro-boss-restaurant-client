import React from 'react';
import Heading from '../../components/Heading';
import { FiPhoneCall } from 'react-icons/fi';
import { CiLocationOn } from 'react-icons/ci';
import { GoClockFill } from 'react-icons/go';

const OurLocation = () => {
    return (
        <div className='my-24'>
            <Heading title={"---Visit Us---"} subTitle={"OUR LOCATION"} />
            <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>
                <div className='w-full h-[300px]'>
                    <div className='h-[80px] flex justify-center items-center bg-yellow-600'>
                        <p className='text-4xl text-white'><FiPhoneCall /></p>
                    </div>
                    <div className='border-2 h-full'>
                        <div className='bg-gray-200 space-y-2 flex flex-col justify-center items-center h-full mx-8 '>
                            <p className='text-2xl text-black'>PHONE</p>
                            <p className='text-gray-700'>+38 (012) 34 56 789</p>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[300px]'>
                    <div className='h-[80px] flex justify-center items-center bg-yellow-600'>
                        <p className='text-4xl text-white'><CiLocationOn /></p>
                    </div>
                    <div className='border-2 h-full'>
                        <div className='bg-gray-200 space-y-2 flex flex-col justify-center items-center h-full mx-8 '>
                            <p className='text-2xl text-black'>ADDRESS</p>
                            <p className='text-gray-700'>+38 (012) 34 56 789</p>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[300px]'>
                    <div className='h-[80px] flex justify-center items-center bg-yellow-600'>
                        <p className='text-4xl text-white'><GoClockFill /></p>
                    </div>
                    <div className='border-2 h-full'>
                        <div className='bg-gray-200 space-y-2 flex flex-col justify-center items-center h-full mx-8 '>
                            <p className='text-2xl text-black'>WORKING HOURS</p>
                            <p className='text-gray-700'>Mon - Fri: 08:00 - 22:00</p>
                            <p className='text-gray-700'> Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurLocation;