"use strict";

const express = require('express');
const router = express.Router();

const SendGrid = require('../lib/sendgrid');

/* GET home page. */
router.get('/', function(req, res, next) {

  let jobAppArr = {};
  jobAppArr  = {
    userEmail : 'dac.davelee@gmail.com',
    subject : 'march-dave website someone visited',
    message : 'march-dave website someone visited'
  };

  // SendGrid.sendGridNotification(jobAppArr, (err, returnValue) => {
  //   if (err) { console.log(err); }
  // });

  res.render('index', { title: 'Express' });
});

module.exports = router;
