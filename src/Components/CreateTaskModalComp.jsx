
    import React, { useEffect, useState } from "react";

    const Dropdown = ({ options, name, label, onChange,iconSVG }) => (






<li class="border-b py-2 text-sm flex border-gray-400">
<div class="flex text-sm items-center">
    <div class="rounded-full flex w-8 ml-2 justify-center items-center">
      {iconSVG}
    </div>
</div>
<div class="w-full flex flex-col pl-2">
    <div>
    <span class="pl-2 text-white">{label}</span>
    </div>
    <div class="pe-1 text-blue-700">
    <div class="flex flex-col">
        <label class="font-sans text-sm mb-1"></label>
        <div class="relative flex w-full">
        <div class="flex flex-col w-full">
        <select class="relative select-custom-model select-custom outline-none rounded pl-2 w-full 
             bg-white  text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"
                name={name} onChange={onChange} id="frm-whatever">
                <option value=""> Select  {label}</option>
                {options.map((option) => (
                    <option key={option.value} className="text-white" value={option.value}>
                    {option.label}
                </option>
                    ))}
           </select>
        
        </div>
        <div class="absolute right-1 bottom-2 pointer-events-none cursor-pointer bg-sideNavbg ">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="cursor-pointer text-white text-xl  pointer-events-none" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"></path>
            </svg>
        </div>
        </div>
    </div>
</div>
</div>
</li>
   
   );

   

    const CreateTaskModalComp = ({ isOpen, onClose, children }) => {

        const [sideBarOptions, setSideBarOptions] = useState(null); // State to store fetched data
        const [data, setData] = useState(null); // State to store API response data
        const [file, setFile] = useState(null);

        // Handle file selection
       

        useEffect(() => {

        const fetchData = async () => {

            try {
              const response = await fetch('http://192.168.1.16:3060/api/Department/GetDepartmentDropDown'); // Replace with your API URL
              const data = await response.json();
              setSideBarOptions(data.sideBarOptions);  
              console.log("ssss"+data.sideBarOptions);
              
            //   setSideBarOptions(data);  

              // debugger
              console.log(" Testing Side Bar Options  " + data.sideBarOptions);
                 
            } catch (error) {
              console.error('Error fetching sidebar options:', error);
            }
          };


          fetchData();

        }, []);


        const [filters, setFilters] = useState({
            ticketNumber: '',
            practiceName: '',
            teamName: '',
            PriorityName:'',
            departmentName: '',
            assigneeName: '',
            categoryName: '',
            statusName: '',
            dateFormName: '',
            toDate: '',
            subjectValue:'',
            escriptionValue:'',
            source:'',
            dateForm:'',
          });


        const [filteredData, setFilteredData] = useState(data);

        const [subjectValue, setSubjectValue] = useState();
        const [DescriptionValue, setDescriptionValue] = useState();
        const [selectedFile, setSelectedFile] = useState(null);
        const [loading, setLoading] = useState(true); // State to manage loading state
        const [error, setError] = useState(null); // State to handle errors


        const [files, setFiles] = useState(null);
        const [fileName, setFileName] = useState("");

        // Handle file selection
        const handleFileChanges = (event) => {
            const selectedFile = event.target.files[0];
            setFiles(selectedFile);
            setFileName(selectedFile ? selectedFile.name : "");
        };

        const handleFileChange = (event) => {
            // Access the file(s) from event.target.files
            const file = event.target.files[0];
            setSelectedFile(file);  // Save the file in state
          };

        const handleFilterChange = (e) => {
          console.log(e.target.value);
          
          const { name, value } = e.target;
      
          // setFilters((prev) => ({ ...prev, [name]: value }));
          
          setFilters((prevFilters) => ({
              ...prevFilters,
              [name]: value,
          }));
      
        //   console.log("filters.practiceName =---" + filters.practiceName);
        //   console.log("filters.practiceName =---" + filters.team);
        //   console.log("filters.practiceName =---" + filters.department);
        //   console.log("filters.practiceName =---" + filters.practiceName);
        //   console.log("filters.practiceName =---" + filters.practiceName);
          
        };
        // const handleFileChange = (event) => {
            // Access the file(s) from event.target.files
            // const file = event.target.files[0];
            // setSelectedFile(file);  
            // Save the file in state
        //   };

      

          // Handle file upload to API
  const handleUpload = async () => {
    
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        alert("File uploaded successfully!");
      } else {
        alert("File upload failed!");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("An error occurred during file upload.");
    }
  };

  const createTaskData = async () => {
    //   console.log("ddd6"+filters.practiceName);
    //   console.log("ddd8"+filters.departmentName);
    // console.log("ddd7"+filters.dateFormName);
    // console.log("ddd222"+filters.teamName);
    // console.log("ddd6"+filters.categoryName);
    // console.log("ddd5"+filters.assigneeName);
    // console.log("ddd4"+filters.priorityName);
    // console.log("ddd3"+filters.statusName);
    // console.log("ddd2"+DescriptionValue);
    // console.log("ddd12"+subjectValue);
    setLoading(true);
    try {
      const response = await fetch('http://192.168.1.16:3060/api/InternalTask/GetTasksbyModel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

 
        body: JSON.stringify({
                "id": 0,
                "number": 0,
                "subject": subjectValue,
                "description": DescriptionValue,
                "statusId": filters.statusName,
                "priorityId": filters.priorityName,
                "userId": 1,
                "practiceId": filters.practiceName,
                "categoryId": filters.categoryName,
                "departmentId": filters.departmentName,
                "teamId": filters.teamName,
                "assigneeId": filters.assigneeName,
                "internalAssigneeId": 0,
                "createdDate":  null,
                "updatedDate":  null,
                "targetDate": null,
                "source": filters.source,
                "isActive": true
              }), 
     


      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
    

      const result = await response.json(); // Parse JSON response
      setData(result); // Set data in state
      console.log("Search Fetched data:", result);
    
       
    } catch (err) {
      setError(err.message); // Handle errors
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

 

      if (!isOpen) return null;
    
      return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-modelBox rounded-lg shadow-lg   flex flex-col md:w-[90%] sm:w-[800px] rounded-t-xl max-h-[94vh] react-draggable">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-white ml-3">Create a Task</h2>
              <button onClick={onClose} className="text-white-800 p-2 pr-3 icon-color hover:text-gray-700">
                ✕
              </button>
            </div>
    
            {/* Modal Content */}
            <div className="overflow-auto">
            <div className="d-flex">
                <div className="w-[310px]  bg-sideNavbg bg-blue-700">
                <div class="bg-gradient-to-r from-[#a0a7af] to-[#ced4b4] flex justify-center"><span class="text-lg px-3 text-white font-semibold">Task # 0</span></div>
                <div class="py-2 border-b text-sm border-gray-400"><span class="text-white text-sm pl-5">Showed Results By</span></div>
                <ul>
               
            

                
                {sideBarOptions.practice && (

<Dropdown
  iconSVG={
    <i class="text-white text-2xl">
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1zM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z"></path>
    <path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm2 14h2v-3H7zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm0-14H6v1h4zm2 7v7h3V8zm-8 7V8H1v7z"></path>
    </svg>
  </i>
  }
  options={sideBarOptions.practice.value}
  name="practiceName"
  label="Practice Name "
  value={filters.practice}
  onChange={handleFilterChange}
/>

)}


{sideBarOptions.department && (
<Dropdown
 iconSVG={
    
    <i class="text-white text-2xl"><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon fill="#C5CAE9" points="42,42 6,42 6,9 24,2 42,9"></polygon><rect x="6" y="42" fill="#9FA8DA" width="36" height="2"></rect><rect x="20" y="35" fill="#BF360C" width="8" height="9"></rect><g fill="#1565C0"><rect x="31" y="27" width="6" height="5"></rect><rect x="21" y="27" width="6" height="5"></rect><rect x="11" y="27" width="6" height="5"></rect><rect x="31" y="35" width="6" height="5"></rect><rect x="11" y="35" width="6" height="5"></rect><rect x="31" y="19" width="6" height="5"></rect><rect x="21" y="19" width="6" height="5"></rect><rect x="11" y="19" width="6" height="5"></rect><rect x="31" y="11" width="6" height="5"></rect><rect x="21" y="11" width="6" height="5"></rect><rect x="11" y="11" width="6" height="5"></rect></g></svg></i>
                     
}
  options={sideBarOptions.department.value}
  name="departmentName"
  label="Department"
  value={filters.department}
  onChange={handleFilterChange}
/>
)}


{sideBarOptions.team && (
<Dropdown
iconSVG={  

    <i class="text-white text-2xl"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path></svg></i>
                    
}
  options={sideBarOptions.team.value}
//   name={sideBarOptions.team.name}
  name="teamName"
  label="Team"
  value={filters.team}
  onChange={handleFilterChange}
/>
)}
   <li class="border-b py-2 text-sm flex border-gray-400">
<div class="flex text-sm items-center">
    <div class="rounded-full flex w-8 ml-2 justify-center items-center">
    <i class="text-white text-2xl">
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"></path></svg>
  </i>
   </div>
</div>
<div class="w-full flex flex-col pl-2">
    <div>
    <span class="pl-2 text-white">
    Source
        </span>
    </div>
    <div class="pe-1 text-blue-700">
    <div class="flex flex-col">
        <label class="font-sans text-sm mb-1"></label>
        <div class="relative flex w-full">
        <div class="flex flex-col w-full">
        <input type=""  name="sourceName"  onChange={handleFilterChange} className=" pl-2 select-custom-model pr-2"
         placeholder={"Enter Source"} value={filters.sourceName} />
        </div>
        <div class="absolute right-1 bottom-2 pointer-events-none cursor-pointer bg-sideNavbg ">
           
        </div>
        </div>
    </div>
</div>
</div>
</li> 
      <li class="border-b py-2 text-sm flex border-gray-400">
<div class="flex text-sm items-center">
    <div class="rounded-full flex w-8 ml-2 justify-center items-center">
    <i class="text-white text-2xl">
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 7a5 5 0 1 0 5 5"></path><path d="M13 3.055a9 9 0 1 0 7.941 7.945"></path><path d="M15 6v3h3l3 -3h-3v-3z"></path><path d="M15 9l-3 3"></path></svg></i>
   
   </div>
</div>
<div class="w-full flex flex-col pl-2">
    <div>
    <span class="pl-2 text-white">
       Target Date
        </span>
    </div>
    <div class="pe-1 text-blue-700">
    <div class="flex flex-col">
        <label class="font-sans text-sm mb-1"></label>
        <div class="relative flex w-full">
        <div class="flex flex-col w-full">
        <input type="date" name="dateFormName"   onChange={handleFilterChange} className=" pl-2 select-custom-model pr-2" 
         placeholder="Umer Masood" value={filters.dateForm} />
        </div>
        <div class="absolute right-1 bottom-2 pointer-events-none cursor-pointer bg-sideNavbg ">
           
        </div>
        </div>
    </div>
</div>
</div>
</li>  

{sideBarOptions.assignee && (
<Dropdown
iconSVG={

    <i class="text-white text-2xl"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.22 0 .41.1.55.25.12.13.2.31.2.5 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.19.08-.37.2-.5.14-.15.33-.25.55-.25zM19 19H5V5h14v14zM12 6c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-6 6.47V18h12v-1.53c0-2.5-3.97-3.58-6-3.58s-6 1.07-6 3.58zM8.31 16c.69-.56 2.38-1.12 3.69-1.12s3.01.56 3.69 1.12H8.31z"></path></svg></i>
                    

}
  options={sideBarOptions.assignee.value}
//   name={sideBarOptions.assignee.name}
  name="assigneeName"
  label="Assignee"
  value={filters.assignee}
  onChange={handleFilterChange}
/>
)}


{sideBarOptions.priority && (
<Dropdown
iconSVG={
    <i class="text-white text-2xl"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21.1384 3C21.4146 3 21.6385 3.22386 21.6385 3.5C21.6385 3.58701 21.6157 3.67252 21.5725 3.74807L18 10L21.5725 16.2519C21.7095 16.4917 21.6262 16.7971 21.3865 16.9341C21.3109 16.9773 21.2254 17 21.1384 17H4V22H2V3H21.1384ZM18.5536 5H4V15H18.5536L15.6965 10L18.5536 5Z"></path></svg></i>
                    
}
  options={sideBarOptions.priority.value}
//   name={sideBarOptions.priority.name}
  name="priorityName"
  label="Priority"
  onChange={handleFilterChange}
/>
)}


{sideBarOptions.status && (
<Dropdown
iconSVG={
    <i class="text-white text-2xl"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M6 12v-2a6 6 0 1 1 12 0v2"></path><path d="M15 9l3 3l3 -3"></path></svg></i>
                   

}
  options={sideBarOptions.status.value}
//   name={sideBarOptions.status.name}
  name="statusName"
  label="Status"
  value={filters.status}
  onChange={handleFilterChange}
/>
)}
{sideBarOptions.Source && (
<Dropdown
iconSVG={ 
    <i class="text-white text-2xl"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 7a5 5 0 1 0 5 5"></path><path d="M13 3.055a9 9 0 1 0 7.941 7.945"></path><path d="M15 6v3h3l3 -3h-3v-3z"></path><path d="M15 9l-3 3"></path></svg></i>
}
  options={sideBarOptions.status.value}
//   name={sideBarOptions.status.name}
  name=""
  label="Source"
  value={filters.status}
  onChange={handleFilterChange}
/>
)}



{sideBarOptions.category && (
<Dropdown
iconSVG={ 
     <i class="text-white text-2xl"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm10 10h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"></path></svg></i>
}
  options={sideBarOptions.category.value}
//   name={sideBarOptions.category.name}
  name="categoryName"
  label="Category"
  value={filters.category}
  onChange={handleFilterChange}
/>
)}


         {/* {console.log("sideBarOptions.reporter"+sideBarOptions.reporter);
         }   */}
           <li class="border-b py-2 text-sm flex border-gray-400">
<div class="flex text-sm items-center">
    <div class="rounded-full flex w-8 ml-2 justify-center items-center">
    <i class="text-white text-2xl"><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="#FFB74D" d="M29,43v-4.6l2.6,0.5c2.9,0.6,5.6-1.5,5.8-4.4L38,28l2.9-1.2c1-0.4,1.4-1.6,0.8-2.6L38,18 c-0.6-7.6-4.9-15-16-15C10.6,3,5,11.4,5,20c0,3.7,1.3,6.9,3.3,9.6c1.8,2.5,2.7,5.5,2.7,8.5l0,4.8H29z"></path><polygon fill="#FF9800" points="29,43 29,38.4 22,37 22,43"></polygon><circle fill="#784719" cx="33.5" cy="21.5" r="1.5"></circle><path fill="#FF5722" d="M21.4,3C12.3,3,5,10.3,5,19.4c0,11.1,6,11.4,6,18.6l2.6-0.9c2.1-0.7,3.9-2.3,4.7-4.4l2.8-6.8L27,23v-6 c0,0,7-3.8,7-10.3C31,4.2,25.7,3,21.4,3z"></path><g fill="#546E7A"><path d="M21,2.1c-0.6,0-1,0.4-1,1v13.9c0,0.6,0.4,1,1,1s1-0.4,1-1V3.1C22,2.5,21.6,2.1,21,2.1z"></path><path d="M36.9,31.9c-7.9,0-10.3-4.9-10.4-5.1c-0.2-0.5-0.8-0.7-1.3-0.5c-0.5,0.2-0.7,0.8-0.5,1.3 c0.1,0.3,3,6.3,12.2,6.3c0.6,0,1-0.4,1-1S37.4,31.9,36.9,31.9z"></path></g><circle fill="#37474F" cx="37" cy="33" r="2"></circle><circle fill="#37474F" cx="21" cy="23" r="7"></circle><circle fill="#546E7A" cx="21" cy="23" r="4"></circle></svg></i>
    
    </div>
</div>
<div class="w-full flex flex-col pl-2">
    <div>
    <span class="pl-2 text-white">
       Reporter
        </span>
    </div>
    <div class="pe-1 text-blue-700">
    <div class="flex flex-col">
        <label class="font-sans text-sm mb-1"></label>
        <div class="relative flex w-full">
        <div class="flex flex-col w-full">
        <input type="text"  name="reporterName" className=" pl-2 select-custom-model" value={filters.reporter} />
        </div>
        <div class="absolute right-1 bottom-2 pointer-events-none cursor-pointer bg-sideNavbg ">
           
        </div>
        </div>
    </div>
</div>
</div>
</li>       

                </ul>
                </div>
                <div className="w-full bg-sidecontent">
                    <div class="px-2 pt-1"><div class="mx-5 "><div class="">
                         <label class=" text-md mt-3">Subject *</label></div><div class="pt-1">
                            <div class="flex   flex-col  w-full">
                                <input type="text " name="subject"
                                value={subjectValue}       // Set input value to state
                                onChange={(e) => setSubjectValue(e.target.value)} 
                                placeholder="Enter here" 
                                class="border rounded w-full px-[2px] py-[2px] h-7  font-sans 
                                 leading-tight focus:outline-none focus:shadow-outline  h-8 
                                  text-base py-1 disabled:bg-gray-300" /></div>
                                  </div>
                                <div class="pt-3"> 
                                    <label class=" text-md  mb-1">Description *</label></div>
                                    <div class="pt-1">
                                        <div class="flex  flex-col">
                                        <textarea type="text " value={DescriptionValue}
                                        onChange={(e) => setDescriptionValue(e.target.value)} 
                                        name="description" placeholder="Enter here" rows="5" 
                                        class="outline-none px-1 py-1 rounded-md border   "></textarea></div>
                                        <div class="flex justify-between mt-4"><div class="flex ">
                                            <div className="file-wrapper">
                                            <input type="file" multiple="" className="filefield"  value={selectedFile} 
                                             onChange={handleFileChanges} 
                                             />
                                             {/* <button class="bg-buttonBg pt-2 pb-2 rounded-lg pl-4 pe-2 py-[2px] text-base mb-3 relative  flex items-center text-white font-semibold transition-all ease-in-out flex flex-row text-sm ">
                                            Attachments
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" 
                                            baseProfile="tiny"
                                            viewBox="0 0 24 24" class=" text-xl ml-1" height="1em" width="1em" 
                                            xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.534 4.466c1.024 0 2.05.39 2.829 1.169 1.561 1.561 1.561 4.098 0 5.656l-7.071 7.072c-.778.779-1.804 1.17-2.828 1.17s-2.049-.391-2.828-1.17c-1.56-1.559-1.56-4.098 0-5.656l.807-.807c-.004.805.25 1.524.701 2.125l-.094.096c-.78.779-.78 2.049 0 2.828.39.39.901.584 1.414.584s1.024-.195 1.414-.584l2.535-2.535 4.537-4.537c.778-.779.778-2.049 0-2.828-.392-.39-.904-.584-1.417-.584-.512 0-1.023.195-1.413.584l-4.535 4.537c-.128.127-.146.275-.146.354 0 .076.019.226.146.353.099.099.228.147.356.147.127 0 .254-.049.352-.146l2.122-2.121 1.414-1.414c.392.392.586.902.586 1.414 0 .511-.194 1.021-.584 1.41l-2.124 2.125c-.486.487-1.127.729-1.768.729s-1.28-.244-1.769-.729c-.472-.474-.731-1.101-.731-1.769 0-.67.261-1.297.732-1.77l4.534-4.535c.779-.779 1.805-1.168 2.829-1.168m0-2c-1.604 0-3.11.623-4.242 1.755l-7.069 7.073c-1.133 1.131-1.757 2.638-1.757 4.242s.624 3.11 1.757 4.243c1.131 1.132 2.639 1.755 4.241 1.755s3.11-.624 4.242-1.757l7.071-7.071c1.133-1.131 1.757-2.638 1.757-4.242 0-1.603-.623-3.11-1.755-4.241-1.133-1.134-2.64-1.757-4.245-1.757z"></path></svg>
                                            </button> */}
                                            </div>
                                           

                                             {/* {fileName && <p className="ml-3">Selected file: {fileName}</p>} */}
                        
                            </div>
                            <div class=" border-gray-300">
                                <button   onClick={createTaskData} class="rounded-lg pt-2 pb-2 px-3 py-[3px] bg-buttonBg mb-3 text-base relative 
                                 flex items-center text-white font-semibold transition-all ease-in-out flex flex-row text-sm ">
                                    
                                    Create Task</button>
                            </div></div>

                           
                            </div></div>
                            </div>
                </div>
            </div>
            </div>
    
            {/* Modal Footer */}
            {/* <div className="mt-4 flex justify-end bg-wheat-800">
              <button onClick={onClose} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Close
              </button>
            </div> */}
          </div>
        </div>
      );
    };
    
    export default CreateTaskModalComp;
    