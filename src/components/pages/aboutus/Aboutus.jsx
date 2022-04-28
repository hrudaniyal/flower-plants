import React from 'react'
import ForYou from '../../landingpage/ForYou'
import './aboutus.css'
function Aboutus() {
  return (
    <div className='aboutus_container'>
      <h1 align='center'>ABOUT US</h1>
      <div className="little_summary">
        <h3>LITTLE SUMMARY</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure atque cumque, assumenda nesciunt explicabo sint ea tempore natus cum, dicta tenetur quaerat ratione amet. Rerum modi magni repellendus, voluptatum ipsum neque repudiandae. Et rerum aut facilis placeat odio eos fugit iure possimus excepturi quis, ab, distinctio nemo perspiciatis inventore minima in? Consequuntur amet excepturi culpa sit omnis maxime quasi commodi error sint ipsa! Quidem, asperiores? Quam molestias dolor repudiandae consequatur, dignissimos voluptatem neque qui possimus pariatur magni beatae soluta esse odit vitae harum officiis quia officia, quisquam eveniet optio cumque perspiciatis voluptas illum! Asperiores cum provident numquam, accusamus nemo eos!</p>
      </div>
      <div className="what_we_does">
        <h3>WHAT WE DOES</h3>
        <ul className='we_does_list'>
          <li> <span className='small_circle'></span> <b>Lorem ipsum dolor sit amet.</b> </li>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In nemo, incidunt consectetur voluptate perferendis repudiandae maxime accusantium dicta a dignissimos nihil sapiente ex modi dolorem temporibus atque similique ab explicabo?</p>
          <li><span className='small_circle'></span> <b>Lorem ipsum dolor sit amet.</b></li>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In nemo, incidunt consectetur voluptate perferendis repudiandae maxime accusantium dicta a dignissimos nihil sapiente ex modi dolorem temporibus atque similique ab explicabo?</p>
          <li><span className='small_circle'></span> <b>Lorem ipsum dolor sit amet.</b></li>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In nemo, incidunt consectetur voluptate perferendis repudiandae maxime accusantium dicta a dignissimos nihil sapiente ex modi dolorem temporibus atque similique ab explicabo?</p>
          <li><span className='small_circle'></span> <b>Lorem ipsum dolor sit amet.</b></li>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In nemo, incidunt consectetur voluptate perferendis repudiandae maxime accusantium dicta a dignissimos nihil sapiente ex modi dolorem temporibus atque similique ab explicabo?</p>
          <li><span className='small_circle'></span> <b>Lorem ipsum dolor sit amet.</b></li>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In nemo, incidunt consectetur voluptate perferendis repudiandae maxime accusantium dicta a dignissimos nihil sapiente ex modi dolorem temporibus atque similique ab explicabo?</p>
        </ul>
      </div>
      <div className="our_team">
        <h3>OUT TEAM</h3>
        <ForYou />
      </div>
      <div className="location">
        <h3>LOCATION</h3>
        <div className="location_viewer">

        </div>
      </div>
      <h3>LETS JOIN WITH US</h3>

    </div>
  )
}

export default Aboutus