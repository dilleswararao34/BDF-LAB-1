/**
 * BDF LAB 1: Node.js and Express Server
 * File: server.js
 * Description: Express.js web server handling predefined GET routes and 404 errors.
 */

// Step 1: Import the Express framework
const express = require('express');

// Step 2: Initialize the Express application
const app = express();

// Step 3: Define the Port and Host
// Uses process.env.PORT provided by deployment platforms (e.g., Render), defaulting to 3000 locally
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0'; // Binding to 0.0.0.0 ensures accessibility both locally and on cloud hosts

// Step 4: Simple Logging Middleware (Helpful for monitoring requests and status codes in terminal)
app.use((req, res, next) => {
  res.on('finish', () => {
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.originalUrl} -> HTTP ${res.statusCode}`);
  });
  next();
});

// ==========================================
// TASK 5: IMPLEMENT REQUIRED ROUTES
// ==========================================

/**
 * ROUTE 1: Home Route
 * Method: GET
 * Path: /
 * Description: Returns a simple welcome message
 * Expected Status: 200 OK
 */
app.get('/', (req, res) => {
  res.status(200).send('Welcome to BDF Lab 1 - Node.js and Express Server!');
});

/**
 * ROUTE 2: About Route
 * Method: GET
 * Path: /about
 * Description: Returns student details in JSON format
 * Expected Status: 200 OK
 */
app.get('/about', (req, res) => {
  res.status(200).json({
    name: "Potnuru Dilleswara Rao",
    section: "CSE-2D"
  });
});

/**
 * ROUTE 3: Time Route
 * Method: GET
 * Path: /time
 * Description: Returns the current date and time using new Date() in JSON format
 * Expected Status: 200 OK
 */
app.get('/time', (req, res) => {
  const currentDate = new Date();
  res.status(200).json({
    currentTime: currentDate.toISOString(),
    humanReadableTime: currentDate.toLocaleString(),
    timestamp: currentDate.getTime()
  });
});

// ==========================================
// TASK 6: HANDLE UNKNOWN ROUTES (404 HANDLER)
// ==========================================

/**
 * 404 Middleware
 * Catches all requests that did not match any defined routes above
 * Expected Status: 404 Not Found
 */
app.use((req, res) => {
  res.status(404).json({
    status: 404,
    error: "Not Found",
    message: `Cannot ${req.method} ${req.originalUrl}. The requested route does not exist.`
  });
});

// ==========================================
// TASK 4: START THE SERVER
// ==========================================
app.listen(PORT, HOST, () => {
  console.log(`[Express Server] Server is running and listening on http://localhost:${PORT}`);
  console.log(`[Express Server] Bound to host: ${HOST}`);
  console.log('[Express Server] Press Ctrl + C to stop the server.');
});
