import React from "react";
import Header from './components/header'
import Footer from './components/Footer';
import './css/App.css';
import AppRouter from './router';


function App(){
    return (
        <>
        <Header/>
        <AppRouter />
        <Footer />
        </>
    );
  }


export default App;
