import React from 'react'
import Nav from './Nav'
import './heading.css'
function Heading() {
    return (
        <div className='heading'>
            
            <Nav />
            <main className='banner_heading_center'>
                <div>
                    <h1>FLOWER PLANTS WE PROVIDE</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa minus reprehenderit quas necessitatibus praesentium voluptatum rerum, quod, doloremque molestiae ipsum, tempora et labore. Eum culpa odit maxime accusamus hic dicta.</p>
                    <div className='start_btn'>Start</div>
                </div>
            </main>
        </div>
    )
}

export default Heading