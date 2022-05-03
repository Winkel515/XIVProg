import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import User from './pages/user';
import NotFound from './pages/404';

const AppRouter = () => {

    return(
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
    )
}
export default AppRouter;