import React, { useState } from 'react'

function ForYou() {
    const [image,setImage] = useState()
    const pic1 = '/images/sun_flower.jpg'
    const pic2 = '/images/inflor_flower.jpg'
    
    return (
        <div    >
            <div className="landing_back">
                <img src={!image ? pic1 : image} className="back_image" alt='brand one' />
            </div>
            <div className="for_front for_section" >
                <div className="for-heading">
                    <h3>MAY BE YOU LIKE IT.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur suscipit maiores error libero adipisci ipsam officiis nisi magni iure! Ipsum saepe quasi assumenda tempore? Dolore natus reprehenderit rerum voluptate qui?</p>
                </div>

                <div className="for_image_section">
                    <img src={pic1} className="for_image" alt='brand one' onMouseOver={(e)=>setImage(e.target.src)} />
                    <img src={pic2} className="for_image" alt='brand one' onMouseOver={(e)=>setImage(e.target.src)} />
                    <img src={pic1} className="for_image" alt='brand one' onMouseOver={(e)=>setImage(e.target.src)} />
                    <img src={pic2} className="for_image" alt='brand one' onMouseOver={(e)=>setImage(e.target.src)} />
                </div>
            </div>

        </div>
    )
}

export default ForYou