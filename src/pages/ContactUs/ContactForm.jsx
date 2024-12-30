import React from 'react';
import Heading from '../../components/Heading';
import { FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
    return (
        <div className='my-48'>
            <Heading title={"---Send Us a Message---"} subTitle={"CONTACT FORM"} />
            <div className='min-h-screen px-14 py-20 bg-gray-200'>
                <div className='flex gap-4'>
                    <div className='w-full'>
                        <label htmlFor="" className='text-gray-900 font-semibold'>Name*</label>
                        <input type="text" placeholder="Enter your name" className="input input-bordered mt-2 rounded-none w-full" />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="" className='text-gray-900 font-semibold'>Email*</label>
                        <input type="text" placeholder="Enter your email" className="input input-bordered mt-2 rounded-none w-full" />
                    </div>
                </div>
                <div className='w-full mt-6'>
                    <label htmlFor="" className='text-gray-900 font-semibold'>Phone*</label>
                    <input type="text" placeholder="Enter your phone number" className="input input-bordered mt-2 rounded-none w-full" />
                </div>
                <div className='w-full mt-6'>
                    <label htmlFor="" className='text-gray-900 font-semibold'>Message*</label>
                    <textarea rows={10} className="textarea w-full mt-2 rounded-none textarea-bordered" placeholder="Bio"></textarea>
                </div>
                <div className='w-4/12 h-[100px] flex justify-between items-center px-4 border-x-4 border-gray-300 bg-white mt-6'>
                    <div className='flex gap-4'>
                        <input type="checkbox" className="w-6 h-6" />
                        <p>I'm not a robot</p>
                    </div>
                    <div>
                        <img className='w-10 h-10 ml-6' src="https://img.icons8.com/?size=100&id=ahNSCveMxpxu&format=png&color=000000" alt="" />
                        <p className='text-black'>reCAPTCHA</p>
                    </div>
                </div>
                <div className='text-center mt-10'>
                    <button className='btn bg-gradient-to-r text-white rounded-none from-yellow-800 to-yellow-600 hover:bg-gradient-to-l hover:from-yellow-800 hover:to-yellow-600'>Send Message <FaPaperPlane /></button>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;