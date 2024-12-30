import React from 'react';

const PopularItemCard = ({items}) => {
    return (
        <div className='grid grid-cols-3'>
            <div className='col-span-1'>
                <img style={{ borderRadius: "0 200px 200px 200px" }} className='w-[150px] h-[100px] object-cover' src={items.image} alt="" />
            </div>
            <div className='col-span-2'>
                <div className='flex justify-between'>
                    <h3 className='font-cinzel text-xl text-black'>{items.name} ---------</h3>
                    <p className='text-yellow-600 font-medium'>${items.price}</p>
                </div>
                <p className='text-gray-600 text-base'>{items.recipe}</p>
            </div>
        </div>
    );
};

export default PopularItemCard;