import React from 'react';

const MenuItemCard = ({menuItem}) => {
    return (
        <div className='grid grid-cols-3'>
            <div className='col-span-1'>
                <img style={{ borderRadius: "0 200px 200px 200px" }} className='w-[150px] h-[100px] object-cover' src={menuItem.image} alt="" />
            </div>
            <div className='col-span-2'>
                <div className='flex justify-between'>
                    <h3 className='font-cinzel text-xl text-black'>{menuItem.name} ---------</h3>
                    <p className='text-yellow-600 font-medium'>${menuItem.price}</p>
                </div>
                <p className='text-gray-600 text-base'>{menuItem.recipe}</p>
            </div>
        </div>
    );
};

export default MenuItemCard;