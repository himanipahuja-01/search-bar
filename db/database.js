const MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/chandigarh";

var _mydbo;

module.exports = {
    connect_to_server:(callback)=>{
        MongoClient.connect(url, function(err,db){
            console.log('database created');
            _mydbo = db.db('chandigarh')
            callback(err)
        })
    },
    getdb:()=>{
        return _mydbo;
    }
}
