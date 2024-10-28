import React, { useState, useEffect } from 'react'
import axios from 'axios'; 

export default function PriorityComp() {

    const [dataPriority, setDataPriority] = useState([]);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.1.16:3060/api/Dashboard/GetTasksByPriority');
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
    <div class="md-card table-wrapper table-responsive m-0 p-0 ">
<div className='table-header'>
     <h6 class="title">Priority</h6>
     </div>
    <table class="table table-hover no-border ">
   
   {dataPriority.data? (
    <tbody>
        {dataPriority.data.map((item, index) => (
        //    <li key={index}>{item.Priority}</li>
          <tr key={index}> 
        
          
           <td>{item.PriorityId}</td>
          <td>{item.Priority}</td>
          <td>{item.PriorityCount}</td> 
         
         </tr> 
       
        ))}
         </tbody>
   ): (
    <p>No data found</p>
  )}
  
    
   

  
</table>
</div>  
  )
}
