const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//Buyer Schema
const UserSchema = mongoose.Schema({
    mastery: {
      math: {
        number_properties: Number,
        divisibility: Number,
        fractions_and_decimals: Number,
        percents: Number,
        ratios_proportions_rates: Number,
        averages: Number,
        probability: Number,
        power_and_roots: Number,
        algebraic_expressions: Number,
        factoring: Number,
        solving_equations: Number,
        intermediate_algebra: Number,
        coordinate_geometry: Number,
        lines_and_angles: Number,
        triangles: Number,
        right_triangles: Number,
        other_polygons: Number,
        circles: Number,
        solids: Number,
        trigonometry: Number
      },
      reading: Number,
      science: Number,
      english: Number,
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserbyId = function(id, callback){
    User.findById(id, callback);
}

module.exports.getUserbyEmail = function(email, callback){
    const query = {email: email};
    User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) {throw err;}
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}
module.exports.comparePassword = function (inputtedPassword, hash, callback){
    bcrypt.compare(inputtedPassword, hash, (err, isMatch) => {
            if(isMatch) {
                return callback(null, isMatch);
            } else {
                return callback();
            }
        });
}
