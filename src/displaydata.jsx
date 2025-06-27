import React, { useState } from 'react';
import axios from 'axios';

const Displaydata = () => {
  const [get, setGet] = useState([]);
  const [disdata, setDisdata] = useState(false);
const BaseUrl = 'https://neonservertesting.onrender.com';
  const getdata = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/`); 
      setGet(response.data);
      console.log("Data fetched successfully:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <button onClick={getdata}>Get Data</button>
      <button onClick={() => setDisdata(!disdata)}>Display</button>
      
      {disdata && (
        <div>
          {get.length === 0 ? (
            <p>No data available</p>
          ) : (
            get.map((item, index) => (
              <div key={index}>
                <h1>{item.empid}</h1>
                <h1>{item.date}</h1>
                <h1>{item.name}</h1>
                <h1>{item.attendance}</h1>
                <h1>{item.timein}</h1>
                <h1>{item.timeout}</h1>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Displaydata;
