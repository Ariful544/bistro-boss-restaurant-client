import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../Hooks/useAuth'
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useCart from '../Hooks/useCart';

const FoodCard = ({items}) => {
    const {image,name,recipe,price,_id} = items;
    const {user} = useAuth();
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const handleFoodCart = (food)=>{
        if(user && user.email){
            const cartItem ={
                menuId: _id,
                email: user.email,
                name,
                price,
                image,
            }
            axiosSecure.post('/carts', cartItem)
            .then(result =>{
                if(result.data.insertedId){
                    toast.success(`${name} Cart added successfully`)
                }
                refetch();
            })
        }
        else{
            navigate('/login');
        }
    }
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
                <button onClick={()=>handleFoodCart(items)} className='btn btn-outline hover:bg-yellow-600 text-yellow-600 border-yellow-600 uppercase border-0 border-b-4'>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;