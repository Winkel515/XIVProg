import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import User from './pages/user';
import NotFound from './pages/404';
import Analysis from './pages/analysis';
import Report from './pages/report';
import Create from './pages/create.jsx';
import Login from './pages/login';


const AppRouter = () => {

    return(
    <Routes>
        <Route path='/analysis' element={<Analysis/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/user/:userID' element={<User/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/report/:reportID/pull" element={<Report/>}/>
        <Route path="/report/:reportID/success" element={<Report/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/create" element={<Create/>}/>
    </Routes>
    )
}
export default AppRouter;