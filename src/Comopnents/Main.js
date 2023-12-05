import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './Header'
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Trenging from '../pages/Trenging';
import Movies from '../pages/Movies';
import Series from '../pages/Series';
import Search from '../pages/Search';
import Navigation from './Navigation';

const Main = () => {
    return (
            <BrowserRouter>
                <Header />
                <Navigation/>
                <Container>
                    <Routes>
                        <Route path='/' element={<Trenging/>}/>
                        <Route path='/movies' element={<Movies/>}/>
                        <Route path='/series' element={<Series/>}/>
                        <Route path='/search' element={<Search/>}/>
                    </Routes>
                </Container>

                
            </BrowserRouter>
        
    )
}

export default Main
