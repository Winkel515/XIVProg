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

    useEffect(() => {
        async function sendRequest() {
            try{
                const rData = await getReportData(reportID);
                const pData = getPullData(rData);
                const succ = getSuccessAndSetWipeReason(pData);
                setReportData(rData);
                setPullData(pData);
                setSuccess(succ);
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
                            <Button variant="contained" onClick={() => setPull(false)}>Show Successes</Button>
                            <ReactJson theme="summerfruit" displayDataTypes={false}  src={pullData}/>
                        </div>
                        ) : null}
        
                        { showPull ? null : (
                        <div className="report">
                            <Button variant="contained" onClick={() => setPull(true)}>Show Pulls</Button>
                            <ReactJson theme="summerfruit" displayDataTypes={false}  src={success}/>
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