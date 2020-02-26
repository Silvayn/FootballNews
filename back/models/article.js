const mongoose = require('mongoose')


const articleSchema = new mongoose.Schema({
    titre :{ type: String, required: true }, 
    dateCreation : Date, 
    contenu  : String,
    payant  : Boolean,
    image : String,
    autheur: {
        id: Number,
        nom: String,
    },
    teams: {
        id: Number,
        name: String,
    },
    championnat: {
        id: Number,
        name: String,
        url: String,
    }
    
}) ;
const Article =  mongoose.model('Article', articleSchema);
module.exports = Article;