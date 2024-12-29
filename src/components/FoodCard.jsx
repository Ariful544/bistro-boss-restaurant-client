import img1 from '../assets/menu/salad-bg.jpg'

const FoodCard = () => {
    return (
        <div className="card bg-gray-200 rounded-none">
            <figure className="">
                <img
                    src={img1}
                    alt=""
                    className="" />
            </figure>
            <div className="card-body space-y-3 items-center text-center">
                <h2 className="card-title">Caeser Salad</h2>
                <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                <div className="card-actions">
                <button className='btn btn-outline text-yellow-600 hover:bg-slate-900 uppercase border-0 border-b-4'>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;