const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    name:{
        type:String,
        required:true,
        maxLength: 30
    },
    powers: {
        type:[String], 
        default: ["Super strength"], 
        set:stringToArray
    }, 
    type:{
        type:String, 
        enum:['hero', 'villain'], 
        default:'hero'
    }, 
    hp:{
        type:Number,
        default:1
    },
});

function stringToArray(powerString) {
    let powerArray = powerString.split(",");
    let powers = powerArray.map(function (el) {
            return el.trim();
});
    
    return powers;
}

CharacterSchema.virtual('description').get(function() {
    if (this.type == "hero") {
        return this.name + " is a noble hero whose special powers are " + this.powers + ".";
    } else {
        return this.name + " is a nefarious villain whose special powers are " + this.powers + ".";
    }
})

CharacterSchema.static('findByType', function(type) {
    return this.find({ type }); 
});


const Character = mongoose.model("Character", CharacterSchema);
module.exports = Character;