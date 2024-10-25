
  import React, { useState, useEffect } from 'react'
  import axios from 'axios'; 
  
  export default function StatusComp() {
  
      const [dataStatus, setDataStatus] = useState([]);
  
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(true);
  
      const dataStatus1 = [
        {
         id: "e1",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2020, 7, 14),
        },
        { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
        { 
        id: "e3",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2021, 2, 28),
        },
        {
        id: "e4",
        title: "New Desk (Wooden)",
        amount: 450,
        date: new Date(2021, 5, 12),
         },
         ]; 


    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://tms-api.providerscredentialing.com/api/Dashboard/GetTasksByStatus');
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
   {dataStatus.data? (
    <div>
        {dataStatus.data.map((item, index) => (
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
  
