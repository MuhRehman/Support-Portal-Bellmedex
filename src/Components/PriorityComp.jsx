
import { Pie } from 'react-chartjs-2';
import React, { useState, useEffect } from 'react'
import axios from 'axios'; 
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

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


    
  const priorityCounts = []; 

console.log(priorityCounts);

    const data = {
      
        labels: [],
        
        datasets: [
          {
            data: priorityCounts,
            backgroundColor: [
              'rgba(39, 46, 245, 0.8)',
              'rgba(96, 96, 102, 0.8)',
              'rgba(174, 61, 25, 0.8)',
              'rgba(203, 196, 194, 0.8)',
            ],
            borderWidth: 1,
          },
        ],
      };
      return (
        
     <div class="md-card table-wrapper table-responsive m-0 p-0 ">
     <div className='table-header'>
     <h6 class="title">Priority</h6>
     </div>
     <div className="d-flex">
      <div className="col-6">
      {/* <table class="table table-hover no-border "> */}
      <div className=''>
           <div className='ml-3 mt-5'>
            <div>Sept</div>
              <div><b className='year-text'>2024</b></div>
           </div>

           <div className="col-md-12">
           <span className='text-year'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </span>
           </div>
           <div className="col-md-12">
           <span className='text-low'> Low</span>
           </div>
           <div className="col-md-12">
           <span className='text-normal'> Normal</span>
           </div>
           <div className="col-md-12">
           <span className='text-high'> High</span>
           </div>
           <div className="col-md-12">
           <span className='text-urgent'> Urgent</span>
           </div>
         </div>
  
   <div className='' style={{  visibility:"hidden"}}>

   {dataPriority.data? (
     
     dataPriority.data.map((item, index) => (
       //    <li key={index}>{item.Priority}</li>
       <tr > 
         
          {/* <td>{item.PriorityId}</td> */}
          {/* <td>{item.Priority}</td> */}
          {/* <td>{item.PriorityCount}</td>  */}
          {priorityCounts.push(item.PriorityCount)}
         </tr> 
       
        ))
        
   ): (
     <p>No data found</p>
    )}
  
    </div>
    
   

  
{/* </table> */}
      </div>
      <div className="col-6">
      <div class="chart-container" >
      <Pie data={data}    style={{ position:"relative", height:"40vh", width:"80vw"}} />
     </div>
      </div>
     </div>
    
    
</div> 
      )
}







