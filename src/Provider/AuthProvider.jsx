import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../../firebase.config';

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

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
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;