import * as express from 'express';
import * as bodyParser from 'body-parser';
import { MongoClient, ObjectID } from 'mongodb';
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

app.get('/api/repositories', (req, res) => {
  collection.find({}).toArray((err, docs) => {
    res.send(docs);
  });
});

app.get('/api/repository/:id', (req, res) => {
  collection.findOne({_id: new ObjectID(req.params.id)}).then((docs) => {
    if (docs) {
      res.send(docs);
    } else {
      res.status(404);
      res.send('Repository not found');
    }
  });
});

app.post('/api/repository', (req, res) => {
  collection.insert({name: req.body.name}, (err, result) => {
    if (err) {
      res.send(false);
      return console.log(err);
    }
    res.send(true);
  });
});

app.put('/api/repository/:id', (req, res) => {
  collection.findOneAndUpdate({_id: new ObjectID(req.params.id)},
    {$set: {name: req.body.name}}, {}, (err, result) => {
      if (err) {
        res.send(false);
        return console.log(err);
      }
      res.send(true);
    });
});

app.delete('/api/repository/:id', (req, res) => {
  collection.remove({_id: new ObjectID(req.params.id)}, (err, result) => {
      if (err) {
        res.send(false);
        return console.log(err);
      }
      res.send(true);
    });
});

app.use('/node_modules', express.static(path.join(__dirname, '..', 'node_modules')));
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use(fallback(path.join(__dirname, '..', 'client', 'dist', 'index.html')));
