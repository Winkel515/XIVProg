import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {

    return(
        <div>Home page <br></br>
            <Link to="/user">
                <button variant="outlined">
                    User
                </button>
            </Link>
          
        </div>
        
    )
}
export default Home;