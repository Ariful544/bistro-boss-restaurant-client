import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { toast } from 'react-toastify';
import { ImGoogle3 } from 'react-icons/im';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import useAxiosPublic from '../Hooks/useAxiosPublic';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user ={
                    name: result.user?.displayName,
                    email: result.user?.email,
                }
                axiosPublic.post('/users',user)
                .then(result => {
                    toast.success("Sign in with Google successful")
                    navigate("/")
                })
            });
    }
    return (
        <div className='flex items-center justify-center gap-6'>
            <button onClick={handleGoogleSignIn} title='google' className='text-5xl'><ImGoogle3 /></button>
            <button className='text-5xl'><FaFacebook /></button>
            <button className='text-5xl'><FaGithub /></button>
        </div>
    );
};

export default SocialLogin;