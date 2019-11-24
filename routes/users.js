const express = require('express');
const router = express.Router();
const umService = require('../service/UmService');
const loginFilter = require('../utils/LoginFilter');

// POST http://localhost:3000/users/getUser
// Body { "userId": "1" }
router.post('/users/getUser', loginFilter, async (req, res) => {
  try {
    const data = await umService.getUser(req.body.userId);
    res.json({success: true, data})
  } catch (ex) {
    console.log(ex)
    res.json({success: false, message: 'Fail to get user', ex})
  }
});

// POST http://localhost:3000/users/saveUser
// Body { "userName": "carinnia",  "displayName": "Carinnia Tan", "password": "password", "token": "token" }
router.post('/users/saveUser', loginFilter, async (req, res) => {
  try {
    const data = await umService.saveUser(req.body);
    res.json({success: true, data})
  } catch(ex) {
    console.log(ex)
    res.json({success: false, message: 'Fail to save user', ex})
  }
});

module.exports = router;
