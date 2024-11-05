import React from 'react'
import Dropdown from '../Components/Dropdown';



export default function Tickets() {


  return (
    <>



<Dropdown></Dropdown>

  



    {/* <div>Tickets</div> */}
    <div class=" w-screen mx-auto px-4 pt-4">
    <div class="mb-3 p-2 w-full flex flex-wrap  ">
      
      <div class="h-16 border-1  px-2 w-full md:w-1/2 lg:w-1/4 ">
      <label class="font-sans text-sm  font-medium block mb-2" for="username">Practice Name</label>
      <input type="number" class="relative border border-gray-300 outline-none rounded py-2 px-3 w-full 
      bg-white shadow-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline" placeholder="Ticket Number" />

      </div>

      
      <div class="h-16 border-1  px-2 w-full md:w-1/2 lg:w-1/4">
      <fieldset>
      <label class="font-sans text-sm  font-medium block mb-2">Practice Name</label>
      <div class="relative border border-gray-300 text-gray-800 bg-white shadow-lg">
        {/* <label for="frm-whatever" class="sr-only">My field</label> */}
        <select class="relative select-custom outline-none rounded py-2 px-3 w-full 
      bg-white shadow text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline" name="whatever" id="frm-whatever">
            <option value="">Select and Option&hellip;</option>
          <option value="1">Item 1</option>
          <option value="2">Item 2</option>
          <option value="3">Item 3</option>
        </select>
        <div class="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
       
       
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 26 26" width="16px" height="16px"><path d="M 10 0.1875 C 4.578125 0.1875 0.1875 4.578125 0.1875 10 C 0.1875 15.421875 4.578125 19.8125 10 19.8125 C 12.289063 19.8125 14.394531 19.003906 16.0625 17.6875 L 16.9375 18.5625 C 16.570313 19.253906 16.699219 20.136719 17.28125 20.71875 L 21.875 25.34375 C 22.589844 26.058594 23.753906 26.058594 24.46875 25.34375 L 25.34375 24.46875 C 26.058594 23.753906 26.058594 22.589844 25.34375 21.875 L 20.71875 17.28125 C 20.132813 16.695313 19.253906 16.59375 18.5625 16.96875 L 17.6875 16.09375 C 19.011719 14.421875 19.8125 12.300781 19.8125 10 C 19.8125 4.578125 15.421875 0.1875 10 0.1875 Z M 10 2 C 14.417969 2 18 5.582031 18 10 C 18 14.417969 14.417969 18 10 18 C 5.582031 18 2 14.417969 2 10 C 2 5.582031 5.582031 2 10 2 Z M 4.9375 7.46875 C 4.421875 8.304688 4.125 9.289063 4.125 10.34375 C 4.125 13.371094 6.566406 15.8125 9.59375 15.8125 C 10.761719 15.8125 11.859375 15.433594 12.75 14.8125 C 12.511719 14.839844 12.246094 14.84375 12 14.84375 C 8.085938 14.84375 4.9375 11.695313 4.9375 7.78125 C 4.9375 7.675781 4.933594 7.574219 4.9375 7.46875 Z"/>
        </svg>
        </div>
    </div>
    </fieldset>
          
        </div>
     
     


        <div class="h-16 border-1   px-2 w-full md:w-1/2 lg:w-1/4">
      <fieldset>
      <label class="font-sans text-sm mb-1 font-medium block mb-2 ">Department</label>
      <div class="relative border border-gray-300 text-gray-800 bg-white shadow-lg">
        {/* <label for="frm-whatever" class="sr-only">My field</label> */}
        <select class="relative select-custom outline-none rounded py-2 px-3 w-full 
      bg-white shadow text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline" name="whatever" id="frm-whatever">
            <option value="">Select and Option&hellip;</option>
          <option value="1">Item 1</option>
          <option value="2">Item 2</option>
          <option value="3">Item 3</option>
        </select>
        <div class="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
       
       
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 26 26" width="16px" height="16px"><path d="M 10 0.1875 C 4.578125 0.1875 0.1875 4.578125 0.1875 10 C 0.1875 15.421875 4.578125 19.8125 10 19.8125 C 12.289063 19.8125 14.394531 19.003906 16.0625 17.6875 L 16.9375 18.5625 C 16.570313 19.253906 16.699219 20.136719 17.28125 20.71875 L 21.875 25.34375 C 22.589844 26.058594 23.753906 26.058594 24.46875 25.34375 L 25.34375 24.46875 C 26.058594 23.753906 26.058594 22.589844 25.34375 21.875 L 20.71875 17.28125 C 20.132813 16.695313 19.253906 16.59375 18.5625 16.96875 L 17.6875 16.09375 C 19.011719 14.421875 19.8125 12.300781 19.8125 10 C 19.8125 4.578125 15.421875 0.1875 10 0.1875 Z M 10 2 C 14.417969 2 18 5.582031 18 10 C 18 14.417969 14.417969 18 10 18 C 5.582031 18 2 14.417969 2 10 C 2 5.582031 5.582031 2 10 2 Z M 4.9375 7.46875 C 4.421875 8.304688 4.125 9.289063 4.125 10.34375 C 4.125 13.371094 6.566406 15.8125 9.59375 15.8125 C 10.761719 15.8125 11.859375 15.433594 12.75 14.8125 C 12.511719 14.839844 12.246094 14.84375 12 14.84375 C 8.085938 14.84375 4.9375 11.695313 4.9375 7.78125 C 4.9375 7.675781 4.933594 7.574219 4.9375 7.46875 Z"/>
        </svg>
        </div>
    </div>
    </fieldset>
          
        </div>

      <div class="h-16 border-1  px-2 w-full md:w-1/2 lg:w-1/4">
      <fieldset>
      <label class="font-sans text-sm mb-1 font-medium block mb-2">Team</label>
      <div class="relative border border-gray-300 text-gray-800 bg-white shadow-lg">
        {/* <label for="frm-whatever" class="sr-only">My field</label> */}
        <select class="relative select-custom outline-none rounded py-2 px-3 w-full 
      bg-white shadow text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline" name="whatever" id="frm-whatever">
            <option value="">Select and Option&hellip;</option>
          <option value="1">Item 1</option>
          <option value="2">Item 2</option>
          <option value="3">Item 3</option>
        </select>
        <div class="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
       
       
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 26 26" width="16px" height="16px"><path d="M 10 0.1875 C 4.578125 0.1875 0.1875 4.578125 0.1875 10 C 0.1875 15.421875 4.578125 19.8125 10 19.8125 C 12.289063 19.8125 14.394531 19.003906 16.0625 17.6875 L 16.9375 18.5625 C 16.570313 19.253906 16.699219 20.136719 17.28125 20.71875 L 21.875 25.34375 C 22.589844 26.058594 23.753906 26.058594 24.46875 25.34375 L 25.34375 24.46875 C 26.058594 23.753906 26.058594 22.589844 25.34375 21.875 L 20.71875 17.28125 C 20.132813 16.695313 19.253906 16.59375 18.5625 16.96875 L 17.6875 16.09375 C 19.011719 14.421875 19.8125 12.300781 19.8125 10 C 19.8125 4.578125 15.421875 0.1875 10 0.1875 Z M 10 2 C 14.417969 2 18 5.582031 18 10 C 18 14.417969 14.417969 18 10 18 C 5.582031 18 2 14.417969 2 10 C 2 5.582031 5.582031 2 10 2 Z M 4.9375 7.46875 C 4.421875 8.304688 4.125 9.289063 4.125 10.34375 C 4.125 13.371094 6.566406 15.8125 9.59375 15.8125 C 10.761719 15.8125 11.859375 15.433594 12.75 14.8125 C 12.511719 14.839844 12.246094 14.84375 12 14.84375 C 8.085938 14.84375 4.9375 11.695313 4.9375 7.78125 C 4.9375 7.675781 4.933594 7.574219 4.9375 7.46875 Z"/>
        </svg>
        </div>
    </div>
    </fieldset>
          
        </div>
   </div>


   <div class="mb-3 p-2 w-full flex flex-wrap bg-red ">
      
      <div class="h-16 border-1  px-2 w-full md:w-1/2 lg:w-1/4 ">
      <fieldset>
      <label class="font-sans text-sm block mb-2 font-medium">Assignee</label>
      <div class="relative border border-gray-300 text-gray-800 bg-white shadow-lg">
        {/* <label for="frm-whatever" class="sr-only">My field</label> */}
        <select class="relative select-custom outline-none rounded py-2 px-3 w-full 
      bg-white shadow text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline" name="whatever" id="frm-whatever">
            <option value="">Select and Option&hellip;</option>
          <option value="1">Item 1</option>
          <option value="2">Item 2</option>
          <option value="3">Item 3</option>
        </select>
        <div class="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
       
       
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 26 26" width="16px" height="16px"><path d="M 10 0.1875 C 4.578125 0.1875 0.1875 4.578125 0.1875 10 C 0.1875 15.421875 4.578125 19.8125 10 19.8125 C 12.289063 19.8125 14.394531 19.003906 16.0625 17.6875 L 16.9375 18.5625 C 16.570313 19.253906 16.699219 20.136719 17.28125 20.71875 L 21.875 25.34375 C 22.589844 26.058594 23.753906 26.058594 24.46875 25.34375 L 25.34375 24.46875 C 26.058594 23.753906 26.058594 22.589844 25.34375 21.875 L 20.71875 17.28125 C 20.132813 16.695313 19.253906 16.59375 18.5625 16.96875 L 17.6875 16.09375 C 19.011719 14.421875 19.8125 12.300781 19.8125 10 C 19.8125 4.578125 15.421875 0.1875 10 0.1875 Z M 10 2 C 14.417969 2 18 5.582031 18 10 C 18 14.417969 14.417969 18 10 18 C 5.582031 18 2 14.417969 2 10 C 2 5.582031 5.582031 2 10 2 Z M 4.9375 7.46875 C 4.421875 8.304688 4.125 9.289063 4.125 10.34375 C 4.125 13.371094 6.566406 15.8125 9.59375 15.8125 C 10.761719 15.8125 11.859375 15.433594 12.75 14.8125 C 12.511719 14.839844 12.246094 14.84375 12 14.84375 C 8.085938 14.84375 4.9375 11.695313 4.9375 7.78125 C 4.9375 7.675781 4.933594 7.574219 4.9375 7.46875 Z"/>
        </svg>
        </div>
    </div>
    </fieldset>
      </div>

      
      <div class="h-16 border-1  px-2 w-full md:w-1/2 lg:w-1/4">
      <fieldset>
      <label class="font-sans text-sm block mb-2 font-medium">Priority</label>
      <div class="relative border border-gray-300 text-gray-800 bg-white shadow-lg">
        {/* <label for="frm-whatever" class="sr-only">My field</label> */}
        <select class="relative select-custom outline-none rounded py-2 px-2 w-full 
      bg-white shadow text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline" name="whatever" id="frm-whatever">
            <option value="">Select and Option&hellip;</option>
          <option value="1">Item 1</option>
          <option value="2">Item 2</option>
          <option value="3">Item 3</option>
        </select>
        <div class="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
       
       
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 26 26" width="16px" height="16px"><path d="M 10 0.1875 C 4.578125 0.1875 0.1875 4.578125 0.1875 10 C 0.1875 15.421875 4.578125 19.8125 10 19.8125 C 12.289063 19.8125 14.394531 19.003906 16.0625 17.6875 L 16.9375 18.5625 C 16.570313 19.253906 16.699219 20.136719 17.28125 20.71875 L 21.875 25.34375 C 22.589844 26.058594 23.753906 26.058594 24.46875 25.34375 L 25.34375 24.46875 C 26.058594 23.753906 26.058594 22.589844 25.34375 21.875 L 20.71875 17.28125 C 20.132813 16.695313 19.253906 16.59375 18.5625 16.96875 L 17.6875 16.09375 C 19.011719 14.421875 19.8125 12.300781 19.8125 10 C 19.8125 4.578125 15.421875 0.1875 10 0.1875 Z M 10 2 C 14.417969 2 18 5.582031 18 10 C 18 14.417969 14.417969 18 10 18 C 5.582031 18 2 14.417969 2 10 C 2 5.582031 5.582031 2 10 2 Z M 4.9375 7.46875 C 4.421875 8.304688 4.125 9.289063 4.125 10.34375 C 4.125 13.371094 6.566406 15.8125 9.59375 15.8125 C 10.761719 15.8125 11.859375 15.433594 12.75 14.8125 C 12.511719 14.839844 12.246094 14.84375 12 14.84375 C 8.085938 14.84375 4.9375 11.695313 4.9375 7.78125 C 4.9375 7.675781 4.933594 7.574219 4.9375 7.46875 Z"/>
        </svg>
        </div>
    </div>
    </fieldset>
          
        </div>
     
     


        <div class="h-16 border-1  px-2 w-full md:w-1/2 lg:w-1/4">
      <fieldset>
      <label class="font-sans text-sm block mb-2 font-medium">Status</label>
      <div class="relative border border-gray-300 text-gray-800 bg-white shadow-lg">
        {/* <label for="frm-whatever" class="sr-only">My field</label> */}
        <select class="relative select-custom outline-none rounded py-2 px-3 w-full 
      bg-white shadow text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline" name="whatever" id="frm-whatever">
            <option value="">Select and Option&hellip;</option>
          <option value="1">Item 1</option>
          <option value="2">Item 2</option>
          <option value="3">Item 3</option>
        </select>
        <div class="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
       
       
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 26 26" width="16px" height="16px"><path d="M 10 0.1875 C 4.578125 0.1875 0.1875 4.578125 0.1875 10 C 0.1875 15.421875 4.578125 19.8125 10 19.8125 C 12.289063 19.8125 14.394531 19.003906 16.0625 17.6875 L 16.9375 18.5625 C 16.570313 19.253906 16.699219 20.136719 17.28125 20.71875 L 21.875 25.34375 C 22.589844 26.058594 23.753906 26.058594 24.46875 25.34375 L 25.34375 24.46875 C 26.058594 23.753906 26.058594 22.589844 25.34375 21.875 L 20.71875 17.28125 C 20.132813 16.695313 19.253906 16.59375 18.5625 16.96875 L 17.6875 16.09375 C 19.011719 14.421875 19.8125 12.300781 19.8125 10 C 19.8125 4.578125 15.421875 0.1875 10 0.1875 Z M 10 2 C 14.417969 2 18 5.582031 18 10 C 18 14.417969 14.417969 18 10 18 C 5.582031 18 2 14.417969 2 10 C 2 5.582031 5.582031 2 10 2 Z M 4.9375 7.46875 C 4.421875 8.304688 4.125 9.289063 4.125 10.34375 C 4.125 13.371094 6.566406 15.8125 9.59375 15.8125 C 10.761719 15.8125 11.859375 15.433594 12.75 14.8125 C 12.511719 14.839844 12.246094 14.84375 12 14.84375 C 8.085938 14.84375 4.9375 11.695313 4.9375 7.78125 C 4.9375 7.675781 4.933594 7.574219 4.9375 7.46875 Z"/>
        </svg>
        </div>
    </div>
    </fieldset>
          
        </div>

      <div class="h-16 border-1  px-2 w-full md:w-1/2 lg:w-1/4">
      <fieldset>
      <label class="font-sans text-sm block mb-2 font-medium">Category</label>
      <div class="relative border border-gray-300 text-gray-800 bg-white shadow-lg">
        {/* <label for="frm-whatever" class="sr-only">My field</label> */}
        <select class="relative select-custom outline-none rounded py-2 px-3 w-full 
      bg-white shadow text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline" name="whatever" id="frm-whatever">
            <option value="">Select and Option&hellip;</option>
          <option value="1">Item 1</option>
          <option value="2">Item 2</option>
          <option value="3">Item 3</option>
        </select>
        <div class="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
       
       
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 26 26" width="16px" height="16px"><path d="M 10 0.1875 C 4.578125 0.1875 0.1875 4.578125 0.1875 10 C 0.1875 15.421875 4.578125 19.8125 10 19.8125 C 12.289063 19.8125 14.394531 19.003906 16.0625 17.6875 L 16.9375 18.5625 C 16.570313 19.253906 16.699219 20.136719 17.28125 20.71875 L 21.875 25.34375 C 22.589844 26.058594 23.753906 26.058594 24.46875 25.34375 L 25.34375 24.46875 C 26.058594 23.753906 26.058594 22.589844 25.34375 21.875 L 20.71875 17.28125 C 20.132813 16.695313 19.253906 16.59375 18.5625 16.96875 L 17.6875 16.09375 C 19.011719 14.421875 19.8125 12.300781 19.8125 10 C 19.8125 4.578125 15.421875 0.1875 10 0.1875 Z M 10 2 C 14.417969 2 18 5.582031 18 10 C 18 14.417969 14.417969 18 10 18 C 5.582031 18 2 14.417969 2 10 C 2 5.582031 5.582031 2 10 2 Z M 4.9375 7.46875 C 4.421875 8.304688 4.125 9.289063 4.125 10.34375 C 4.125 13.371094 6.566406 15.8125 9.59375 15.8125 C 10.761719 15.8125 11.859375 15.433594 12.75 14.8125 C 12.511719 14.839844 12.246094 14.84375 12 14.84375 C 8.085938 14.84375 4.9375 11.695313 4.9375 7.78125 C 4.9375 7.675781 4.933594 7.574219 4.9375 7.46875 Z"/>
        </svg>
        </div>
    </div>
    </fieldset>
          
        </div>
   </div>
   <div class="mb-3 p-2 w-full flex flex-wrap bg-red ">
      
      <div class=" border-1  px-2 w-full md:w-1/2 lg:w-1/4 ">
      <label class="font-sans text-sm block mb-2 font-medium">From Date</label>
      <input type="date" class="relative border border-gray-300 outline-none rounded py-2 px-3 w-full 
      bg-white shadow-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline" placeholder="Ticket Number" />

      </div>

      
      <div class=" border-1  px-2 w-full md:w-1/2 lg:w-1/4 ">
      <label class="font-sans text-sm block mb-2 font-medium">To Date</label>
      <input type="date" class="relative border border-gray-300 outline-none rounded py-2 px-3 w-full 
      bg-white shadow-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline" placeholder="Ticket Number" />

      </div>
     
     


        <div class="h-12 border-1  px-1 w-full md:w-1/2 lg:w-1/4">
   
          
        </div>

      <div class="h-12 border-1  px-1 w-full md:w-1/2 lg:w-1/4">
      <button class="bg-white-500 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full m-4">
        Clear
      </button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Search
      </button>
        </div>
   </div>

{/* table====== */}


    <div class="overflow-x-auto ">
      <table class="w-full text-sm text-left text-gray-500 ">
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
           
              <tr class="bg-white border-b">
                  <th  class="px-6 py-4 font-medium text-gray-900 ">
                    Ira Parker
                  </th>
                  <td class="px-6 py-4">
                    parked
                  </td>
                  <td class="px-6 py-4">
                    1-636-140-1110
                  </td>
                  <td class="px-6 py-4">
                    Mar 15, 2022
                  </td>
                  <th class="px-6 py-4 font-medium text-gray-900 ">
                    Ira Parker
                  </th>
                  <td class="px-6 py-4">
                    parked
                  </td>
                  <td class="px-6 py-4">
                    1-636-140-1110
                  </td>
                  <td class="px-6 py-4">
                    Mar 15, 2022
                  </td>
                  <td class="px-6 py-4">
                    1-636-140-1110
                  </td>
                  <td class="px-6 py-4">
                    Mar 15, 2022
                  </td>
              </tr>
              <tr class="bg-white border-b">
                  <th  class="px-6 py-4 font-medium text-gray-900 ">
                    Ira Parker
                  </th>
                  <td class="px-6 py-4">
                    parked
                  </td>
                  <td class="px-6 py-4">
                    1-636-140-1110
                  </td>
                  <td class="px-6 py-4">
                    Mar 15, 2022
                  </td>
                  <th class="px-6 py-4 font-medium text-gray-900 ">
                    Ira Parker
                  </th>
                  <td class="px-6 py-4">
                    parked
                  </td>
                  <td class="px-6 py-4">
                    1-636-140-1110
                  </td>
                  <td class="px-6 py-4">
                    Mar 15, 2022
                  </td>
                  <td class="px-6 py-4">
                    1-636-140-1110
                  </td>
                  <td class="px-6 py-4">
                    Mar 15, 2022
                  </td>
              </tr>
             
          </tbody>
      </table>
    </div>






<div>

</div>
{/* table====== */}


    
</div>
    </>
  )
}
