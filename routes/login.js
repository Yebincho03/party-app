const profileController = require("../controllers/profileControllers") 
const router = require('express').Router({mergeParams:true});

router.post('/login', profileController.loginUser)

module.exports = router;
