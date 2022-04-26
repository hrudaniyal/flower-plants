import React from 'react'
import {Link} from 'react-router-dom'
function Nav() {
  return (
    <div className='nav'>
      <Link to='/' ><li className='nav_link'>Home</li></Link>
      <Link to='/aboutus'>   <li className='nav_link'>About us</li></Link>
      <Link to='/flowers'><li className='nav_link'>Flowers</li></Link>
        <li className='nav_link'>Contact</li>
        <li className='nav_link'>Explore</li>
        
    </div>
  )
}

export default Nav