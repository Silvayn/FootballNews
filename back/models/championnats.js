const mongoose = require('mongoose')


const championnatSchema = new mongoose.Schema({
    id :{ type: Number, required: true }, 
    area: {
        id: Number,
        name: String,
    },
    name: String,
    code: String,
    emblemUrl: String,
    plan: String,
    currentSeason: {
        id: Number,
        startDate: String,
        endDate: String,
        currentMatchday: Number,
        winner: Number
    },
    lastUpdate: String
    
}) ;
const Championnat =  mongoose.model('Championnat', championnatSchema);
module.exports = Championnat;