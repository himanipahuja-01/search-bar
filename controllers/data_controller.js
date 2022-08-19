const myconnection = require("../db/database");
myconnection.connect_to_server((err) => {
  if (err) {
    throw err;
  }
});

function getAds(req, res) {
  var db = myconnection.getdb();
  db.collection("ads")
    .find()
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      res.json({ result });
      res.end();
    });
}

module.exports = getAds;
