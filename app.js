const express = require("express");
const app = express();
const port = 2711;
const data_controller = require('./controllers/data_controller')

app.get("/search_data", (req, res) => {
data_controller(req, res)
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
