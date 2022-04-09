const Party = require("../models/party.js");
const axios = require('axios');

async function saveParty(req, res){
    

    const cloudName = "dj4dgack3";
    const apiKey = '858565615173735';

    try {
        const linkResponse = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            file: req.body.imageLink.file,
            timestamp: req.body.imageLink.timestamp,
            upload_preset: 't8wwxtyv',
            api_key: apiKey
        });
        const party = new Party({
            title: req.body.title,
            location: req.body.location,
            date: req.body.date,
            time: req.body.time,
            imageLink: linkResponse.data.url,
            hostingId : req.body.hostingId
        });
        console.log(party)
        const response = await party.save();
        res.send(response);
    } catch (err) {
        return res.status(400).send(err);
    }
}

function getAllParty(req, res){
    Party.find({}, function(err, parties){
        res.status(200).json(parties)
    })
}




module.exports.saveParty = saveParty;
module.exports.getAllParty = getAllParty;