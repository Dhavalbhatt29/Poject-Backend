 const express = require('express');
 const router = express.Router();
 const { todayuser, updateduser, login, authverify } = require('../controllers/today_controller');
const Auth = require('../middleware/requireauth');
 

 router.post('/today', todayuser);
 router.put('/updateduser/:id', updateduser);
 router.post('/login', login);
 router.post('/authverify', Auth , authverify);

 
 module.exports = router;
