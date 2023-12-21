import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Getdata() {
  const [datas, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://check-fawn-five.vercel.app/DataApi/get');
        const data = response.data;

        // Ensure that data is an array before updating state
        if (Array.isArray(data)) {
          setdata(data);
        } else {
          setError('Data is not in the expected format');
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Error fetching data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p>{error}</p>
      ) : datas.length > 0 ? (
        <ul>
          {datas.map((item, index) => (
            <li key={index}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
}

export default Getdata;
