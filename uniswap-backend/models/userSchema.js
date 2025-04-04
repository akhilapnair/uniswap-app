let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    email:String,
    username: String,
    fname: String,
    password: String,
    phoneno: Number
});

let User = mongoose.model('users', userSchema);

module.exports = User;

module.exports.saveUser = function (data, done) {
    console.log(data, 'data--------------------->');
    let user = new User({
        email: data.email,
        username: data.username,
        fname: data.fname,
        password: data.password,
        phoneno: data.phoneno
    });
    User.findOne({ username: data.username }).then(function (result) {
        if (result === null) {
            user.save().then(function () {
                done(true);
            });
        }
        else {
            done(false);
        }
    });
}


