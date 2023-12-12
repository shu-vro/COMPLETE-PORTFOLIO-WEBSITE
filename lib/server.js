const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Hello, welcome to my CyberFoilio!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});
