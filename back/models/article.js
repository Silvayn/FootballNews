const mongoose = require('mongoose')


const articleSchema = new mongoose.Schema({
    titre :{ type: String, required: true }, 
    date_de_creation : Date, 
    id_auteur : Number,
    contenue  : String,
    payant  : Boolean,
    image : String 
    
}) ;
const Article =  mongoose.model('Article', articleSchema);
module.exports = Article;