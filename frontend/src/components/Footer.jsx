import React from 'react';
import '../css/Footer.css' ;
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';

function Footer(){

    return (
        <section className='Footer'>
            <hr/>
                <section className = 'authors'>
                    <p>Winky Poo (Hyperion)</p>
                    <p>Fxmszjdnxhezbn Guan (Hyperion)</p>
                    <p>Ydxtonkbgr Oetxwqvfhk (Hyperion)</p>
                    <Link href="https://github.com/Winkel515/XIVProg" target="_blank" >
                        <GitHubIcon 
                        style = {{fill: "black"}}
                        />
                    </Link>
                </section>
            <hr/>
        </section>
        ) 
}
export default Footer;