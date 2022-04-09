const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    email:{
        type: String,
        required:true,
        maxLength: 40
    },
    name:{
        type: String,
        required:true,
        maxLength: 30
    },
    password:{
        type: String,
        required:true
    }
});




const Profile = mongoose.model("Profile", ProfileSchema);
module.exports = Profile;