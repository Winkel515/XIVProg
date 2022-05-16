const express = require('express');
const router = express.Router();
 
const { getPullData, getReportData, getSuccessAndSetWipeReason } = require('../parseLib');

/* GET home page. */
router.get('/:reportID/pull', async (req, res, next) => {
  const reportData = await getReportData(req.params.reportID);
  const pullData = getPullData(reportData);
  res.json(pullData);
});

router.get('/:reportID/success', async (req, res, next) => {
  const reportData = await getReportData(req.params.reportID);
  const pullData = getPullData(reportData);
  const success = getSuccessAndSetWipeReason(pullData);
  res.json(success);
});

router.get('/', (req, res) => {
  res.send('Ligma Balls');
})

module.exports = router;
