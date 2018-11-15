const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

//Register
router.post('/register',(req,res) => {
    let newUser = new User({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
  });

  //code for detecting registering buyer with the same email.
  User.findOne({email: req.body.email}, (err, foundUser) => {
    if (err) return handleError(err);
    if(foundUser != null){
      console.log ('Found user with email %s', foundUser.email);
      res.json({success: false, msg:"Failed to register user! Email already in use."})
    }
    else{
      console.log('New email used, %s',req.body.email);
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email)){
        console.log('New email address %s passed format checking.', req.body.email);
        User.addUser(newUser, (err, user) => {
            if(err){
                res.json({success: false, msg:"Failed to register user!"})
            }
            else {
                res.json({success: true, msg:"User Registered!"})
            }
        });
      }
      else{
        console.log('New email address %s failed format checking.', req.body.email);
        res.json({success: false, msg:"Failed to register User! Email is not valid format."})
      }
    }
  })
});

//Authenticate
router.post('/login', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.getUserbyEmail(email, (err, user) => {
      if(err) throw err;
      if(!user){
        return res.json({success: false, msg: 'User not found'});
      }

      User.comparePassword(password, user.password, (err, isMatch) => {
        if(err) throw err;
        if(isMatch){
          const token = jwt.sign({data: user}, config.secret, {
            expiresIn: 604800 // 1 week
          });

          res.json({
            success: true,
            token: `${token}`,
            user: {
              id: user._id,
              first_name: user.first_name,
              last_name: user.last_name,
              email: user.email
            }
          });
        } else {
          return res.json({success: false, msg: 'Wrong password'});
        }
      });
    });
  });

//Profile
router.get('/profile', (req, res) => {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ success: false, message:'No token provided.' });

    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ success: false, message: 'Failed to authenticate token.' });
      delete decoded.data.password;
      res.status(200).send(decoded);

    });
  });

//Create Request
router.post('/request', (req, res, next) => {
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ success: false, message:'Must login to create request.' });

  var request = new Request({
    buyer_ID: req.body.buyer_ID,
    code: req.body.code,
    buyer_first_name: req.body.buyer_first_name,
    buyer_last_name: req.body.buyer_last_name,
    title: req.body.title,
    description:req.body.description
  });

  request.save( (err,post) => {
      if (err) { return next(err); }
      res.status(201).json(post);
  });
})

module.exports = router;
