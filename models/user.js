/**
 * Created by Дмитрий on 01.03.2017.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    login: {type:String, required: true, unique: true},
    name: {type:String, required: true, default: 'Unnamed User'},
    password: {type:String, required:true},
    registrationDate: {type:Date},
    lastLoginTime: {type:Date},
});

module.exports = mongoose.model('user', User)