import {auth} from '../firebase'
import React from 'react';


const style = {
    button: `cursor-pointer text-white rounded-xl bg-gray-200 px-4 py-2  transition ease-in-out delay-20 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300`
}




const LogOut = () => {
    

    return (
        <div onClick = {() => auth.signOut()} className = {style.button}>
            Logout from here
        </div>
    );
}
export default LogOut;