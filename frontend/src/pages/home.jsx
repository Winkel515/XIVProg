import React from 'react';
import { Link } from "react-router-dom";
import '../css/home.css'

const Home = () => {

    return(
        <>
            <div>Home page <br></br>
                    <Link to="/user">
                        <button variant="outlined">
                            User
                        </button>
                    </Link>

            </div>

            <div>
                <input class = "center-block" placeholder='Ex: https://www.fflogs.com/reports/MmwdX4tZpJh7f1gk/'></input>
            </div>
        </>
    )
}
export default Home;