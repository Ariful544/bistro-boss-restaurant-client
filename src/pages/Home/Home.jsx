import ChefService from './ChefService';
import OrderOnline from './OrderOnline';
import Carousel from './Slider';
import './home.css';
const Home = () => {
    return (
        <div>
            <Carousel/>
            <OrderOnline/>
            <ChefService/>
        </div>
    );
};

export default Home;