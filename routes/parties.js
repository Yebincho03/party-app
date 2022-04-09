const partyController = require("../controllers/partyControllers") 
const validator = require('../validators');
const router = require('express').Router({mergeParams:true});

router.post('/newParty', validator.partyValidator, partyController.saveParty)

router.get('/getParty',partyController.getAllParty)

module.exports = router;
