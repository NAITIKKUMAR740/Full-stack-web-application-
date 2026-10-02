const express = require('express');
const app = express()
const port = 3000
const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'myuni';



app.get('/',async (req, res) => {
        // Use connect method to connect to the server
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('students');

        const studentsdata = await collection.find().toArray();
        console.log(studentsdata)
      
  res.send('Hello World!hey biy')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
