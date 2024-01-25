import React from 'react'
import '../index.css'

function Navbar({mode,changeTheme}) {
  

  return (
    <div className={`navbar-header ${mode?'lightTheme':'darkTheme'}`}>
    {/* <div className='navbar-header' style={mode}> */}
      <div>
        <h1>Where in the world?</h1>
        </div>
      <div className='mode-icon'>
      <i className="fa-solid fa-moon" onClick={()=>{mode?changeTheme(false):changeTheme(true)}}></i>
      
      </div>

    </div>
  )
}

export default Navbar