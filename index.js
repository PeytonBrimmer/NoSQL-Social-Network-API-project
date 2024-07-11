const express = require('express'); // Import express
const db = require('./config/connections'); 
const routes = require('./routes'); // Import routes
const PORT = process.env.PORT || 3001; // Set the port to 3001
const app = express(); // Create an express app

//environment variables
const PORT = process.env.PORT || 3001; // Set the port to 3001
const app = express(); // Create an express app

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Start the server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${activity}!`);
  });
});