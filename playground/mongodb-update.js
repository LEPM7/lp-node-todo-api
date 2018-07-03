const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',
  (err, client)=> {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    
    db.collection('Todos').findOneAndUpdate(
      {
        _id: new ObjectId("5b3aa099d3c4d518fdfa29c8")
      },
      {
        $set: {
          completed: true
        }
      }, {
        returnOriginal: false
      }
    ).then((result) => {
      console.log(result);
    });
    
    client.close();
  });
