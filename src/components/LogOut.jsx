//import {GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import {auth} from '../firebase'
import React from 'react';

//import GoogleButton from 'react-google-button';

const style = {
    button: `bg-gray-200 px-4 py-2 hover:bg-gray-100`
}


// const googleSignIn = () => {
//     const provider = new GoogleAuthProvider()
//     signInWithRedirect(auth,provider);
// }

const LogOut = () => {
    const signOut = () => {
        signOut(auth)
    }

    return (
        <div onClick = {() => auth.signOut()} className = {style.button}>
            Logout
        </div>
    );
}
export default LogOut;