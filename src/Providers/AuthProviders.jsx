import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";



export const AuthContext = createContext(null);

const auth = getAuth()

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const updateUserData = (user, name, photo) => {

        console.log(user, name, photo)
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })

    }

    useEffect(() => {
        const undubscribe = onAuthStateChanged(auth, currectUser => {
            setUser(currectUser);
            //  setLoading(false)
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
        updateUserData
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;