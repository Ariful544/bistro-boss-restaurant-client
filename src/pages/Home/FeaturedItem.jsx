import img from '../../assets/home/featured.jpg'
const FeaturedItem = () => {
    return (
        <div
            className="max-w-screen-xl relative bg-fixed mx-auto my-24 min-h-screen"
            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <div className="bg-black absolute inset-0 bg-opacity-50"></div>
            <div className="relative pt-20  text-center text-white">
                <div className='text-center md:w-4/12 w-8/12 mx-auto'>
                    <h2 className='text-yellow-600 italic md:text-xl text-base'>---Check it out---</h2>
                    <p className='md:text-[42px] py-6 border-t-4 mt-4 mb-10 border-b-4 text-white text-2xl'>FROM OUR MENU</p>
                </div>
                <div className='flex justify-center mt-14 items-center max-w-screen-lg mx-auto gap-6'>
                    <img className='h-[300px]' src={img} alt="" />
                    <div className='text-left'>
                        <h4 className='text-xl'>March 20, 2023</h4>
                        <p>WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className='btn btn-outline mt-4 text-white uppercase border-0 border-b-4'>View full menu</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;