import React, { useState, useEffect } from 'react'
import axios from 'axios'; 
import PriorityComp from '../Components/PriorityComp';
import StatusComp from '../Components/StatusComp';
import CategoryComp from '../Components/CategoryComp';
import AssigneesComp from '../Components/AssigneesComp';
import DepartmentsComp from '../Components/DepartmentsComp';
import TeamsComp from '../Components/TeamsComp';


import   Practices from './../assets/dashboard/Practices.svg';
import   Teams from './../assets/dashboard/Teams.svg';
import   Tickets from './../assets/dashboard/Tickets.svg';
import   Department from './../assets/dashboard/Departments121.svg';


export default function Dashboard() {



 const [data, setData] = useState([]);
 const [dataPriority, setDataPriority] = useState([]);
 const [error, setError] = useState(null);
 const [loading, setLoading] = useState(true);
 const [childId, setChildId] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.1.16:3060/api/Team/GetOverAllTotalCount');
        setData(response.data); 
		console.log(response.data);


        const responseLogin = await axios.get('https://tms-api.providerscredentialing.com/api/Users/Login');
        setData(responseLogin.data); 
		console.log(responseLogin.data);

		
      } catch (error) {
        setError(error.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []); 

// Callback function to handle id from child
const handleChildId = (id) => {
    console.log("Received ID from child:", id);
    setChildId(id); // Optionally, update state or perform actions
  };
     // Render data, loading, and error states
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>; 


  return (
    <>
    
 


<div class="container-fluid">
	<div class="row">
	

		<main class="col-md-12" id="main">
	
	
			<section class="spacethis">
				<div className='border-yellow-4001 shadow bottom '>

				<h4 class="title Dashboard-heading">Dashboard Summary</h4>
				</div>
				<div class="row ">
          <div class="col-xl-3 col-lg-6">
          
		  <div class="card card-wrapper mb-3 ">
            <div class="card-body d-flex justify-content-between">
              <div class="w-75s text-center">
             
                <div class="h3 dashboard-title"> <img src={Practices} className='dashboard-icon' alt="" /> <div className="title-text">Practices</div> </div>
              </div>
			  {data ? (
				<div className='mr-4 '>
					<h3 className='dashboard-heading'>{data.totalPracticesCount} </h3>
				</div>
			) : (	
				<p>No data found</p>
			)}
              {/* <div class="d-none d-sm-block"><i class="fa fa-list fa-4x"></i>  </div> */}
            </div>
          </div>
		  
          </div>
          <div class="col-xl-3 col-lg-6 shadow-bottom-left">
            <div class="card card-wrapper-Practices mb-3">
              <div class="card-body d-flex justify-content-between">
			  <div class="w-75s text-center">
             
			 <div class="h3 dashboard-title"> <img src={ Department} className='dashboard-icon' alt="" /> <div className="title-text">Department</div> </div>
		   </div>
              
                
				{data ? (
				<div className='mr-2'>
					<h3 className='dashboard-heading'>{data.totalDepartmentsCount}</h3>
				</div>
			) : (	
				<p>No data found</p>
			)}
              </div>
            </div>
          </div>
       
          <div class="col-xl-3 col-lg-6 shadow-bottom-left">
		  <div class="card card-wrapper-Count mb-3">
              <div class="card-body d-flex justify-content-between">
			  <div class="w-75s	 text-center">
             
			 <div class="h3 dashboard-title"> <img src={Teams} className='dashboard-icon' alt="" /> <div className="title-text">Teams</div> </div>
		   </div>
              
                
				{data ? (
				<div className='mr-2'>
					<h3 className='dashboard-heading'>{data.totalTeamsCount}</h3>
				</div>
			) : (	
				<p>No data found</p>
			)}
              </div>
            </div>
            {/* <div class="card card-inverse card-warning">
              <div class="card-block bg-warnings">
                <div class="rotate">
                  {/* <i class="fa  fa-users fa-5x"></i> */}
                {/* </div>
                <h6 class="text-uppercase"> Teams</h6>
              
				{data ? (
				<div>
					<h1 class="display-1">{data.totalTasksCount}</h1>
				</div>
					) : (	
						<p>No data found</p>
					)}
              </div>
            </div> */}
          </div>
		  <div class="col-xl-3 col-lg-6 shadow-bottom-left">
    
		  <div class="card card-wrapper-Tickets mb-3">
              <div class="card-body d-flex justify-content-between">
			  <div class="w-75s text-center">
             
			 <div class="h3 dashboard-title"> <img src={ Tickets} className='dashboard-icon' alt="" /> <div className="title-text ">Tickets</div> </div>
		   </div>
              
                
				{data ? (
				<div className='mr-2'>
					<h3 className='dashboard-heading'>{data.totalTasksCount}</h3>
				</div>
			) : (	
				<p>No data found</p>
			)}
              </div>
            </div>
	        {/* <div class="card card-inverse card-warning">
              <div class="card-block bg-warnings">
                <div class="rotate">
                
                </div>
                <h6 class="text-uppercase"> Tickets</h6>
              
				{data ? (
				<div>
					<h1 class="display-1">{data.totalTeamsCount}</h1>	
				</div>
					) : (	
						<p>No data found</p>
					)}
              </div>
            </div> */}
          </div>
        </div>

				
			</section>

			<section class="spacethis">
				<div class="row">
					<div class="col-md-6 ">
						
						<PriorityComp></PriorityComp>
						
					</div>

					<div class="col-md-6">
						   <StatusComp></StatusComp>
					</div>
					
				</div>
			</section>
			<section class="spacethis">
				<div class="row">
					

				<div class="col-md-4">
					
						
						   <CategoryComp></CategoryComp>
					</div>

					<div class="col-md-4">
					
						<DepartmentsComp></DepartmentsComp>
						
					</div>

					<div class="col-md-4">
					
						<TeamsComp onSendId={handleChildId}></TeamsComp>
						
					</div>
				</div>
			</section>
			<section class="spacethis">
				<div class="row">
					

				

					<div class="col-md-12">
					
						  <AssigneesComp></AssigneesComp>
						
					</div>

				</div>
			</section>
		</main>
	</div>
</div>


    </>
  )
}
