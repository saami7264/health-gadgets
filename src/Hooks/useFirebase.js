import initializeFirebase from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";

initializeFirebase();

const useFirebase = () => {

    const [user, setUser] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const auth = getAuth();


    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .finally(() => setIsLoading(false))
    }

    const registerUser = (email, password) => {
        // e.preventDefault()
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                console.log(user);
            })
            .finally(() => setIsLoading(false))
    }


    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {

            })
            .finally(() => setIsLoading(false))
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
    }, [])

    return {
        user,
        registerUser,
        signInUsingGoogle,
        logOut,
        isLoading
    }
}

export default useFirebase;