import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  
  const [showbtn,setShowBtn] = useState(false)
  const [showheading,setShowHeading] = useState(false)

  

  return (
    <div id="main">
     {showheading && <h1 id='marco-polo' onClick={()=>setShowBtn(!showbtn)}>Marco</h1>} 
    {showbtn && <button id='marco-polo-toggler' onClick={()=>setShowHeading(!showheading)}>Polo</button> }  

    </div>
  )
}


export default App;
