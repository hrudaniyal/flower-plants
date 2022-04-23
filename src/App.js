import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useEffect, useState} from 'react'

function App() {
  const key = 'LEoP585PKwvAc8YsADGIO-5ma_so9GxKEpxMu-80Olc'
  const param = 'animal'
  const [result,setResult] = useState([])
  useEffect(()=>{
    apiCall()
  },[])
  const apiCall = ()=>{
    axios.get(`https://api.unsplash.com/search/photos?page=3&query=flower&client_id=${key}`).then(res=>{
      setResult(res.data.results)
    })
  }
  console.log(result)
  return (
<div>
<div className='heading'>
      <h1>FLOWER PLANTS</h1>
      <p>the new life with flowers</p>
    </div>
    <div >
      {
        result.map((data)=>{
            return <div key={data.id} className='img_des' style={{background:data.color,padding:"40px"}}>
                <div >
          
                <img className='show_img' src={data.urls.small} alt={data.alt_description} />  

                </div>
                <div className='show_des'>
                <h4>{data.alt_description}</h4>
                <p>{data.description}</p>
                <pre>{data.user.bio}</pre>
                <div style={{display:"flex",padding:'10px'}}>
                <img src={data.user.profile_image.small} style={{display:"flex",alignItems:"center",height:"50px",width:"50px", borderRadius:"50px"}} alt={data.user.first_name} />
                  <h6 style={{marginLeft:"10px"}}>{data.user.first_name}</h6>
                </div>
                <button>START</button>
                </div>
            </div>
        })
      }
    </div>
</div>
  );
}

export default App;
