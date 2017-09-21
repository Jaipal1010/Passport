var mongoose = require('mongoose/');

mongoose.connect('mongodb://localhost/MyDataBase',{useMongoClient: true});

var Schema = mongoose.Schema;
var UserDetail = new Schema({
    username: String,
    password: String,
    displayName: String,
}, {
    collection: 'userInfo'
});
var UserDetails = mongoose.model('userInfo', UserDetail);

var records = [
    {"id":1,"username":"jai","password":"password","displayName":"Jaipal"},
];

exports.findById = function(id, cb) {
    process.nextTick(function() {
        var idx = id-1;
        if(records[idx]) {
            cb(null, records[idx]);
        }  else {
            cb(new Error('User ' + id + ' does not exist'));
        }

    });
}

exports.findByUsername = function(username, cb) {
    process.nextTick(function() {
        console.log(username);
        for(var i=0 ;i<records.length;i++) {
            if(records[i].username == username) {
                return cb(null,records[i]);
            }
        }
        return cb("error");
    });
}
