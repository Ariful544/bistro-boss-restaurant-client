import React from 'react';
import CoverCard from '../../components/CoverCard';
import img from '../../assets/menu/banner3.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import TodaysOffered from './TodaysOffered';
import Desserts from './Desserts';
import Pizzas from './Pizzas';
import Salads from './Salads';
import Soup from './Soup';
const Menu = () => {
    return (
        <div className='min-h-screen'>
            <CoverCard img={img} title={"OUR MENU"} subtitle={"Would you like to try a dish?"}/>
            <TodaysOffered/>
            <CoverCard img={dessertImg} title={"DESSERTS"} subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
            <Desserts/>
            <CoverCard img={pizzaImg} title={"PIZZA"} subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
            <Pizzas/>
            <CoverCard img={saladImg} title={"SALADS"} subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
            <Salads/>
            <CoverCard img={soupImg} title={"SOUPS"} subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
            <Soup/>
        </div>
    );
};

export default Menu;