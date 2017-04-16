import * as express from 'express';
import * as bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import * as path from 'path';
import * as assert from 'assert';
import * as fallback from 'express-history-api-fallback'

const app = express();

const PORT = 8000;
const DATABASE_URL = 'mongodb://localhost:27017/test';
const TABLE_NAME = 'test';

let db;
let collection;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(DATABASE_URL, (err, database) => {
  assert.equal(null, err, err);
  db = database;
  collection = db.collection(TABLE_NAME);
  console.log('Connected to database ' + DATABASE_URL);

  app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
  });
});

app.put('/api', (req, res) => {
  console.log(req.body);
  collection.insertOne(req.body, (err, result) => {
    if (err) {
      res.send(false);
      return console.log(err);
    }
    console.log('saved to database');
    res.send(true);
  });
});

app.get('/api', (req, res) => {
  collection.find({}).toArray((err, docs) => {
    res.send(docs);
  });
});

app.use('/node_modules', express.static(path.join(__dirname, '..', 'node_modules')));
app.use(express.static(path.join(__dirname, '..', 'app', 'dist')));
app.use(fallback(path.join(__dirname, '..', 'app', 'dist', 'index.html')));
