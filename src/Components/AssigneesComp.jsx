
  import React, { useState, useEffect } from 'react'
  import axios from 'axios'; 
  
  export default function AssigneesComp() {
  
      const [dataAssignees, setDataAssignees] = useState([]);
  
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(true);
  
      
    useEffect(() => {
      const fetchData = async () => {
        try {
      
          const response = await axios.get('http://192.168.1.16:3060/api/Dashboard/GetTasksByAssignee');
          setDataAssignees(response.data); 
      console.log("Data Assignees: ", response.data);
      
        } catch (error) {
          setError(error.message); 
        } finally {
          setLoading(false); 
        }
      };
  
      fetchData();
    }, []);  
  
  
    return (
      <div class="md-card table-wrapper table-responsive m-0 p-0  mb-4">
      <div className='table-header'>
           <h6 class="title">Assignees</h6>
           </div>
          <table class="table table-hover no-border  ">
       
       
         
          {dataAssignees.data? (
        <div className='d-flex flex-wrap justify-content-around '>
        {dataAssignees.data.map((item, index) => (
        
    
        <div class="card span-card p-2">
        <div className='card-wrapper-bot'>
           <img className='w-25 pr-2 box-img' src="https://avatar.iran.liara.run/public" alt=""/> 
            {item.AssigneeName} <span>{item.TotalTasksPerAssignee}</span>
            </div>
        
       
        </div>
       
         
        //    <div key={index} class="read-reviews-btn">
          
        
         
        //    {item.AssigneeName}  {item.AssigneeName}
         
           
        //  </div>
        ))}
        
          </div>
   ): (
    <p>No data found</p>
  )}

        
      </table>

      <div>
 
   </div>
      <div class="read-reviews">
        <div class="name">
          <h4>Mr. Jhone Doe</h4>
          <img src="image/starts.png" alt=""/>
          <i  class="fa fa-times close-reviews"></i>

        </div>
        <p class="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa adipisci dolores dignissimos magnam. Ratione tenetur rem numquam officiis minus aliquid quaerat ipsum tempora ducimus blanditiis officia nobis nesciunt, dignissimos, expedita.
        </p>
        </div>

      </div>
    )
  }
  
