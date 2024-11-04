
import React, { useState } from "react";
import './App.css';
import Dashboard from './Pages/Dashboard.jsx';
import Settings from './Pages/Settings.jsx';
import Tickets from './Pages/Tickets.jsx';
import { useNavigate } from "react-router-dom";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {

  const [activeLink, setActiveLink] = useState("/"); // Default to the home route
  // const navigate = useNavigate();

  const handleClick = (path) => {

  };


  return (
    <div className="App">

      <div>
      <nav class="bg-white-custom border-gray-200 dark:bg-gray-900">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* <!-- Mobile menu button--> */}
        <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
         
          <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
         
          <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex flex-shrink-0 items-center">
          <img class="h-8 w-auto" src="../logo.png" alt="Your Company" />
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">

            <a href="#"  onClick={() => handleClick("/")}
        className={activeLink === "/" ? "active-link" : "inactive-link"} 
        class="rounded-md  text-black-300  px-3 py-2 text-sm font-medium text-white" >Dashboard</a>

            <a href="#" onClick={() => handleClick("/settings")}
        className={activeLink === "/settings" ? "active-link" : "inactive-link"}
         class="rounded-md px-3 py-2 text-sm font-medium text-black-300  hover:bg-gray-700 hover:text-white" aria-current="page">    Tickets</a>
            <a href="#"  onClick={() => handleClick("/tickets")}
        className={activeLink === "/tickets" ? "active-link" : "inactive-link"} 
        
        class="rounded-md px-3 py-2 text-sm font-medium text-black-300 hover:bg-gray-700 hover:text-white">   Settings</a>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span class="absolute -inset-1.5"></span>
          <span class="sr-only">View notifications</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
        </button>

        {/* <!-- Profile dropdown --> */}
        <div class="relative ml-3">
          <div>
            <button type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="absolute -inset-1.5"></span>
              <span class="sr-only">Open user menu</span>
              <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </button>
          </div>

          
          {/*   <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> */}
            {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
            {/* <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
          </div> */}
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Mobile menu, show/hide based on menu state. --> */}
  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
      {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
      <a href="#" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
    </div>
  </div>
</nav>

      </div>
       <BrowserRouter>
    <header>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><img src="../logo.png" alt="" /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
     
    <ul class="navbar-nav mr-auto">
      
        <li class="nav-item text-black-300 " >
        <Link to="/dashboard"              >
          Dashboard 
        </Link>
        </li>

        <li class="nav-item "     onClick={() => handleClick("/settings")}
        className={activeLink === "/settings" ? "active-link" : "inactive-link"} >
        <Link to="/Settings"    >
          Settings
        </Link>
        </li>
        <li class="nav-item"         onClick={() => handleClick("/tickets")}
        className={activeLink === "/tickets" ? "active-link" : "inactive-link"} >
        <Link to="/tickets"    >
          Tickets
        </Link>
        </li>
      
   

    </ul>

    <form class="form-inline my-2 my-lg-0">
	 <div class="d-flex">
			        <a class="nav-link user-prfile" href="#">
			        	<img src="https://avatar.iran.liara.run/public" alt=""/>
			        </a>
					<div className='mt-3 font-weight-bold'>Avater</div>

					<a class="nav-link bell-icon-badge" href="#">
			        	<i class="fa fa-bell-o" aria-hidden="true"></i>
			        	<span class="bell-badge">10</span>
			        </a>
	 </div>
    </form>

  </div>
</nav>
	



</header>
     <div>
    
     
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/tickets" element={<Tickets />} />
      </Routes>
  
     </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
