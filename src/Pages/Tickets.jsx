import React, { useEffect, useState } from 'react'
import Dropdown from '../Components/Dropdown';
import Test from '../Components/Test';



export default function Tickets() {

  const [practiceData, setPracticeData] = useState(null);


  return (
    <>
   {/* <Test></Test> */}
   <Dropdown></Dropdown>
    </>
  )
}
