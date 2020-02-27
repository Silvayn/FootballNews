
require('dotenv').config();
const passport = require('passport');
const mongoose = require('mongoose');
const express = require('express');
const articlesRouter = require('./routes/articles');
const championnatsRouter = require('./routes/championnats');
const teamsRouter = require('./routes/teams');
const clubsRouter = require('./routes/clubs');
const UserRoutes = require('./routes/users');
const cors = require('cors')
const bodayParser = require('body-parser');
const path = require('path');

/* Server MiddleWare, config and booting */
var app = express();
//Passport MW
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
//Body Parser MW
app.use(bodayParser.json());
//CROS MW
app.use(cors());


app.use(express.json())
app.use(cors());
app.use('/articles', articlesRouter);
app.use('/championnats', championnatsRouter);
app.use('/teams', teamsRouter);
app.use('/clubs', clubsRouter);
  //Users Routes
  app.use('/users', UserRoutes);
app.listen(8080, () =>
  console.log('server is running on port ' +8080)
);
// connection a la base de donnée 
mongoose.set('useFindAndModify', false)
mongoose.connect("mongodb://localhost:27017/FootballNews", {useUnifiedTopology: true,useNewUrlParser:true})
let db = mongoose.connection;
db.on('error', (err) => {throw err}) 
db.once('open', () => console.log('Connection Successful!')) 

//*****************************************************************************
app.get('/', (req, res, next) => {
  res.send('ça marche')
});