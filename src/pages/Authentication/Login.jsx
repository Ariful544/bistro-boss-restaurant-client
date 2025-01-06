import {useEffect, useRef, useState } from 'react';
import img from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { ImGoogle3 } from 'react-icons/im';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';
const Login = () => {
    const {googleSignIn,signIn} = useAuth();
    const navigate = useNavigate();
    const captcha = useRef(null);
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        loadCaptchaEnginge(6)
    }, []);
    const handleCaptcha = () => {
        const user_captcha_value = captcha.current.value;

        if (validateCaptcha(user_captcha_value) == true) {
            setDisabled(false);
        }
        else {
            disabled(true)
        }
    }
    const handleSignIn = async(e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        try{
            const result = await signIn(email, password);
            if (result.user) {
                toast.success("Logged in successful");
                navigate('/')
            }
        }
        catch(err) {
            toast.error(err.message)
        }
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                console.log(result.user)
                toast.success("Sign in with Google successful")
                navigate("/")
            });
    }
    return (
        <div className="max-w-screen-2xl py-5 min-h-screen bg-[url('/authentication.png')] bg-cover bg-center ">
            <div className="bg-[url('/authentication.png')] gap-10 grid md:grid-cols-2 grid-cols-1  border-t-2 border-l-2 border-gray-400 border-r-8 border-b-8 max-w-screen-xl mx-auto min-h-[700px]">
                <div className='p-14'>
                    <img src={img} alt="" />
                </div>
                <div className='h-full md:ml-10 ml-0 max-w-lg font-semibold'>
                    <h3 className='text-center text-[40px] text-gray-900'>Login</h3>
                    <form onSubmit={handleSignIn} className=''>
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" ref={captcha} name='captcha' placeholder="type here" className="input input-bordered rounded-none" required />
                            <button onClick={handleCaptcha} className='btn mt-2 rounded-none text-xl text-white bg-[#c88828b3] hover:bg-[#e2a954b3]'>Validate</button>
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={disabled} className="btn rounded-none text-xl text-white bg-[#e29e39b3] hover:bg-[#e2a954b3]">Login</button>
                        </div>
                    </form>
                    <div className='space-y-4 mt-4 text-center'>
                        <p className='text-[#ea9617b3] text-xl'>New here? <Link to="/signup" className='hover:underline'>Create a New Account</Link></p>
                        <p className='text-slate-700 text-lg'>Or sign in with</p>
                        <div className='flex items-center justify-center gap-6'>
                            <button onClick={handleGoogleSignIn} title='google' className='text-5xl'><ImGoogle3 /></button>
                            <button className='text-5xl'><FaFacebook /></button>
                            <button className='text-5xl'><FaGithub /></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login