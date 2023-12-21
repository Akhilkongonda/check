import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Getdata() {
  const [datas, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://check-fawn-five.vercel.app/DataApi/get');
        const data = response.data;

        // Ensure that data is an array before updating state
        if (Array.isArray(data)) {
          setdata(data);
        } else {
          console.error('Data is not an array:', data);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {datas.length > 0 ? (
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
