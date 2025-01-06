import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
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
    const logout = ()=>{
        return signOut(auth);
    }
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);

    }
    const authInfo = {
        googleSignIn,
        user,
        logout,
        createUser
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