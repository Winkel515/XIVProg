import React from "react";
import Footer from './components/Footer';
import './css/App.css';
import AppRouter from './router';


function App(){
    return (
        <>
        <AppRouter />
        <Footer />
        </>
    );
  }


export default App;
