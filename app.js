const express = require("express");
const app = express();
const postBank = require('./postBank');
const static = require('static');

app.use(express.static('public'))

app.get("/", (req, res) => {
res.send(`
<html>
  <head>
    <style rel='stylesheet' href='./public/style.css' />
    <title> Wizard News </title>
  </head>
  <body>
    <h1>Wizard News</h1>
  <body>
</html>
`);


const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
})});
