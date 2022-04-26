import axios from 'axios'
import { useEffect, useState } from 'react'


const ShowImage = () => {
    const key = 'LEoP585PKwvAc8YsADGIO-5ma_so9GxKEpxMu-80Olc'
    const [result, setResult] = useState([])

    useEffect(() => {
        apiCall()
    }, [])
    const apiCall = () => {
        axios.get(`https://api.unsplash.com/search/photos?page=3&per_page=50&query=flower&client_id=${key}`).then(res => {
            setResult(res.data.results)
        })
    }
    console.log(result)
    return <div className='img_show_container' >
        {
            result.map((data) => {
                //style={{backgroundColor:data.color}}
                return <div key={data.id} className='img_des' style={{ backgroundColor: data.color }}  >
                    <div >

                        <img className='show_img' src={data.urls.small} alt={data.alt_description} />

                    </div>
                    <div className='show_des'>
                        <h4>{data.alt_description}</h4>
                        <div>
                            <p>{data.description}</p>
                        </div>
                        <div style={{ display: "flex", padding: '10px' }}>
                            <img src={data.user.profile_image.small} style={{ display: "flex", alignItems: "center", height: "50px", width: "50px", borderRadius: "50px" }} alt={data.user.first_name} />
                            <h6 style={{ marginLeft: "10px" }}>{data.user.first_name}</h6>
                        </div>
                        <div className='buy_btn'>Buy</div>
                    </div>
                </div>
            })
        }
    </div>

}
export default ShowImage