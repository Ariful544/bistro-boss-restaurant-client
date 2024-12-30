import React from 'react';
import Heading from '../../components/Heading';
import FoodCard from '../../components/FoodCard';
import useMenu from '../../Hooks/useMenu'
const ChefRecommends = () => {
    const [menu] = useMenu();
    const offeredItems = menu?.data?.filter(item => item.category === "offered");
    return (
        <div className='max-w-screen-xl my-24 mx-auto'>
            <Heading title="---Should Try---" subTitle="CHEF RECOMMENDS"/>
            <div className='grid md:grid-cols-3 gap-6 grid-cols-1'>
                {offeredItems?.map(item => <FoodCard key={item._id} items={item} />)}
            </div>
        </div>
    );
};

export default ChefRecommends;