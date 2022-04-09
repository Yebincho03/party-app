const profileController = require("../controllers/profileControllers") 
const router = require('express').Router({mergeParams:true});
const validator = require('../validators');

router.post('/profile',validator.profileValidator, profileController.saveProfile)
router.get('/profile/:id', profileController.getProfile)
router.get('/profile/hosting/:id', profileController.getHosting)

module.exports = router;
