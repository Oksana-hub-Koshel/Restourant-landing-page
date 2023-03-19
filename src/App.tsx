import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';


import {Routes, Route} from "react-router-dom";
import Book from "./container/Book/Book";
import {Register} from "./container/Authorization/Register/Register";

const App = () => (
    <div>
        <Navbar/>
        <Header/>
        <AboutUs />
        <SpecialMenu />
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <FindUs />
        <Routes>
            {/*<Route path="/" element={<Header/>}/>*/}
            {/*<Route path="/about" element={<AboutUs/>}/>*/}
            {/*<Route path="/menu" element={<SpecialMenu/>}/>*/}
            {/*<Route path="/chef" element={<Chef/>}/>*/}
            {/*<Route path="/intro" element={<Intro/>}/>*/}
            {/*<Route path="/award" element={<Laurels/>}/>*/}
            {/*<Route path="/gallery" element={<Gallery/>}/>*/}
            {/*<Route path="/findus" element={<FindUs/>}/>*/}
            {/*<Route path="/register" element={<Register/>}/>*/}

            <Route path="/book" element={<Book/>}/>
        </Routes>
        <Footer/>
    </div>
);

export default App;


