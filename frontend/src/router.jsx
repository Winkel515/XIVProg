import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import User from './pages/user';
import NotFound from './pages/404';
import Analysis from './pages/analysis';


const AppRouter = () => {

    return(
    <Routes>
        <Route path='/analysis' element={<Analysis/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
    )
}
export default AppRouter;