import React, { useState, useEffect } from 'react'
import axios from 'axios'; 

export default function PriorityComp() {

    const [dataPriority, setDataPriority] = useState([]);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://tms-api.providerscredentialing.com/api/Dashboard/GetTasksByPriority');
        setDataPriority(response.data); 
		console.log("DataPriority: ", response.data);
		
      } catch (error) {
        setError(error.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);  


  return (
    <div class="md-card">
    <table class="table table-hover no-border">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">LTR</th>
      <th scope="col">Location</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
          <img class="table-user" src="https://avatar.iran.liara.run/public/boy" alt=""/> Pearl Chavez
      </td>
      <td>100<sub>LTR</sub></td>
      <td>Noida</td>
      <td>
          <span class="badge badge-pill badge-secondary">Ongoing</span>

      </td>
    </tr>

   <div>
   {dataPriority.data? (
    <div>
        {dataPriority.data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
          </div>
   ): (
    <p>No data found</p>
  )}
   </div>
    
   

  </tbody>
</table>
</div>  
  )
}
