import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Popular(props) {
    console.log(props.top)
    return (
        <div>
            <h1 style={{textAlign :"center"}}>popular Anime</h1>
            <div className='parent'>
                {props.top.map(a => (
                        <div className="card shadow child" style={{width: "18rem", margin : "10px"}}>
                            
                                <div class="card-body">
                                    <img src={a.images.jpg.image_url} className="card-img-top" />
                                    <h5 className="card-title">{a.title}</h5>
                                    <p className="card-text">{a.background}</p>
                                    <Link to={`/${a.mal_id}`} className="btn btn-success">Show Details</Link>
                                </div>
                        </div>
                    

                ))}
            </div>

        </div>
    )
}

export default Popular
