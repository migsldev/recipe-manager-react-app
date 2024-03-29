import React from 'react';
import Home from './Home';
import Cuisine from "./Cuisine";
import Searched from './Searched';
import {Route, Routes} from 'react-router-dom';

function Pages() {
  return ( //Browser Router gives the ability for routes to work
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cuisine/:type" element={<Cuisine/>} />
            <Route path="/searched/:search" element={<Searched/>}/>
        </Routes>
    );
}

export default Pages;
