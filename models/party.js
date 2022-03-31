const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PartySchema = new Schema({
    title:{
        type:String,
        required:true,
        maxLength: 30
    },
    hp:{
        type:Number,
        default:1
    },
});




const Party = mongoose.model("Party", PartySchema);
module.exports = Party;