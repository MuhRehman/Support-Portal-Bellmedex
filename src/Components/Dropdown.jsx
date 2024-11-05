import React, { useState, useEffect } from 'react';


const Dropdown = ({ options, name, label, onChange }) => (




     <div class="h-16 border-1 mt-4   px-2 w-full md:w-1/2 lg:w-1/4">
      <fieldset>
      <label class="font-sans text-sm mb-1 font-medium block mb-2 ">{label}</label>
      <div class="relative border border-gray-300 text-gray-800 bg-white shadow-lg">
        {/* <label for="frm-whatever" class="sr-only">My field</label> */}
        <select class="relative select-custom outline-none rounded py-2 px-3 w-full 
      bg-white shadow text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"
      name={name} onChange={onChange} id="frm-whatever">
       <option value="">Select  {label}</option>
       {options.map((option) => (
         <option key={option.value} value={option.value}>
          {option.label}
        </option>
         ))}
    
        </select>
        <div class="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
       
       
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 26 26" width="16px" height="16px"><path d="M 10 0.1875 C 4.578125 0.1875 0.1875 4.578125 0.1875 10 C 0.1875 15.421875 4.578125 19.8125 10 19.8125 C 12.289063 19.8125 14.394531 19.003906 16.0625 17.6875 L 16.9375 18.5625 C 16.570313 19.253906 16.699219 20.136719 17.28125 20.71875 L 21.875 25.34375 C 22.589844 26.058594 23.753906 26.058594 24.46875 25.34375 L 25.34375 24.46875 C 26.058594 23.753906 26.058594 22.589844 25.34375 21.875 L 20.71875 17.28125 C 20.132813 16.695313 19.253906 16.59375 18.5625 16.96875 L 17.6875 16.09375 C 19.011719 14.421875 19.8125 12.300781 19.8125 10 C 19.8125 4.578125 15.421875 0.1875 10 0.1875 Z M 10 2 C 14.417969 2 18 5.582031 18 10 C 18 14.417969 14.417969 18 10 18 C 5.582031 18 2 14.417969 2 10 C 2 5.582031 5.582031 2 10 2 Z M 4.9375 7.46875 C 4.421875 8.304688 4.125 9.289063 4.125 10.34375 C 4.125 13.371094 6.566406 15.8125 9.59375 15.8125 C 10.761719 15.8125 11.859375 15.433594 12.75 14.8125 C 12.511719 14.839844 12.246094 14.84375 12 14.84375 C 8.085938 14.84375 4.9375 11.695313 4.9375 7.78125 C 4.9375 7.675781 4.933594 7.574219 4.9375 7.46875 Z"/>
        </svg>
        </div>
    </div>
    </fieldset>
          
    </div>

);

