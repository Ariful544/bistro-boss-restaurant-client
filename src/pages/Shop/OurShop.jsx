import CoverCard from '../../components/CoverCard';
import img from '../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../Hooks/useMenu'
import FoodCard from '../../components/FoodCard';
import { useParams } from 'react-router-dom';

const OurShop = () => {
    const {category} = useParams();
    const categories =['salad','pizza','soups','desserts','drinks'];
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const salad = menu?.data?.filter(item => item.category === 'salad');
    const pizza = menu?.data?.filter(item => item.category === 'pizza');
    const soup = menu?.data?.filter(item => item.category === 'soup');
    const dessert = menu?.data?.filter(item => item.category === 'dessert');
    const drinks = menu?.data?.filter(item => item.category === 'drinks');
    return (
        <div className='min-h-screen'>
            <CoverCard img={img} title={"OUR SHOP"} subtitle={"Would you like to try a dish?"} />
            <div className='flex max-w-screen-xl mx-auto justify-center my-24'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    <TabPanel>
                        <div className='grid mt-10 md:grid-cols-3 grid-cols-1 gap-6'>
                            {salad?.map(item => <FoodCard key={item._id} items={item} />)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid mt-10 md:grid-cols-3 grid-cols-1 gap-6'>
                            {pizza?.map(item => <FoodCard key={item._id} items={item} />)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid mt-10 md:grid-cols-3 grid-cols-1 gap-6'>
                            {soup?.map(item => <FoodCard key={item._id} items={item} />)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid mt-10 md:grid-cols-3 grid-cols-1 gap-6'>
                            {dessert?.map(item => <FoodCard key={item._id} items={item} />)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid mt-10 md:grid-cols-3 grid-cols-1 gap-6'>
                            {drinks?.map(item => <FoodCard key={item._id} items={item} />)}
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;