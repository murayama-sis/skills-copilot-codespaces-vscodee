// Create web server and listen to port 3000
var express = require('express');
var app = express();

// Create a route for GET request
app.get('/', function(req, res) {
  res.send('Hello World');
});

app.listen(3000, function() {
  console.log('Server is running on port 3000');
});

// Create a route for POST request
app.post('/', function(req, res) {
  res.send('Got a POST request');
});

app.listen(3000, function() {
  console.log('Server is running on port 3000');
});

// Create a route for PUT request
app.put('/user', function(req, res) {
  res.send('Got a PUT request at /user');
});

app.listen(3000, function() {
  console.log('Server is running on port 3000');
});

// Create a route for DELETE request
app.delete('/user', function(req, res) {
  res.send('Got a DELETE request at /user');
});

app.listen(3000, function() {
  console.log('Server is running on port 3000');
});

// Create a route for all HTTP methods
app.all('/secret', function(req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});

app.listen(3000, function() {
  console.log('Server is running on port 3000');
});

// Create a route for path pattern
app.get('/ab?cd', function(req, res) {
  res.send('ab?cd');
});

app.listen(3000, function() {
  console.log('Server is running on port 3000');
});

// Create a route for path pattern
app.get('/ab+cd', function(req, res) {
  res.send('ab+cd');
});

app.listen(3000, function() {
  console.log('Server is running on port 3000');
});

// Create a route for path pattern
app.get('/ab*cd', function(req, res) {
  res.send('ab*cd');
});

app.listen(3000, function() {
  console.log('Server is running on port 3000');
});

// Create a route for path pattern
app.get('/ab(cd)?e', function(req, res) {
  res.send('ab(cd)?e');
});

app.listen(3000, function() {
  console.log