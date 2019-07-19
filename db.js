// Database
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const host = process.env.MONGO_HOST || 'ec2-54-213-136-50.us-west-2.compute.amazonaws.com';
const url = `mongodb://${host}:27017`;

// Database Name
const dbName = 'tumo_gyulnazaryan';

class Database {
  static connect() {
    const client = new MongoClient(url, {useNewUrlParser: true});
    // Use connect method to connect to the server
    client.connect(function(err) {
      assert.equal(null, err);
      Database.db = client.db(dbName);
      console.log('Connected to MongoDB Server ' + url)
    });    
  }
  static getClient() {
    return Database.db;
  }
}

module.exports = Database;