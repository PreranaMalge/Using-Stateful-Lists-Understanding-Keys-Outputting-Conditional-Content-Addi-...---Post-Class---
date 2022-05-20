import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  
  const [texttoggle,setTextToggle] = useState(false)

  return (
    <div id="main">

     <h1 id='marco-polo'>Marco</h1> 
     <button id='marco-polo-toggler' onClick={()=>setTextToggle(!texttoggle)}>Polo</button> 


    </div>
  )
}


export default App;
