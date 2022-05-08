import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../css/home.css';



const Home = () => {
    const { getPullData, getReportData, getSuccessAndSetWipeReason } = require('../parseLib');
    
    const [report, setReport] = useState("");
    const parseReport = async (e) => {
        e.preventDefault();
        if (report != "") {
            var reportID = report.substring(report.lastIndexOf('/') + 1);
            const reportData = await getReportData(reportID);
            const pullData = getPullData(reportData);
            const success = getSuccessAndSetWipeReason(pullData);
            console.log(pullData)
            console.log(success)
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
            <form onSubmit={parseReport}>
                <label>
                    report url
                    <input type="text" value={report} onChange = {e => setReport(e.target.value)}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
            </div>
        </div>
    )
}
export default Home;