import React, { useEffect, useState } from 'react'
import Dropdown from '../Components/Dropdown';




export default function Tickets() {

  const [practiceData, setPracticeData] = useState(null);


  return (
    <>
 <div class="flex px-5 py-0 shadow-md items-center justify-between border-b-2 font-sans bg-sideNavbg">
  <div class="text-right">
    <button type="button" class="flex items-center text-md px-2 me-2 py-[2px]  font-medium text-gray-900 bg-white  rounded-lg"><span class="">My Tasks</span><i class="ml-3 text-xl text-blue-500">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" 
      width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-3.06 16L7.4 14.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41L10.94 18zM13 9V3.5L18.5 9H13z"></path></svg>
      </i><span class="text-blue-500"> (4) </span>
      
      </button>
      </div>
      
      <div class="flex"><div class="text-right">
        <button type="button" class="flex items-center text-md px-2 me-2 mb-1 mt-1 py-[2px] bg-white rounded-lg text-gray-700">
          <span class="">Create Task</span><i class="ml-3 text-xl text-blue-500">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg></i>
      </button>
      </div>
      </div>
      </div>
   <Dropdown></Dropdown>
    </>
  )
}
