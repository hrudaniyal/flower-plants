import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
function Nav() {
  const scrollDown = ()=>{
    console.log(window.scrollTo({y:"207px"}))
  }
  return (
    <main className="nav_container" >
<nav className='nav'>
      <section>
        <Link className='Link' to='/'><h3>FLOWER PLANTS</h3></Link>

      </section>
      <section className='nav'>
        <Link onClick={scrollDown} className='Link' to='/aboutus'>   <li className='nav_link'>About us</li></Link>
        <Link onClick={scrollDown} className='Link' to='/flowers'><li className='nav_link'>Flowers</li></Link>
        <Link onClick={scrollDown} className='Link' to='/services' > <li className='nav_link'>Services</li></Link>
        <Link onClick={scrollDown} className='Link' to='/contact' > <li className='nav_link'>Contact</li></Link>
      </section>


    </nav>
    </main>
  )
}

export default Nav