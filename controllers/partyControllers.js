const Party = require("../models/party.js");

function saveParty(req, res){
    console.log(req.body)
    let party = new Party(req.body);
    party.save().then(
        res => {
            console.log(res)
        }
    )
    .catch(error => console.error(error));
}

function getAllParty(req, res){
    Party.find({}, function(err, parties){
        res.status(200).json(parties)
    })
}

module.exports.saveParty = saveParty;
module.exports.getAllParty = getAllParty;
