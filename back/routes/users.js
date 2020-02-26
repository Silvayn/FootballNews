const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user.js')

router.post('/auth', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const query = { email }
  //Check the user exists
 
  User.findOne(query, (err, user) => {
    
    console.log(user);
    //erreur pendant l'excution de la requete
    if (err) {
      return res.send({
        success: false,
        message: 'Error, please try again'
      });
    }

    //si user existe pas 
    if (!user) {
      return res.send({
        success: false,
        message: 'Error, Account not found'
      });
    }

    //verifier si le mdp est correcte
    user.isPasswordMatch(password, user.password, (err, isMatch) => {

      //mdp invalid
      if (!isMatch) {
        return res.send({
          success: false,
          message: 'Error, Invalid Password'
        });
      }

      //User valide

      const ONE_WEEK = 604800; //Token validtity in seconds
      //generation de token
      const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: ONE_WEEK });
      //User Is Valid
      //This object is just used to remove the password from the retuned fields
      let returnUser = {
        name: user.name,
        email: user.email,
        id: user._id
      }
      //Send the response back
      return res.send({
        success: true,
        message: 'You can login now',
        user: returnUser,
        token

      });
    });
  });
});

//Registeration
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  console.log(newUser);
  newUser.save((err, user) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Failed to save the user'
      });
    }
    res.send({
      success: true,
      message: 'User Saved',
      user
    });
  });
});

module.exports = router;