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


     // Render data, loading, and error states
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>; 


  return (
    <>
    
  	
<header>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><img src="../logo.png" alt="" /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link ml-3" href="#">Dashboard <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link ml-3" href="#"> Tickets</a>
      </li>
    
      <li class="nav-item">
        <a class="nav-link ml-3">Settings		</a>
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

<div class="container-fluid">
	<div class="row">
	

		<main class="col-md-12" id="main">

			
			<section class="spacethis">
				<div className='border-yellow-4001 shadow bottom '>

				<h4 class="title">Dashboard Summary</h4>
				</div>
				<div class="row ">
          <div class="col-xl-3 col-lg-6">
          
		  <div class="card card-wrapper mb-3 ">
            <div class="card-body d-flex justify-content-between">
              <div class="w-75s text-center">
             
                <div class="h3"> <img src={Practices} className='dashboard-icon' alt="" /> Practices </div>
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
             
			 <div class="h3"> <img src={ Department} className='dashboard-icon' alt="" /> Department </div>
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
             
			 <div class="h3"> <img src={Teams} className='dashboard-icon' alt="" /> Teams </div>
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
             
			 <div class="h3"> <img src={ Tickets} className='dashboard-icon' alt="" /> Tickets </div>
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
					
						<TeamsComp></TeamsComp>
						
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
