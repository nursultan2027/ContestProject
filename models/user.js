var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: { type: String, required:true, lowercase: true},
    surname: { type: String, required:true, lowercase: true},
});

module.exports = mongoose.model('User', userSchema);