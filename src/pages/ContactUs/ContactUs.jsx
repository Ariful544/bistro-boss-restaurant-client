import React from 'react';
import CoverCard from '../../components/CoverCard';
import img from '../../assets/contact/banner.jpg'
import OurLocation from './OurLocation';
import ContactForm from './ContactForm';
const ContactUs = () => {
    return (
        <div>
            <CoverCard img={img} title={"CONTACT US"} subtitle={"Would you like to try a dish?"} />
            <div className='max-w-screen-xl mx-auto'>
                <OurLocation />
                <ContactForm/>
            </div>
        </div>
    );
};

export default ContactUs;