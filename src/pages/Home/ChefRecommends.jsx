import React from 'react';
import Heading from '../../components/Heading';
import FoodCard from '../../components/FoodCard';

const ChefRecommends = () => {
    return (
        <div className='max-w-screen-xl my-24 mx-auto'>
            <Heading title="---Should Try---" subTitle="CHEF RECOMMENDS"/>
            <div className='grid md:grid-cols-3 gap-6 grid-cols-1'>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
            </div>
        </div>
    );
};

export default ChefRecommends;