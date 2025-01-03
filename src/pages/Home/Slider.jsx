import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/home/01.jpg'
import img2 from '../../assets/home/02.jpg'
import img3 from '../../assets/home/03.png'
import img4 from '../../assets/home/04.jpg'
import img5 from '../../assets/home/05.png'
import img6 from '../../assets/home/06.png'
const Slider = () => {
    return (
        <div>
            <Carousel showThumbs={true} showArrows={false} showStatus={false}>
                <div>
                    <img className="w-full" src={img1} />
                </div>
                <div>
                    <img className="w-full" src={img2} />
                </div>
                <div>
                    <img className="w-full" src={img3} />
                </div>
                <div>
                    <img className="w-full" src={img4} />
                </div>
                <div>
                    <img className="w-full" src={img5} />
                </div>
                <div>
                    <img className="w-full" src={img6} />
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;