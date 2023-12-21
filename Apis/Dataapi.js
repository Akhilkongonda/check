const exp = require('express');
const studentdata = exp.Router();
const connection = require('./db');
const cors = require('cors');
studentdata.use(exp.json());
studentdata.use(cors());

// CORS configuration
const corsOptions = {
  origin: 'https://check-two-bice.vercel.app', // Replace with the actual domain of your React app
  optionsSuccessStatus: 200,
};
studentdata.use(cors(corsOptions))

studentdata.post('/post', async (req, res) => {
    try {
      let data = req.body;
      console.log("Received data:", data);
  
      // Corrected SQL query syntax, assuming 'name' and 'number' are columns in the 'check' table
      const query = 'INSERT INTO `check` (`name`, `number`) VALUES (?, ?)';
      
      // Execute the query
      connection.query(query, [data.name, data.number], (error, results) => {
        if (error) {
          console.error('Database error:', error);
          res.status(500).json({ message: 'Internal Server Error', error: error.message });
        } else {
          console.log('Data inserted successfully:', results);
          res.status(200).json({ message: 'Data inserted successfully' });
        }
      });
  
    } catch (error) {
      console.error('Unexpected error:', error);
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  });


  module.exports=studentdata