const App = () => {
  const [sideBarOptions, setSideBarOptions] = useState(null); // State to store fetched data
  const [selectedOptions, setSelectedOptions] = useState({}); // State to store selected values
  const [data, setData] = useState(null); // State to store API response data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to handle errors
  
  // Fetch data from API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.1.16:3060/api/Department/GetDepartmentDropDown'); // Replace with your API URL
        const data = await response.json();
        setSideBarOptions(data.sideBarOptions); // Update state with fetched data

      } catch (error) {
        console.error('Error fetching sidebar options:', error);
      }
    };

    fetchData();

    const fetchsData = async () => {
        setLoading(true);
        try {
          const response = await fetch('http://192.168.1.16:3060/api/Practice/GetPracticebyModel', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              perPage: 10,
              pageNo: 1,
              totalPages: 0,
              totalCount: 0,
              name: null,
              createdTo: null,
              createdFrom: null,
              isActive: true,
            }), // Sending specified payload
          });
  
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
  
          const result = await response.json();
          setData(result); // Store the response data in state
        } catch (err) {
          setError(err.message); // Handle errors
        } finally {
          setLoading(false); // Stop loading indicator
        }
      };
  
      fetchsData();

  }, []);

  // Update selected values when an option is selected
  const handleChange = (e) => {
    setSelectedOptions({
      ...selectedOptions,
      [e.target.name]: e.target.value,
    });
  };

  // Check if data is still loading
  if (!sideBarOptions) return <div></div>;

  return (
    <div className=' p-2 w-full flex flex-wrap'>
   
      <div class="h-16 border-1 mt-4   px-2 w-full md:w-1/2 lg:w-1/4 ">
      <label class="font-sans text-sm  font-medium block mb-2" for="username">Practice Name</label>
      <input type="number" class="relative border border-gray-300 outline-none rounded py-2 px-3 w-full 
      bg-white shadow-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline" placeholder="Ticket Number" />

      </div>
  
      {sideBarOptions.department && (
        <Dropdown
          options={sideBarOptions.department.value}
          name={sideBarOptions.department.name}
          label="Department"
          onChange={handleChange}
        />
      )}


      {sideBarOptions.team && (
        <Dropdown
          options={sideBarOptions.team.value}
          name={sideBarOptions.team.name}
          label="Team"
          onChange={handleChange}
        />
      )}
      {sideBarOptions.practice && (
        <Dropdown
          options={sideBarOptions.practice.value}
          name={sideBarOptions.practice.name}
          label="Practice"
          onChange={handleChange}
        />
      )}
      {sideBarOptions.assignee && (
        <Dropdown
          options={sideBarOptions.assignee.value}
          name={sideBarOptions.assignee.name}
          label="Assignee"
          onChange={handleChange}
        />
      )}
      {sideBarOptions.priority && (
        <Dropdown
          options={sideBarOptions.priority.value}
          name={sideBarOptions.priority.name}
          label="Priority"
          onChange={handleChange}
        />
      )}
      {sideBarOptions.status && (
        <Dropdown
          options={sideBarOptions.status.value}
          name={sideBarOptions.status.name}
          label="Status"
          onChange={handleChange}
        />
      )}
      {sideBarOptions.category && (
        <Dropdown
          options={sideBarOptions.category.value}
          name={sideBarOptions.category.name}
          label="Category"
          onChange={handleChange}
        />
      )}
        
        <div class=" h-16 border-1 mt-4   px-2 w-full md:w-1/2 lg:w-1/4 ">
      <label class="font-sans text-sm block mb-2 font-medium">From Date</label>
      <input type="date" class="relative border border-gray-300 outline-none rounded py-2 px-3 w-full 
      bg-white shadow-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline" placeholder="Ticket Number" />

      </div>

      
      <div class=" h-16 border-1 mt-4   px-2 w-full md:w-1/2 lg:w-1/4 ">
      <label class="font-sans text-sm block mb-2 font-medium">To Date</label>
      <input type="date" class="relative border border-gray-300 outline-none rounded py-2 px-3 w-full 
      bg-white shadow-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline" placeholder="Ticket Number" />

      </div>
     


      <div class="h-12 border-1 flex mt-12 mr-3 ml-auto justify-end items-center pb-1 px-1 w-full md:w-1/2 lg:w-1/4">
      <button class="bg-white-500 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full m-4">
        Clear
      </button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Search
      </button>
        </div>

        


      
    
    <div className=" mx-auto p-4">
   
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg">
        <thead class="text-xs text-gray-700 uppercase bg-blueCustom">
              <tr>
              	 					
                  <th scope="col" class="px-6 py-3">
                  Task No
                  </th>
                  <th scope="col" class="px-6 py-3">
                  Practice
                  </th>
                  <th scope="col" class="px-6 py-3">
                  Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                  Department
                  </th>
                  <th scope="col" class="px-6 py-3">
                  Team
                  </th>
                  <th scope="col" class="px-6 py-3">
                  Assignee
                  </th>
                  <th scope="col" class="px-6 py-3">
                  Category
                  </th>
                  <th scope="col" class="px-6 py-3">
                  Status
                  </th>
                  <th scope="col" class="px-6 py-3">
                  Created Date	
                  </th>
                  <th scope="col" class="px-6 py-3">
                  Action
                  </th>
              </tr>
          </thead>
        
          <tbody>
            {data.data.length > 0 ? (
              data.data.map((item) => (
                <tr key={item.Id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">{item.Id}</td>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">{item.PracticeName}</td>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">{item.PracticeCode}</td>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">{item.IsActive ? 'Yes' : 'No'}</td>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">{new Date(item.CreatedAt).toLocaleString()}</td>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">{item.CreatedBy || 'N/A'}</td>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">{new Date(item.UpdatedAt).toLocaleString()}</td>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">{item.UpdatedBy || 'N/A'}</td>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">{item.SoftwareName || 'N/A'}</td>
                  <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700"><i class="fa fa-trash-o" style={{fontSize:"25px",color:"red"}}></i></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="px-4 py-2 border-b border-gray-200 text-center text-gray-500">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default App;