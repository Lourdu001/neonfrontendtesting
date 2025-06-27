// import React,{useState} from 'react'
// import axios from 'axios'
// const Displaydata = () => {
// const [get, setget] = useState([]);
// const getdata = () =>{
//     const getcall =async() =>{ await axios.get('/',(req,res)=>{
//         setget(JSON.stringify(res.disdata));
//         console.log("data stored sucessfully");
        
//     });
// }
//     try {
//         getcall();
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// const [disdata, setdisdata] = useState(false);

//   return (
// <div>
//     <button onClick={()=>getdata}>get</button>
//     <button onClick={()=>setdisdata(!disdata)}>display</button>
//     {disdata===false||<div>
// {
//     get.length===0||get.map(
//         (item)=>
//             <div>
//                 <h1>{item.empid}</h1>
//                 <h1>{item.date}</h1>
//                 <h1>{item.name}</h1>
//                 <h1>{item.attendance}</h1>
//                 <h1>{item.timein}</h1>
//                 <h1>{item.timeout}</h1>
//             </div>

//     )
// }
//     </div>}
// </div>
// )
// }

// export default Displaydata
import React, { useState } from 'react';
import axios from 'axios';

const Displaydata = () => {
  const [get, setGet] = useState([]);
  const [disdata, setDisdata] = useState(false);

  const getdata = async () => {
    try {
      const response = await axios.get('http://localhost:3001/'); // update URL as needed
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
