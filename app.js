/**
 * Created by liekkas on 16/2/24.
 */
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

  console.log('>>> handle an question!uri:', req.url, ' method:', req.method);
  next();
});


const router = express.Router();


router.route('/map/:id')
  .get(function (req, res) {
    res.sendFile(path.join(__dirname, 'mapdata/' + req.params.id + '.json'));
  })

app.use('/api/v1', router);

app.listen(4000, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:4000');
});
