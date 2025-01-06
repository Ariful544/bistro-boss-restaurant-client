import { useEffect, useState } from 'react';
import img from '../../assets/others/authentication2.png'
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { ImGoogle3 } from 'react-icons/im';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';
const SignUp = () => {
    const { googleSignIn,createUser } = useAuth();
    const navigate = useNavigate();
    const handleSignUp = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = {
            name, email, password
        }
        createUser(email, password)
        .then(result =>{
            toast.success("User created successfully")
            navigate("/")
        })
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                toast.success("Sign in with Google successful")
                navigate("/")
            });
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
                        <div className='flex items-center justify-center gap-6'>
                            <button onClick={handleGoogleSignIn} title='google' className='text-5xl'><ImGoogle3 /></button>
                            <button className='text-5xl'><FaFacebook /></button>
                            <button className='text-5xl'><FaGithub /></button>
                        </div>
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