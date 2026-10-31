const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0'; 
app.use((req, res, next) => {
  res.on('finish', () => {
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.originalUrl} -> HTTP ${res.statusCode}`);
  });
  next();
});
app.get('/', (req, res) => {
  res.status(200).send('Welcome to BDF Lab 1 - Node.js and Express Server!');
});

app.get('/about', (req, res) => {
  res.status(200).json({
    name: "Potnuru Dilleswara Rao",
    section: "CSE-2D"
  });
});

app.get('/time', (req, res) => {
  const currentDate = new Date();
  res.status(200).json({
    currentTime: currentDate.toISOString(),
    humanReadableTime: currentDate.toLocaleString(),
    timestamp: currentDate.getTime()
  });
});

app.use((req, res) => {
  res.status(404).json({
    status: 404,
    error: "Not Found",
    message: `Cannot ${req.method} ${req.originalUrl}. The requested route does not exist.`
  });
});

app.listen(PORT, HOST, () => {
  console.log(`[Express Server] Server is running and listening on http://localhost:${PORT}`);
  console.log(`[Express Server] Bound to host: ${HOST}`);
  console.log('[Express Server] Press Ctrl + C to stop the server.');
});
