import React from 'react';
import SignIn from './SignIn.jsx';
import LogOut from './LogOut.jsx';

import {auth} from '../firebase.js';
import {useAuthState} from 'react-firebase-hooks/auth';

const style = {
    nav :` bg-blue-300 bg-gray-800 h-20 flex justify-between items-center p-4 rounded-t-3xl`,
    heading: ` text-white text-4xl`
}
const NavBar = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div className = {style.nav}>
            <h1 className = {style.heading}> Chat App</h1>
            {user ? <LogOut /> : <SignIn />}
            
        </div>
    );
}
export default NavBar;