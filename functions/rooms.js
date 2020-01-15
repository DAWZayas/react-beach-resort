const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://root:root@cluster0-m2tlb.mongodb.net/test?retryWrites=true&w=majority";

exports.handler = (event, context, callback) => {
  const client = new MongoClient(uri);
  client.connect(err => {
    let filter = {}
    try {
      filter = JSON.parse(event.body)
    } catch {

    };
    client.db("test").collection("rooms").find(filter).toArray().then(rs => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(rs)
      })
      client.close();
    });

  });

}