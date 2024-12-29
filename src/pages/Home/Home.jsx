import { Helmet } from 'react-helmet-async';
import CallUs from './CallUs';
import ChefRecommends from './ChefRecommends';
import ChefService from './ChefService';
import FromOurMenu from './FromOurMenu';
import OrderOnline from './OrderOnline';
import Carousel from './Slider';
import './home.css';
import FeaturedItem from './FeaturedItem';
import Testimonial from './Testimonial';
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro boss restaurant | Home</title>
            </Helmet>
            <Carousel/>
            <OrderOnline/>
            <ChefService/>
            <FromOurMenu/>
            <CallUs/>
            <ChefRecommends/>
            <FeaturedItem/>
            <Testimonial/>
        </div>
    );
};

export default Home;