const express = require('express'); // Import express
const db = require('./config/connections'); 
const routes = require('./routes'); // Import routes
const PORT = process.env.PORT || 3001; // Set the port to 3001
const app = express(); // Create an express app

//environment variables

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
const activity ="homeworkstuff"
// Start the server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${activity}!`);
  });
});