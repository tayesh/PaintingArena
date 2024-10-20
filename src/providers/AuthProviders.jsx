import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../firease/firebase.config";

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .finally(() => setLoading(false));
    }

    const updateUserProfile = (name , image) => {
        return updateProfile(auth.currentUser,{
            displayName : name,
            photoURL : image
        })
    }

    const logOut = () => {
        return signOut(auth);
    }

    const SignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authinfo = {
        user,
        logOut,
        SignIn,
        loading,
        updateUserProfile,
        createUser,
    }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProviders.propTypes = {
    children: PropTypes.node,
}

export default AuthProviders;
