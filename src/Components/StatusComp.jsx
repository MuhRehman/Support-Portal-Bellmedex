
  import React, { useState, useEffect } from 'react'
  import axios from 'axios'; 
  
  export default function StatusComp() {
  
      const [dataStatus, setDataStatus] = useState([]);
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(true);
  
 


    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://192.168.1.16:3060/api/Dashboard/GetTasksByStatus');
          setDataStatus(response.data); 
      console.log("DataStatus: ", response.data);
      
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
           <h6 class="title">Status</h6>
           </div>

           <div className='m-4'>
         <div className='d-flex'>
           <div>
            <div>Sept</div>
              <div><b>2024</b></div>
           </div>

           <div className="col-md-6">
           <span className='text-year'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </span>
           </div>
         </div>
         <div  className='row mt-4'>
          <div className='col-1'>

         <i  class="fa fa-times close-reviewss "></i>
          </div>
         <div class="progressBar col-4 mt-1" >
          <div class="progressBar__fill " style={{width:"80%" , color:"red !"}}></div>
         </div>
         
         <div className='ml-3 text-bolder'>OPEN 14</div>
         </div>

         <div  className='row mt-2'>
          <div className='col-1'>

         <i  class="fa fa-times close-reviewss "></i>
          </div>
         <div class="progressBar col-6 mt-1" >
          <div class="progressBar__fill1 " style={{width:"90%"}}></div>
         </div>
         
         <div className='ml-3 text-bolder'>IN PROGRESS 45</div>
         </div>

         <div  className='row mt-2'>
          <div className='col-1'>

         <i  class="fa fa-times close-reviewss "></i>
          </div>
         <div class="progressBar col-6 mt-1" >
          <div class="progressBar__fill2 " style={{width:"100%"}}></div>
         </div>
         
         <div className='ml-3 text-bolder'>COMPLETED 77</div>
         </div>


         <div  className='row mt-2'>
          <div className='col-1'>

         <i  class="fa fa-times close-reviewss "></i>
          </div>
         <div class="progressBar col-4 mt-1" >
          <div class="progressBar__fill3 " style={{width:"60%"}}></div>
         </div>
         
         <div className='ml-3 text-bolder'>OVER DUE 01</div>
         </div>

         <div  className='row mt-2'>
          <div className='col-1'>

         <i  class="fa fa-times close-reviewss "></i>
          </div>
         <div class="progressBar col-4 mt-1" >
          <div class="progressBar__fill4 " style={{width:"80%"}}></div>
         </div>
         
         <div className='ml-3 text-bolder'>CLOSE 41</div>
         </div>

         <div  className='row mt-2'>
          <div className='col-1'>

         <i  class="fa fa-times close-reviewss "></i>
          </div>
         <div class="progressBar col-6 mt-1" >
          <div class="progressBar__fill5 " style={{width:"90%"}}></div>
         </div>
         
         <div className='ml-3 text-bolder'>PENDING ON CLIENT 11</div>
         </div>

         <div  className='row mt-2'>
          <div className='col-1'>

         <i  class="fa fa-times close-reviewss "></i>
          </div>
         <div class="progressBar col-5 mt-1" >
          <div class="progressBar__fill6 " style={{width:"60%"}}></div>
         </div>
         
         <div className='ml-3 text-bolder'>OPEN 14</div>
         </div>
           </div>
          {/* <table class="table table-hover no-border ">
       
        {dataStatus.data? (
    <tbody>
        {dataStatus.data.map((item, index) => (
          <tr key={index} >

             <td>{item.StatusID}</td>
             <td>{item.Status}</td>
             <td>{item.StatusCount}</td>
          </tr>
         
        ))}
         </tbody>
   ): (
    <p>No data found</p>
  )}

        
      </table> */}

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
  
