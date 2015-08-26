var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

mongoose.connect('mongodb://127.0.0.1/2todo')

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended' : 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+jason'}));
app.use(methodOverride());

var Task = mongoose.model('Task', {
  text : String,
  isDone : Boolean
})

app.get('/api/tasks', function(req, res) {
  Task.find(function(err, tasks) {
    if (err){
      res.send(err)
    }
    res.json(tasks);
  });
});

app.post('/api/tasks', function(req, res) {

  Task.create({
    text : req.body.text,
    isDone : false
  }, function(err, tasks) {
    if (err){
      res.send(err)
    };
    Task.find(function(err, tasks){
      if (err){
        res.send(err)
      };
      res.json(tasks);  
    });
  });
});

app.delete('/api/tasks/:task_id', function(req, res) {
  Task.remove({
    _id : req.params.taks_id
  }, function(err, tasks) {
    if (err){
        res.send(err)
      };

    Task.find(function(err, tasks){
      if (err){
        res.send(err)
      };
      res.json(tasks);
    });
  });
});

app.get('*', function(req, res){
  res.sendfile('./public/index.html');
});


app.listen(8080);
console.log("App listening on port 8080")

