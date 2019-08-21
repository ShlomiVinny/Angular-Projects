
const express = require('express');
const data = require('./data.json');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const api = require('./router/api')


const app = express();
const port = 3000;
const url = 'mongodb://localhost:27017';
const dbName = 'angular3';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', api)

let userCount = 1;



MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    
    console.log("Connected successfully to server");
   
    const db = client.db(dbName);
   insertDocuments(db,'users', print());
    client.close();
  });

  function insertDocuments(db, collection, callback) {
    // Get the documents collection
    const collection = db.collection(collection);
    // Insert some documents
    collection.insertMany([
      {a : 1}, {a : 2}, {a : 3}
    ], (err, result) => {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });
  }

  function print(result){
    console.log(result);
  }




app.get('/', function (req, res) {
  res.send(data);
  console.log('SERVER: Server sent response');
  
});

app.get('/login/:userDetails', (req, res)=>{
    
});
 
app.listen(port);


console.log('SERVER: Server is running and listening on port:',port);