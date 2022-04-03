const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PartySchema = new Schema({
    title:{
        type: String,
        required:true,
        maxLength: 30
    },
    location:{
        type: String,
        required:true,
        maxLength: 50
    },
    date:{
        type: Date,
        required:true
    },
    time: {
        type: String,
        required:true
    
    }
});




const Party = mongoose.model("Party", PartySchema);
module.exports = Party;