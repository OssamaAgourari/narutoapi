import { BrowserRouter, Route, Routes } from "react-router-dom"
import Popular from "./Popular"
import './Main.css'
import { useState, useEffect } from "react"
import Navbar from "./Navbar"
import Detail from "./Detail"

const Main = () => {
    const [popularAnime, setPopularAnime]= useState([])
    const getPopularAnime = async ()=>{
        const reponse = await fetch(`https://api.jikan.moe/v4/top/anime?filter=bypopularity`)
        const data = await reponse.json()
        setPopularAnime(data.data)
        console.log(popularAnime)
        
    }
    useEffect(()=>{
        getPopularAnime()
    },[])
  return (
    <BrowserRouter>
        <Navbar top={popularAnime}/>
        <Routes>
            <Route path="/" element={<Popular top={popularAnime}/>}/>
            <Route path="/:id" element={<Detail top={popularAnime}/>}/>
        </Routes>
        
    </BrowserRouter>
    
  )
}

export default Main
