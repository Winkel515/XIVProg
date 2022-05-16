import React from 'react';
import '../css/header.css' ;
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";

const theme = createTheme(
{
    palette:{
        primary:{
            light:"#212121",
            main:"#484848",
            dark:"#000000",
        },
        secondary:{
            light:"#616161",
            main:"#8e8e8e",
            dark:"#373737",
        },
    },
}    
);

function Header(){

    return(
        <ThemeProvider theme = {theme}>
            <AppBar position="static" color={"primary"} >
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                XIV PROG
            </Typography>
            <Link to="/login">
                <Button color="inherit">Login</Button>
            </Link>
            
            </Toolbar>
        </AppBar>
      </ThemeProvider>
    )
}
export default Header;