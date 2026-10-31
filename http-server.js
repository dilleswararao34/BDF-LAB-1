/**
 * BDF LAB 1: Node.js and Express Server
 * File: http-server.js
 * Description: A basic HTTP server built using Node.js built-in 'http' module.
 */

// Step 1: Import the built-in Node.js 'http' module
const http = require('http');

// Step 2: Define the port number
// Uses environment variable PORT if available (e.g., in production), otherwise defaults to 3000
const PORT = process.env.PORT || 3000;

// Step 3: Create the HTTP server using http.createServer()
// The callback function runs whenever a client makes an HTTP request to the server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with status code 200 (OK) and content type
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

  // Return the required response text "Hello" and end the response
  res.end('Hello');
});

// Step 4: Make the server listen on the specified port
server.listen(PORT, () => {
  console.log(`[HTTP Server] Plain Node.js HTTP Server is running at http://localhost:${PORT}`);
  console.log('[HTTP Server] Press Ctrl + C to stop the server.');
});
