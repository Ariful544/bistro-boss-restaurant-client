import { Parallax, Background } from 'react-parallax';
const CoverCard = ({ img,title,subtitle }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgStyle={{ backgroundPosition: 'cover', backgroundSize: 'cover' }}
            bgImageAlt=""
            strength={-200}
        >
            <div
                className="hero min-h-screen">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className=" md:w-9/12 w-full flex items-center text-white justify-center mx-auto h-[400px] p-20 bg-black bg-opacity-60 text-center">
                    <div className="">
                        <h1 className="mb-5 text-5xl uppercase font-bold font-cinzel">{title}</h1>
                        <p className="mb-5 uppercase">{subtitle}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default CoverCard;