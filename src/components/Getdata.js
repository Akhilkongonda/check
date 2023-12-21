import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Getdata() {
  const [datas, setdata] = useState([]); // Set initial state to an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://check-fawn-five.vercel.app/DataApi/get');
        const data = response.data;

        // Process the data or update state as needed
        console.log('Data:', data);
        setdata(data);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      {datas.length > 0 ? ( // Check if datas is an array with elements
        <ul>
          {datas.map((item, index) => (
            <li key={index}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default Getdata;
