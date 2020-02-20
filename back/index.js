
const mongoose = require('mongoose');
const express = require('express');
const articlesRouter = require('./routes/articles');
const cors = require('cors')

/* Server MiddleWare, config and booting */
var app = express();
app.use(express.json())
app.use(cors());
app.use('/articles', articlesRouter);
app.listen(8080, () =>
  console.log('server is running on port ' +8080)
);
// connection a la base de donnée 
mongoose.set('useFindAndModify', false)
mongoose.connect("mongodb://localhost:27017/footballnews", {useUnifiedTopology: true,useNewUrlParser:true})
let db = mongoose.connection;
db.on('error', (err) => {throw err}) 
db.once('open', () => console.log('Connection Successful!')) 

//*****************************************************************************
