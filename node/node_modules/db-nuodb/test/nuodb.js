
// modules
var _        = require("underscore");
var util     = require("util");
var nuodb    = require("./../db-nuodb");
var nodeunit = require("nodeunit");
var testCase = nodeunit.testCase;

// database information
var HOSTNAME = "localhost";
var USER     = "dba";
var PASSWORD = "user";
var DATABASE = "test";
var SCHEMA   = "stats";
var PORT     = 48004;

createDbClient = function(callback){
      new nuodb.Database({
        hostname: HOSTNAME,
        user: USER,
        password: PASSWORD,
        database: DATABASE,
        port: PORT,
	schema: SCHEMA
      }).connect(function(error){
          if (error) {
              throw new Error('Could not connect to test DB');
          }
          callback(this);
      });
}

module.exports = nodeunit.testCase({

  setUp: function(callback) {    
    var self = this;
    createDbClient(function(client) {
      self.client = client;
      cmd = "CREATE TABLE events (name VARCHAR(50) NULL, value VARCHAR(50) NULL, type VARCHAR(50) NOT NULL, PID VARCHAR(50) NOT NULL, HOSTNAME VARCHAR(50) NOT NULL, MYTIME TIMESTAMP)";
      self.client.query().execute(cmd, function(error) { 
	if(error) {
	    throw new Error('Error: ' + error);
        } else {
	  callback();
        }
      });
    });
  },

  tearDown: function(callback) {
    var self = this;
    cmd = "DROP TABLE stats.events";
    this.client.query().execute(cmd, function(error){
      if(error){
	  throw new Error('Error: ' + error);
      } else {
	callback();  
      }
    });
  },

  "execute INSERT with dictionary via insert()": function(test) {
    var self = this;
    var mock_data = {
        name :  "Memory", 
        value : 1.2e10,
        type : "DDRAM",
        PID: 123,
        HOSTNAME : "HUW1",
        MYTIME: "now"
    }          
    fields = [];
    values = [];
    for(r in mock_data) {
        fields.push(r);
        values.push(mock_data[r]);           
    }
    this.client.query().insert("EVENTS", fields, values).execute(function(error) { 
      if(error) {
	console.log('Error: ' + error);
        test.done(1);
      } else {
	self.client.query().select("*").from("stats.events").execute(function(error, rows){
	  if(error){
	    console.log('Error: ' + error);
            test.done(1);
          } else {
	    if(_.isEmpty(rows)){
	      console.log('Error: ' + error);
              test.done(1);
            } else {
	      test.done();
	    }
          }
        });
      }
    });
  },

  "execute INSERT with field/value arrays via insert()": function(test) {
    var self = this;
      table  = 'events';
      fields = ['name', 'value', 'type', 'pid', 'hostname', 'mytime'];
      values = ['foo', 'bar', 'hello', 'world', 'localhost', 'now'];
      this.client.query().insert(table, fields, values, true).execute(function(error) { 
      if(error) {
	console.log('Error: ' + error);
        test.done(1);
      } else {
	self.client.query().select("*").from("stats.events").execute(function(error, rows){
	  if(error){
	    console.log('Error: ' + error);
            test.done(1);
          } else {
	    if(_.isEmpty(rows)){
	      console.log('Error: ' + error);
              test.done(1);
            } else {
	      test.done();
	    }
          }
        });
      }
    });
  },

  /*
  "execute INSERT with quoted fields via execute()": function(test) {
    var self = this;
    cmd = "INSERT INTO 'EVENTS'('NAME', 'VALUE', 'TYPE', 'PID', 'HOSTNAME') VALUES ('Memory', '1.2e10', 'DDRAM', '123', 'HUW1')";
    this.client.query().execute(cmd, function(error) { 
      if(error) {
	  console.log('Error: ' + error);
          test.done(1);
      } else {
	self.client.query().select("*").from("stats.events").execute(function(error, rows){
	  if(error){
	    console.log('Error: ' + error);
            test.done();           
          } else {
	    if(_.isEmpty(rows)){
		console.log('Error: ' + error);
                test.done(1);
	    } else {
		test.done();
	    }
          }
        });
      }
    });
  },
  */

  "execute INSERT with non-quoted fields via execute()": function(test) {
    var self = this;
    cmd = "INSERT INTO EVENTS(NAME, VALUE, TYPE, PID, HOSTNAME) VALUES ('Memory', '1.2e10', 'DDRAM', '123', 'HUW1')";
    this.client.query().execute(cmd, function(error) { 
      if(error) {
	console.log('Error: ' + error);
        test.done(1);
      } else {
	self.client.query().select("*").from("stats.events").execute(function(error, rows){
	  if(error){
	    console.log('Error: ' + error);
            test.done(1);           
          } else {
	    if(_.isEmpty(rows)){
	      console.log('Error: ' + error);
              test.done(1);
	    } else {
	      test.done();
	    }
          }
        });
      }
    });
  }

});
