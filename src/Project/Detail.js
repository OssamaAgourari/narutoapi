
import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Detail = (props) => {
    const { id } = useParams()
    const del = props.top.find(a=>a.mal_id == id)
    if (!del){
        return 
    }
  return (
    <div>
        <h1 style={{textAlign:"center", fontSize:"40px"}}>{del.title}</h1>
        <div className='par shadow-lg' style={{width :"80%",marginLeft :"10%" ,display : "flex", backgroundColor :"rgb(219, 202, 218)", padding :"20px", borderRadius :"20px"}}>
            <div  style={{width :"50%"}}>
              <img className='shadow' style={{ borderRadius :"10px",width :"80%"}} src={del.images.jpg.image_url}  />
            </div>
            <div style={{width :"100%"}}>
              <ul>
                <li><strong>Aired : </strong>{del.aired.string}</li><hr/>
                <li><strong>Tating : </strong>{del.rating}</li><hr/>
                <li><strong>Rank : </strong>{del.rank}</li><hr/>
                <li><strong>Scored by : </strong>{del.scored_by}</li><hr/>
                <li><strong>Popularity : </strong>{del.popularity}</li><hr/>
                <li><strong>Source : </strong>{del.source}</li>
                <li style={{marginTop :"17px"}}><Link to="/" className='btn btn-success'>Return</Link></li>
              </ul>
            </div>
        </div>
        <div className='container' style={{marginTop :"10px"}}>
          <span>{del.background}</span>
        </div>
    </div>
  )
}

export default Detail
