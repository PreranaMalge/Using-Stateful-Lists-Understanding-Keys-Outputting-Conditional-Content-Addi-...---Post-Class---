import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  
  const [texttoggle,setTextToggle] = useState('Marco')

  const handleToggle =()=>{
    
    const val = texttoggle ;
    
    val === 'Marco' ? setTextToggle('Polo') : setTextToggle('Marco')
    
  }

  

  return (
    <div id="main">

     <h1 id='marco-polo'>{texttoggle}</h1> 
     <button id='marco-polo-toggler' onClick={handleToggle} >click me</button> 


    </div>
  )
}


export default App;
