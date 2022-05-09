import React, { useState, useCallback } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../css/home.css';



const Home = () => {
    const [report, setReport] = useState("");
    const navigate = useNavigate();
    const parseReport = (e) => {
        
        if (report != "") {
            var rep = report
            if (rep.length == rep.lastIndexOf('/') + 1) {
                rep = rep.slice(0, -1);
            }
            
            var reportID = rep.substring(rep.lastIndexOf('/') + 1);
            console.log(reportID)
            navigate('/report/' + reportID + '/success', {replace: true});
        }
    }

    return(
        <div>
            <div className = "Title">
                <h1>FFXIV Progression Analysis</h1>
            </div>

            <div>Home page <br></br>
                    <Link to="/user">
                        <button variant="outlined">
                            User
                        </button>
                    </Link>

            </div>

            <div>
                report url
                <input type="text" value={report} onChange = {e => {setReport(e.target.value)}}/>
                
                <button onClick={() => {parseReport()}}>Submit</button>
            </div>
        </div>
    )
}
export default Home;