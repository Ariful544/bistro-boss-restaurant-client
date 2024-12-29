import React from 'react';

const Heading = ({title,subTitle}) => {
    return (
        <div className='text-center md:w-4/12 w-8/12 mx-auto'>
            <h2 className='text-yellow-600 italic md:text-xl text-base'>{title}</h2>
            <p className='md:text-[42px] py-6 border-t-4 mt-4 mb-10 border-b-4 text-black text-2xl'>{subTitle}</p>
        </div>
    );
};

export default Heading;