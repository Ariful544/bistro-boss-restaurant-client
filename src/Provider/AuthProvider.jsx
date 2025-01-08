import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../../firebase.config';
import useAxiosPublic from '../Hooks/useAxiosPublic';

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    const googleSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    const updateUserProfile = (name,photoUrl)=>{
        setLoading(true)
        updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photoUrl,
        })
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
      }
    const logout = ()=>{
        setLoading(true)
        return signOut(auth);
    }
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);

    }
    const authInfo = {
        googleSignIn,
        user,
        signIn,
        loading,
        logout,
        createUser,
        updateUserProfile
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            if(currentUser){
                const userInfo = {email : currentUser?.email}
                axiosPublic.post('/jwt',userInfo)
                .then(res=>{
                    if(res.data?.token){
                        localStorage.setItem('access-token', res.data.token);
                    }
                })
            }
            else{
                localStorage.removeItem('access-token');
            }
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[axiosPublic])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;