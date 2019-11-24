const express = require('express');
const router = express.Router();
const userManagementService = require('../service/userManagementService');
const loginFilter = require('../utils/loginFilter');

// POST http://localhost:3000/users/getUser
// Body { "userId": "1" }
router.post('/users/getUser', loginFilter, async (req, res) => {
  try {
    const data = await userManagementService.getUser(req.body.userId);
    res.json({success: true, data})
  } catch (ex) {
    console.log(ex)
    res.json({success: false, message: 'Fail to get user', ex})
  }
});

// POST http://localhost:3000/users/getUsers
// Body { }
router.post('/users/getUsers', loginFilter, async (req, res) => {
  try {
    const data = await userManagementService.getUsers();
    res.json({success: true, data})
  } catch (ex) {
    console.log(ex)
    res.json({success: false, message: 'Fail to get users', ex})
  }
});

// POST http://localhost:3000/users/saveUser
// Body { "userName": "carinnia",  "displayName": "Carinnia Tan", "password": "password", "token": "token" }
router.post('/users/saveUser', loginFilter, async (req, res) => {
  try {
    const data = await userManagementService.saveUser(req.body);
    res.json({success: true, data})
  } catch(ex) {
    console.log(ex)
    res.json({success: false, message: 'Fail to save user', ex})
  }
});

module.exports = router;
