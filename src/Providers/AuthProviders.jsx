import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";



export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(null)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserData = (user, name, photo) => {
        setLoading(true)
        console.log(user, name, photo)
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })

    }

    useEffect(() => {
        const undubscribe = onAuthStateChanged(auth, currectUser => {
            setUser(currectUser);
             setLoading(false)
        })

        return () => {
            return undubscribe();
        }
    }, []);



    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        updateUserData,
        loading
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;