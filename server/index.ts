import * as express from 'express';
import * as bodyParser from 'body-parser';
import { MongoClient, ObjectID } from 'mongodb';
import * as path from 'path';
import * as assert from 'assert';
import * as fallback from 'express-history-api-fallback';

const app = express();

const PORT = 8000;
const MONGODB_ADDRESS = process.env.MONGODB_PORT_27017_TCP_ADDR || 'localhost';
const MONGODB_PORT = process.env.MONGODB_PORT_27017_TCP_PORT || '27017';
const MONGODB_DATABASE = 'PiGit';
const MONGODB_URL = 'mongodb://' + MONGODB_ADDRESS + ':' + MONGODB_PORT + '/' + MONGODB_DATABASE;
const REPOSITORY_TABLE_NAME = 'repositories';
const USER_TABLE_NAME = 'users';

let db;
let repositories;
let users;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(MONGODB_URL, (err, database) => {
  assert.equal(null, err, err);
  db = database;
  repositories = db.collection(REPOSITORY_TABLE_NAME);
  users = db.collection(USER_TABLE_NAME);
  console.log('Connected to database ' + MONGODB_URL);

  app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
  });
});

app.get('/api/repositories', (req, res) => {
  repositories.find({}).toArray((err, docs) => {
    res.send(docs);
  });
});

app.get('/api/repository/:id', (req, res) => {
  repositories.findOne({_id: new ObjectID(req.params.id)}).then((docs) => {
    if (docs) {
      res.send(docs);
    } else {
      res.status(404);
      res.send('Repository not found');
    }
  });
});

app.post('/api/repository', (req, res) => {
  repositories.insert({name: req.body.name, owner: req.body.owner}, (err, result) => {
    if (err) {
      res.send(false);
      return console.log(err);
    }
    res.send(true);
  });
});

app.put('/api/repository/:id', (req, res) => {
  repositories.findOneAndUpdate({_id: new ObjectID(req.params.id)},
    {$set: {name: req.body.name}}, {}, (err, result) => {
      if (err) {
        res.send(false);
        return console.log(err);
      }
      res.send(true);
    });
});

app.delete('/api/repository/:id', (req, res) => {
  repositories.remove({_id: new ObjectID(req.params.id)}, (err, result) => {
    if (err) {
      res.send(false);
      return console.log(err);
    }
    res.send(true);
  });
});

app.post('/api/member/login', (req, res) => {
  repositories.find({}).toArray((err, docs) => {
    res.send(docs);
  });
});

app.use('/node_modules', express.static(path.join(__dirname, '..', 'node_modules')));
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use(fallback(path.join(__dirname, '..', 'client', 'dist', 'index.html')));
