const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema({
    _id: String,
    id: Number,
    area: {
        id: Number,
        name: String,
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
    squad: {
        id: Number,
        name: String,
        position: String,
        dateOfBirth: String,
        countryOfBirth: String,
        nationality: String,
        shirtNumber: Number,
        role: String
    },
    lastUpdate: String
    
}) ;
const Club =  mongoose.model('Club', clubSchema);
module.exports = Club;