const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    count: Number,
    competition: {
        id: Number,
        area: {
            id: Number,
            name: String
        },
        name: String,
        code: String,
        plan: String,
        lastUpdate: String
    },
    season: {
        id: Number,
        startDate: String,
        endDate: String,
        currentMatchday: Number,
        winner: Number
    },
    equipes: {
        id: Number,
        area: {
            id: Number,
            name: String
        },
        name: String,
        shortName: String,
        tla: String,
        crestUrl: String,
        address: String,
        phone: String,
        website: String,
        email: String,
        founded: Number,
        clubColors: String,
        venue: String,
        lastUpdate: String
    }
    
}) ;
const Team =  mongoose.model('Team', teamSchema);
module.exports = Team;