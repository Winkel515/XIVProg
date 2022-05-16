import React, { useState, useCallback } from 'react';
import { Link, useNavigate} from "react-router-dom";
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
            navigate('/report/' + reportID + '/success', {replace: false});
        }
    }

    return(
        <>
            <div>Home page <br></br>
                <Link to="/create">
                    <button variant="outlined">
                        Create Account / Sign in
                    </button>
                </Link>

            </div>

            <div>
                report url
                <input type="text" value={report} onChange = {e => {setReport(e.target.value)}}/>
                
                <button onClick={() => {parseReport()}}>Submit</button>
            </div>
        </>
    )
}
export default Home;