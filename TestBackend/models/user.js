var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({

    firstName: { type: String, require: true , trim: true},
    lastName: { type: String, required: true, trim: true },
    userName: { type: String, required: true, trim: true },

    email: { type: String, required: true },
    password: { type: String, required: true },


    dateRegistered: { type: Date, default: new Date() }
})

module.exports = mongoose.model('Users', UserSchema)
