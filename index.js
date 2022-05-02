const axios = require('axios');
const fs = require('fs');
const wipeCauseTimers = require('./wipeCauseTimers.json');

const ENCOUNTER_ID = "PkyCFm1xw8Z4hYtX";

const main = async() => {
    const reportData = await getReportData()
    const pullData = getPullData(reportData);
    const success = getSuccessAndSetWipeReason(pullData);
    console.log(pullData);
    console.log(success);
    fs.writeFile('./successRate.json', JSON.stringify(success, null, 2), err => {
        if (err) {
            console.error(err);
          }
    })
}

const getReportData = async () => {
    return (await axios.get(`https://www.fflogs.com:443/v1/report/fights/${ENCOUNTER_ID}?api_key=5520e3472454cb3f51c8949400deaba5`)).data;
}

/*
returns:
[
    {
        pull_number,
        duration,
        startTime,
        durationMinutes,
        durationSeconds
    }
]
*/
const getPullData = (report) => {
    const fights = [];

    let reportFight = report.fights.filter(x => x.boss !== 0);
    for(let i = 0; i < reportFight.length; i++) {
        reportFight[i].pull_number = i+1;
    }

    for (let i = 0; i < report.fights.length; i++) {
        const reportFight = report.fights[i];
        if(reportFight.boss !== 0 && reportFight.fightPercentage < 9000) // sub 20 sec pulls. fflogs considers them as Trash Fight
            fights.push(report.fights[i])
    }

    const data = [];

    for (let i = 0; i < fights.length; i++) {
        // pull duration time calculation
        const durationMinutes = Math.floor((fights[i].end_time - fights[i].start_time)/1000/60);
        const durationSeconds = '0' + Math.floor((fights[i].end_time - fights[i].start_time)/1000%60);

        // for start time of pull
        const startDate = new Date(report.start + report.fights[i].start_time)
        const startHours = startDate.getHours();
        const startMinutes = '0' + startDate.getMinutes();

        data.push({
            pull_number: fights[i].pull_number,
            duration: `${durationMinutes}:${durationSeconds.substring(durationSeconds.length-2)}`,
            startTime: `${startHours}:${startMinutes.substring(startMinutes.length-2)}`,
            durationMinutes: durationMinutes,
            durationSeconds: parseInt(durationSeconds), // parseInt because of string conversion for formating durationSeconds
            id: fights[i].id
        })
    }

    return data;
}

// Eehhhh, this method is cringe because it mutates pullData, but returns a success vs attempts array, but it seems to be more efficient to do this LMAO
const getSuccessAndSetWipeReason = (pullData) => {
    const mechanicSuccess = [];

    for(const wipe of wipeCauseTimers) {
        mechanicSuccess.push({
            mechanic: wipe.mechanic,
            success: 0,
            attempts: 0,
            // successPullNumber: [],
            // failurePullNumber: []
        })
    }

    for(const pull of pullData) {
        for(let i = 0; i < wipeCauseTimers.length; i++) {
            const wipe = wipeCauseTimers[i];
            mechanicSuccess[i].attempts++;
            if(wipe.min > pull.durationMinutes || wipe.min === pull.durationMinutes && wipe.sec > pull.durationSeconds) {
                pull.wipeReason = wipe.mechanic;
                // mechanicSuccess[i].failurePullNumber.push(pull.pull_number)
                break;
            } else {
                mechanicSuccess[i].success++;
                // mechanicSuccess[i].successPullNumber.push(pull.pull_number)
            }
        }
    }

    for(const x of mechanicSuccess) {
        x.successRate = x.success/x.attempts * 100
    }

    return mechanicSuccess;
}

main();