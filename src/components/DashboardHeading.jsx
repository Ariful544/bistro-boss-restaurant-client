import React from 'react';

const DashboardHeading = ({title,subtitle}) => {
    return (
        <div className="max-w-screen-sm mx-auto text-center">
            <h2 className=' italic capitalize text-[#D99904] text-lg'>---{title}---</h2>
            <p className='uppercase my-2 py-2 text-[40px] border-y-4 border-slate-200'>{subtitle}</p>
        </div>
    );
};

export default DashboardHeading;