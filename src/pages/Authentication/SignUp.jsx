
import img from '../../assets/others/authentication2.png'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';
import axios from 'axios';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import SocialLogin from '../../components/SocialLogin';
const SignUp = () => {
    const { createUser, updateUserProfile } = useAuth();
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate();
    const handleSignUp = async(e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.files[0];
        const formData = new FormData();
        formData.append("image", photoUrl);
        const email = form.email.value;
        const password = form.password.value;
        const user = {
            name, email
        }
        // image send to imagebb
        const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,formData)
        const displayPhoto = data.data.display_url;

        try{
            const result = await createUser(email, password);
            await updateUserProfile(name, displayPhoto)
           
            await axiosPublic.post('/users',user)
            toast.success("User created successfully")
            navigate("/")
        } 
        catch(err){
            toast.error(err.message);
        }
        // createUser(email, password)
        //     .then(result => {
        //         updateUserProfile(name, photoUrl)
        //             .then(result => {
        //                 toast.success("User created successfully")
        //                 navigate("/")
        //             })
        //     })
    }
   
    return (
        <div className="max-w-screen-2xl py-5 min-h-screen bg-[url('/authentication.png')] bg-cover bg-center ">
            <div className="bg-[url('/authentication.png')] gap-6 grid md:grid-cols-2 grid-cols-1  border-t-2 border-l-2 border-gray-400 border-r-8 border-b-8 max-w-screen-xl mx-auto min-h-[700px]">
                <div className='h-full md:ml-10 ml-0 pt-6 max-w-lg font-semibold'>
                    <h3 className='text-center text-[40px] text-gray-900'>Sign Up</h3>
                    <form onSubmit={handleSignUp} className=''>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700">PhotoUrl</span>
                            </label>
                            <input type="file" name='photoUrl' required accept='image/*' className="file-input file-input-bordered w-full rounded-none" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered rounded-none" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn rounded-none text-xl text-white bg-[#e29e39b3] hover:bg-[#e2a954b3]">Sign Up</button>
                        </div>
                    </form>
                    <div className='space-y-4 mt-4 text-center'>
                        <p className='text-[#ea9617b3] text-xl'>Already registered? <Link to="/login" className='hover:underline'>Go to log in</Link></p>
                        <p className='text-slate-700 text-lg'>Or sign in with</p>
                       <SocialLogin/>
                    </div>

                </div>
                <div className='p-14'>
                    <img src={img} alt="" />
                </div>
            </div>

        </div>
    );
};

export default SignUp;