const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware for parsing JSON requests
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Your API routes go here
const studentdata = require('./Dataapi');
app.use('/Dataapi', studentdata);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Invalid path middleware
app.use((req, res) => {
  console.log('Invalid Path:');
  res.status(404).json({ message: 'Invalid Path' });
});

const PORT = process.env.PORT || 3500;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
