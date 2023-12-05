import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Trenging = () => {
    const [content,setContent] = useState([])
    const fetchTrending = async ()=>{
        const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=f4138a2ae1ff88a27357704838e87362`)
        setContent(data.results)
    }
    useEffect(()=>{
        fetchTrending()
    },[])
  return (
    <div>
      {content.map((res)=>(
        <div className='parent'>
            {/* {content && content.map(c=>(console.log(c)))} */}
            {content && content.map(c=>(
                <div className='child'>
                    <img className='img' src={`https://image.tmdb.org/t/p/w300${c.poster_path}`}/>
                    <span className='title'>{c.title}</span>
                    <span className='titles'>{c.vote_average}</span>
                </div>
            ))}
        </div>
        
      ))}
    </div>
  )
}


export default Trenging
