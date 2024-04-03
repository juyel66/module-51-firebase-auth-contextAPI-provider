import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const  createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    // signOut 
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth);
    }

    // observe on state changed 
    useEffect(()=>{
         const unSubscriber = onAuthStateChanged(auth,currentUser =>{
           setUser(currentUser);
           setLoading(false)
           console.log('observing current user inside useEffect of AuthProvider',currentUser)
        })
        return () =>{
            unSubscriber();
        }
    },[])



    const authInfo = { user, createUser,signInUser, signInWithGoogle, logOut, loading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};


export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}