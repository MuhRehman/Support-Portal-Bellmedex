
  import React, { useState, useEffect } from 'react'
  import axios from 'axios'; 
  
  export default function CategoryComp() {
  
      const [dataCategory, setDataCategory] = useState([]);
  
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(true);
  
      
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://192.168.1.16:3060/api/Category/GetAllCategories');
          setDataCategory(response.data); 
      console.log("DataCategory: ", response.data);
      
        } catch (error) {
          setError(error.message); 
        } finally {
          setLoading(false); 
        }
      };
  
      fetchData();
    }, []);  
  
  
    return (
      <div   class="md-card table-wrapper table-wrapper-bar table-responsive m-0 p-0 ">
      <div className='table-header'>
           <h6 class="title">Category</h6>
           </div>
           <div >
      <table class="table table-hover no-border table-striped">
      {dataCategory.data? (
       <tbody className='tbody-wrapper' >
        {dataCategory.data.map((item, index) => (
          <tr key={index}>
          {/* <td>{item.Id}</td> */}
          <td>{item.Name}</td>
          <td>{item.name}</td>
          </tr>
        ))}
          </tbody>
        ): (
          <p>No data found</p>
          )}
              
      </table>
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
  
