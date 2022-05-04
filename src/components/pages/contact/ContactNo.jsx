import React from 'react'

function ContactNo() {
    const contact_details = [{
        position: "Owner",
        name: "Hruda Nial",
        email: "niyaljohn@gmail.com",
        img: '/images/hruda.jpg',
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, beatae."
    },
    {
        position: "Shop Keeper",
        name: "Dharmen Nial",
        email: "dharmennial@gmail.com",
        img: '/images/sun_flower.jpg',
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, beatae."
    },
    {
        position: "Owner",
        name: "Hruda Nial",
        email: "niyaljohn@gmail.com",
        img: '/images/inflor_flower.jpg',
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, beatae."
    },
    {
        position: "Owner",
        name: "Hruda Nial",
        email: "niyaljohn@gmail.com",
        img: '/images/sun_flower.jpg',
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, beatae."
    }]
    return <div className='contact_show_container'>
        {
            contact_details.map((e) => {
                const { img, position, email, des, name} = e

                return <div className='contact_show'>
                    <img className="contact_show_image" src={img}  alt={name} />
                    <b className='contact_show_name'>{name}</b> <br />
                    <p className='contact_show_phone'>{position}</p>
                    <p className='contact_show_email'>{email}</p>
                    <p className='contact_show_des'>{des}</p>
                </div>
            })
        }
    </div>
}

export default ContactNo