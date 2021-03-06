import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../css/report.css'
import ReactJson from 'react-json-view'

const Report = () => {
    const { reportID } = useParams();
    const [reportData, setReportData] = useState("");
    const [pullData, setPullData] = useState("");
    const [success, setSuccess] = useState("");
    const [showPull, setPull] = useState(true);
    const [loading, setLoading] = useState(true);
    const [valid, setValid] = useState(true);
    const { getPullData, getReportData, getSuccessAndSetWipeReason } = require('../parseLib');
    const type = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

    useEffect(() => {
        async function sendRequest() {
            try{
                const rData = await getReportData(reportID);
                const pData = getPullData(rData);
                const succ = getSuccessAndSetWipeReason(pData);
                setReportData(rData);
                setPullData(pData);
                setSuccess(succ);
                if (type == "success") {
                    setPull(false);
                }
            }
            catch{
                setValid(false);
            }
            
            setLoading(false);
        }
        sendRequest()
    }, [])
    
    return(
        <div>
            { loading ? (
                <div className="loading">
                    Loading...
                </div>
            ) : 
            <>
                {valid?
                    <> 
                    { showPull ? (
                        <div className="report">
                            <Button variant="contained" onClick={() => {setPull(false); window.history.replaceState(null, "", "/report/" + reportID + "/success")}}>Show Successes</Button>
                            <ReactJson theme="summerfruit" displayDataTypes={false} collapsed={2} src={pullData}/>
                        </div>
                        ) : null}
        
                        { showPull ? null : (
                        <div className="report">
                            <Button variant="contained" onClick={() => {setPull(true); window.history.replaceState(null, "", "/report/" + reportID + "/pull")}}>Show Pulls</Button>
                            <ReactJson theme="summerfruit" displayDataTypes={false} collapsed={2} src={success}/>
                        </div>
                        )}
                    </>
                    :
                    <div className="invalid">
                        Invalid Report.
                    </div>
                }
                
            </>}

            
        </div>
    )
}
export default Report;