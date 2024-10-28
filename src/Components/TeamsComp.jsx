
  import React, { useState, useEffect } from 'react'
  import axios from 'axios'; 
  
  export default function TeamsComp() {
  
      const [dataTeams, setDataTeams] = useState([]);
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(true);
  
      
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://192.168.1.16:3060/api/Dashboard/GetTasksByTeams');
          setDataTeams(response.data); 
      console.log("DataTeams: ", response.data);
      
        } catch (error) {
          setError(error.message); 
        } finally {
          setLoading(false); 
        }
      };
      
      fetchData();
    }, []);  
  
  
    return (
  <div class="md-card table-wrapper table-wrapper-bar table-responsive m-0 p-0 ">
      <div className='table-header'>
           <h6 class="title">Teams</h6>
           </div>
          <table class="table table-hover no-border table-striped ">
      
        

        {dataTeams.data? (
          <tbody>
              {dataTeams.data.map((item, index) => (
                <tr key={index}>
                  {/* <td> {item.TeamID}</td> */}
                  <td> {item.TaskSubject}</td>
                  <td> {item.TeamName}</td>
                  <td> {item.TotalTasksPerTeam}</td>
                </tr>
                
              ))}
          </tbody>
        ): (
          <p>No data found</p>
        )}
      
    </table>

   
    <div>
 
   </div>

    </div>
    )
  }
  
