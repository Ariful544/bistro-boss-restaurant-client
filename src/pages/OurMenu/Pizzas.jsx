import React from 'react';
import Heading from '../../components/Heading';
import useMenu from '../../Hooks/useMenu';
import PopularItemCard from '../../shared/PopularItemCard';


const Pizzas = () => {
    const [menu, loading] = useMenu();
    const pizzas = menu?.data?.filter(item => item.category === "pizza");
    if (loading) {
        <span className="loading loading-spinner loading-lg"></span>
    }
    return (
        <div className='my-24 max-w-screen-xl mx-auto'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    pizzas?.map(item => <PopularItemCard key={item._id} items={item} />)
                }
            </div>
            <div className='text-center mt-10'>
                <button className='btn btn-outline mt-4 text-slate-800 uppercase border-0 border-b-4'>ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default Pizzas;