import React from 'react'

function LandingContainer({image,direction}) {
    return (
        <div className="landing_container">
            <div className="landing_back">
                <img src={image} alt="sun-flower" className="back_image" />
            </div>
            <div className="landing_front" style={{ flexDirection:direction}}  >
                <div className="left" >
                    <h3>Lorem ipsum dolor sit.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti natus, placeat cum atque, adipisci laborum consectetur explicabo voluptatibus doloremque praesentium officiis, fugit itaque blanditiis fugiat? Commodi quaerat dolor earum vero totam quam cum quas perspiciatis facilis accusamus repellat aliquam suscipit sunt doloremque et, amet consequatur ducimus minima ipsam dicta adipisci excepturi. Dolorem magni ipsum sequi, sapiente repellendus at illum aperiam voluptatem quo eaque nobis labore! Minima repudiandae alias facere et quia quisquam est assumenda fugit eveniet, impedit incidunt animi ratione veritatis id dolor modi natus aliquid nihil quod consectetur nulla facilis reprehenderit. Praesentium, commodi! Sunt corrupti numquam dolore in laudantium.
                    </p>
                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, neque.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, esse.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, esse.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, esse.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, esse.</li>

                </div>
                <div className="right">
                    <img src={image} alt="sun-flower" className="front_image" />
                </div>
            </div>
        </div>
    )
}

export default LandingContainer