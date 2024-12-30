import React from 'react';
import Heading from '../../components/Heading';
import useMenu from '../../Hooks/useMenu';
import PopularItemCard from '../../shared/PopularItemCard';


const TodaysOffered = () => {
    const [menu, loading] = useMenu();
    const offeredItems = menu?.data?.filter(item => item.category === "offered");
    if (loading) {
        <span className="loading loading-spinner loading-lg"></span>
    }
    return (
        <div className='my-24 max-w-screen-xl mx-auto'>
            <Heading title={"---Don't miss---"} subTitle={"TODAY'S OFFER"} />
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    offeredItems?.map(item => <PopularItemCard key={item._id} items={item} />)
                }
            </div>
            <div className='text-center mt-10'>
                <button className='btn btn-outline mt-4 text-slate-800 uppercase border-0 border-b-4'>ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default TodaysOffered;