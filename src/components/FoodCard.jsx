import img1 from '../assets/menu/salad-bg.jpg'

const FoodCard = ({items}) => {
    const {image,name,recipe,price} = items;
    return (
        <div className="card relative bg-gray-200 rounded-none">
            <figure className="">
                <img
                    src={image}
                    alt=""
                    className="w-full" />
            </figure>
            <div className="card-body space-y-3 items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <p className='absolute top-2 right-4 text-white font-semibold bg-slate-900 px-3 py-2'>${price}</p>
                <div className="card-actions">
                <button className='btn btn-outline hover:bg-yellow-600 text-yellow-600 border-yellow-600 uppercase border-0 border-b-4'>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;