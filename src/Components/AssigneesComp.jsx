
  import React, { useState, useEffect } from 'react'
  import axios from 'axios'; 
  
  export default function AssigneesComp() {
  
      const [dataAssignees, setDataAssignees] = useState([]);
  
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(true);
  
      
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://tms-api.providerscredentialing.com/api/Dashboard/GetTasksByAssignee');
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
      <div class="md-card por">
      <table class="table table-hover no-border">
       
        <tbody>
          <tr class="read-reviews-btn">
            <td>
              <img class="table-user" src="https://avatar.iran.liara.run/public/girl" alt=""/> Pearl Chavez
            </td>

            <td><img src="image/starts.png" alt=""/></td>
            <td align="right">
              <button type="button" class="btn btn-sm btn-primary">Read Reviews</button>

            </td>
          </tr>
        <tr>
            <td>
              <img class="table-user" src="https://avatar.iran.liara.run/public/girl"alt=""/> Pearl Chavez
            </td>

            <td><img src="image/starts.png" alt=""/></td>
            <td align="right">
              <button type="button" class="btn btn-sm btn-primary">Read Reviews</button>

            </td>
          </tr>
        <tr>
            <td>
              <img class="table-user" src="https://avatar.iran.liara.run/public/girl" alt=""/> Pearl Chavez
            </td>

            <td><img src="image/starts.png" alt=""/></td>
            <td align="right">
              <button type="button" class="btn btn-sm btn-primary">Read Reviews</button>

            </td>
          </tr>
        <tr>
            <td>
              <img class="table-user" src="https://avatar.iran.liara.run/public/girl" alt=""/> Pearl Chavez
            </td>

            <td><img src="image/starts.png" alt=""/></td>
            <td align="right">
              <button type="button" class="btn btn-sm btn-primary">Read Reviews</button>

            </td>
          </tr>
        <tr>
            <td>
              <img class="table-user" src="https://avatar.iran.liara.run/public/girl" alt=""/> Pearl Chavez
            </td>

            <td><img src="image/starts.png" alt=""/></td>
            <td align="right">
              <button type="button" class="btn btn-sm btn-primary">Read Reviews</button>

            </td>
          </tr>

        </tbody>
      </table>

      <div>
   {dataAssignees.data? (
    <div>
        {dataAssignees.data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
          </div>
   ): (
    <p>No data found</p>
  )}
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
  
