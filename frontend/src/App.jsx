import React from "react";
import Footer from './components/Footer';
import './css/App.css';
import AppRouter from './router';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';

const themeDark = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#1a1a1a',
      paper: '#272727',
    },
    text: {
      primary: 'rgba(255,255,255,0.85)',
      secondary: 'rgba(232,229,225,0.54)',
      disasbled: 'rgba(214,214,214,0.38)',
      hint: 'rgba(191,191,191,0.38)',
    },
  },
});

const themeLight = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#e4e4e4',
      paper: '#e4e0df',
    },
    text: {
      primary: '#0e0e0e',
      secondary: 'rgba(39,39,39,0.77)',
      disabled: 'rgba(45,45,45,0.38)',
      hint: 'rgba(49,49,49,0.38)',
    },
  },
});

function App(){
  //const [light, setLight] = React.useState(false);
  return (
    
    //have retrievable setting somewhere for mod
    <ThemeProvider theme={themeDark}>
      <CssBaseline />
      <AppRouter/>
      <Footer/>
    </ThemeProvider>
  );
}


export default App;
