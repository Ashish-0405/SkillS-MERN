const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));



app.get("/", (req, res) => {
    // res.send("Hello World!");
    res.render("index.ejs")
  });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});