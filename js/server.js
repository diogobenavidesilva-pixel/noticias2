// server.js
const http = require('http');

const PORT = 3000;
const HOST = 'localhost';

// Create the server to handle requests and responses
const server = http.createServer((req, res) => {
    // Set response headers
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Send the response body
    res.end('Hello from native Node.js server!\n');
});

// Start the server
server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});
// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Parse incoming JSON payloads
app.use(express.json());

// Define a GET route for the homepage
app.get('/', (req, res) => {
    res.send('Hello from Express.js server!');
});

// Define an API GET route returning JSON data
app.get('/api/user', (req, res) => {
    res.json({ id: 1, name: 'John Doe' });
});

// Start listening for requests
app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}...`);
});
