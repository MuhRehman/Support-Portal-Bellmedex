
  import React, { useState, useEffect } from 'react'
  import axios from 'axios'; 
  import closedIcon from './../assets/closed-Icon.svg';
  import completedIcon from './../assets/completed-Icon.svg';
  import inprogressIcon from './../assets/inprogress-Icon.svg';
  import openIcon from './../assets/open-Icon.svg';
  import overDueIcon from './../assets/overDue-Icon.svg';
  // import pendingIcon from './../assets/pending-Icon.svg';
  // import pendingOnClientIcon from './../assets/pendingOnClient-Icon.svg';






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
           {/* {dataStatus.data? (
         <div>
        {dataStatus.data.map((item, index) => (
          <div key={index} style={{visibility:"hidden"}} >

             <td>{item.StatusID}</td>
             <td>{item.Status}</td>
             <td>{item.StatusCount}</td>
          </div>
         
        ))}         </div>
      ): (
       <p>No data found</p>
     )} */}
   
           <div className='m-3 progress-bar-wrapper'>
         <div className='d-flex'>
           <div>
            <div>Sept</div>
              <div><b className='year-text'>2024</b></div>
           </div>

           <div className="col-md-6">
           <span className='text-year'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </span>
           </div>
         </div>
         <div  className='row mt-4'>
          <div className='col-1'>

         <img src={openIcon} alt="" />
          </div>
         <div class="progressBar col-4 mt-1" >
          <div class="progressBar__fill " style={{width:"80%" , color:"red !"}}></div>
         </div>
         
         <div className='ml-3 text-bolder'>OPEN 14</div>
         </div>

         <div  className='row mt-2'>
          <div className='col-1'>
          
          <img src={inprogressIcon} alt="" />
          </div>
         <div class="progressBar col-6 mt-1" >
          <div class="progressBar__fill1 " style={{width:"90%"}}></div>
         </div>
         
         <div className='ml-3 text-bolder'>IN PROGRESS 45</div>
         </div>

         <div  className='row mt-2'>
          <div className='col-1'>

          <img src={completedIcon} alt="" />
          </div>
         <div class="progressBar col-6 mt-1" >
          <div class="progressBar__fill2 " style={{width:"100%"}}></div>
         </div>
         
         <div className='ml-3 text-bolder'>COMPLETED 77</div>
         </div>


         <div  className='row mt-2'>
          <div className='col-1'>

          <img src={overDueIcon} alt="" />
          </div>
         <div class="progressBar col-4 mt-1" >
          <div class="progressBar__fill3 " style={{width:"60%"}}></div>
         </div>
         
         <div className='ml-3 text-bolder'>OVER DUE 01</div>
         </div>

         <div  className='row mt-2'>
          <div className='col-1'>

          <img src={openIcon} alt="" />
          </div>
         <div class="progressBar col-4 mt-1" >
          <div class="progressBar__fill4 " style={{width:"80%"}}></div>
         </div>
         
         <div className='ml-3 text-bolder'>CLOSE 41</div>
         </div>

         <div  className='row mt-2'>
          <div className='col-1'>

          <img src={inprogressIcon}  alt="" />
          </div>
         <div class="progressBar col-6 mt-1" >
          <div class="progressBar__fill5 " style={{width:"90%"}}></div>
         </div>
         
         <div className='ml-3 text-bolder'>PENDING ON CLIENT 11</div>
         </div>

         <div  className='row mt-2'>
          <div className='col-1'>

          <img src={completedIcon} alt="" />
          </div>
         <div class="progressBar col-5 mt-1" >
          <div class="progressBar__fill6 " style={{width:"60%"}}></div>
         </div>
         
         <div className='ml-3 text-bolder'>OPEN 14</div>
         </div>
           </div>
      
       
    

        


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
  
