import React from "react";
import Footer from './components/Footer';
import './css/App.css';
import AppRouter from './router';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';

const themeDark = createTheme({
  palette: {
    type: 'light',
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
      disabled: 'rgba(214,214,214,0.38)',
      hint: 'rgba(191,191,191,0.38)',
    },
  },
});

function App(){
  //const [light, setLight] = React.useState(false);
  return (
    
    <ThemeProvider theme={themeDark}>
      <CssBaseline />
      <AppRouter/>
      <Footer/>
    </ThemeProvider>
  );
}


export default App;
