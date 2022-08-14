import React from 'react';
import Navbar from './components/Navbar';
import Chat from './components/Chat'
//import Logo from './components/Logo'

import {auth} from './firebase.js';
import {useAuthState} from 'react-firebase-hooks/auth'

const style =  {
  appContainer: `border-cyan-900 max-w-[728px] mx-auto text-center`,
  sectionContainer: ` border-black-900 flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-2xl border relative rounded-3xl `
}


function App() {

  const [user] = useAuthState(auth);
  //console.log(process.env);  
  return (
    <div className = {style.appContainer}>
      
      <section className = {style.sectionContainer}>
        <Navbar />
        {user ? <Chat/> : null}
      </section>
     
    
    </div>
  );
}

export default App;
