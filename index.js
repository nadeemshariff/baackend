require('dotenv').config()

// Import the express module

const express = require('express');

// Create an instance of express
const app = express();

// Set the port number
const port = 4000;

// Define a route handler for the root path
app.get('/', (req, res) => {
  // Send a 'Hello World' message as the response
  res.send('Hello World');
});

// Define a route handler for the /twitter path
app.get('/twitter', (req, res) => {
  // Send 'nadeem.com' as the response
  res.send('nadeem.com');
});

app.get('/login', (req, res) => {
    res.send("login");
});


app.get('/youtube', (req, res) => {
    res.send('youtube.com');
})

// Start the server and listen on the specified port
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${port}`);
});

// There is no need to call app.listen() twice with the same port number
// The second call has been removed