const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const editJsonFile = require("edit-json-file");
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.all('/', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use(cors());

app.get('/flags', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
})

app.get("/flags/:flag", (req, res) => {
  const flags = require("./flags.json");
  let inside = false;
  Object.keys(flags).forEach(flag => {
    if(flag === req.params.flag){
      inside = true;
      res.send({
        icon: flags[flag]
      });
      return;
    }
  });
  if (!inside) {
    res.send({
      icon: flags.default
    });
  }
});

app.post('/flags/set-flags', (req, res) => {
  const flags = require("./flags.json");
  let file = editJsonFile(`${__dirname}/flags.json`);
  file.set(req.body.code, req.body.url);
  file.save();
  if(file.save){
    res.send("Updated succesfully!")
  }
})

app.listen(89, () => console.log('app listening on port 89!'));

