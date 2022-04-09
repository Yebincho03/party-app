const { async } = require('regenerator-runtime');
const Profile = require("../models/profile.js");
const Party = require("../models/party.js");



function saveProfile(req, res){
    console.log(req.body)
    let profile = new Profile(req.body);
    profile.save().then(
        res => {
            console.log(res)
        }
    )
    .catch(error => console.error(error));
}

 const loginUser = async(req, res) => {
    const {email, password} = req.body;

    const user = await Profile.findOne({email, password});

    if(user){
        res.json({id: user._id, email : user.email, password : user.password})
    }else{
        res.json({error : "invalid password or email"})
    }
}

const getProfile = async(req, res) => {
    const currentUser = await Profile.findOne({_id : req.params.id})
    if(currentUser){
        res.json({email : currentUser.email, name: currentUser.name})
    }
    
}
const getHosting = async(req, res) => {
    const hosting = await Party.find({hostingId : req.params.id})
    if(hosting){
        res.json({hosting})
    }
    
}


module.exports.saveProfile = saveProfile;
module.exports.loginUser = loginUser;
module.exports.getProfile = getProfile;
module.exports.getHosting = getHosting;