import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    const [search , setSearch] = useState('')
    const [object , setObject] = useState({})
    
    const handleclick = ()=>{
        setObject(props.top.find(rep => rep.title == search))
    }
    return (
        <div style={{marginBottom : "10px"}}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" ><img style={{width: "50px"}} src='../df2903_e93d50fa8ee547de98337919339f84fb~mv2.png'/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" >Popular</Link>
                            </li>
                        </ul>
                        <div className="d-flex" role="search">
                            <input onChange={(e)=>setSearch(e.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <Link to={`/${object.mal_id}`} onClick={()=>handleclick()} className="btn btn-outline-success">Search</Link>
                        </div>
                        
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
