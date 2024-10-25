import React, { useState, useEffect } from 'react'
import axios from 'axios'; 
import PriorityComp from '../Components/PriorityComp';
import StatusComp from '../Components/StatusComp';
import CategoryComp from '../Components/CategoryComp';
import AssigneesComp from '../Components/AssigneesComp';
import DepartmentsComp from '../Components/DepartmentsComp';
import TeamsComp from '../Components/TeamsComp';


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

		const response2 = await axios.get('https://tms-api.providerscredentialing.com/api/Dashboard/GetTasksByPriority');
        setDataPriority(response2.data); 
		console.log("DataPriority: ", response2.data);
		
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



    

{/* <div class="navigation-wrap bg-light start-header start-style">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<nav class="navbar navbar-expand-md navbar-light">
					
					
						
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						
						<div class="collapse navbar-collapse" id="navbarSupportedContent">
							<ul class="navbar-nav ml-auto py-4 py-md-0">
								
								<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<a class="nav-link" href="#">Portfolio</a>
								</li>
								<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<a class="nav-link" href="#">Agency</a>
								</li>
								
								<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<a class="nav-link" href="#">Journal</a>
								</li>
								<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<a class="nav-link" href="#">Contact</a>
								</li>
							</ul>
						</div>
						
					</nav>		
				</div>
			</div>
		</div>
	</div> */}
	<nav class="navbar navbar-expand-lg navbar-light bg-white custom-nav">
		{/* <i class="fa fa-bars mobile-menu"></i>	 */}
 		 <a class="navbar-brand" href="#">Logo</a>
		  	<form class="form-inline search-form">
		  		{/* <i class="fa fa-search"></i>
		      <input class="form-control " type="search" placeholder="Search..."/> */}
			  <ul>
			  <div class="d-flex">
			        <a class="nav-link user-prfile" href="#">
			        	<img src="https://avatar.iran.liara.run/public" alt=""/>
			        </a>
					<div className='mt-3 font-weight-bold'>Avater</div>
							    </div>
				
			  </ul>
		    </form>
		    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
			     <li class="drop">
				      <a class="nav-link bell-icon-badge" href="#">
			        	<i class="fa fa-bell-o" aria-hidden="true"></i>
			        	<span class="bell-badge">10</span>
			        </a>

				      <ul class="drop-menu">
				        <li><a href="#">Art</a></li>
				        <li><a href="">Coding</a></li>
				        <li><a href="">Design</a></li>
				        <li><a href="">Web Development</a></li>
				    </ul>
				</li>

			    <li class="nav-item">
			        {/* <a class="nav-link user-prfile" href="#">
			        	<img src="https://avatar.iran.liara.run/public" alt=""/>
			        </a> */}
			    </li>

				{/* <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<a class="nav-link" href="#">Journal</a>
								</li>
								<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<a class="nav-link" href="#">Contact</a>
								</li> */}
		</ul>
	</nav>
</header>

<div class="container-fluid">
	<div class="row">
	

		<main class="col-md-12" id="main">

			
			<section class="spacethis">
				<div className='border-yellow-4001'>

				<h3 class="title">Dashboard Summary</h3>
				</div>
				<div class="row mb-3">
          <div class="col-xl-3 col-lg-6">
            <div class="card card-inverse card-success">
              <div class="card-block bg-successs">
                <div class="rotate">
                  <i class="fa fa-pied-piper fa-5x"></i>
                </div>
                <h6 class="text-uppercase">Total Practices </h6>
				{data ? (
				<div>
					<h1 class="display-1">{data.totalDepartmentsCount}</h1>
				</div>
			) : (	
				<p>No data found</p>
			)}
                
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 shadow-bottom-left">
            <div class="card card-inverse card-danger">
              <div class="card-block bg-dangers">
                <div class="rotate">
                  <i class="fa fa-list fa-4x"></i>
                </div>
                <h6 class="text-uppercase">Total Departments</h6>
                
				{data ? (
				<div>
					<h1 class="display-1">{data.totalPracticesCount}</h1>
				</div>
			) : (	
				<p>No data found</p>
			)}
              </div>
            </div>
          </div>
       
          <div class="col-xl-3 col-lg-6 shadow-bottom-left">
            <div class="card card-inverse card-warning">
              <div class="card-block bg-warnings">
                <div class="rotate">
                  <i class="fa  fa-users fa-5x"></i>
                </div>
                <h6 class="text-uppercase">Total Teams</h6>
              
				{data ? (
				<div>
					<h1 class="display-1">{data.totalTasksCount}</h1>
				</div>
					) : (	
						<p>No data found</p>
					)}
              </div>
            </div>
          </div>
		  <div class="col-xl-3 col-lg-6 shadow-bottom-left">
            <div class="card card-inverse card-warning">
              <div class="card-block bg-warnings">
                <div class="rotate">
                  <i class="fa fa-share fa-5x"></i>
                </div>
                <h6 class="text-uppercase">Total Tickets</h6>
              
				{data ? (
				<div>
					<h1 class="display-1">{data.totalTeamsCount}</h1>	
				</div>
					) : (	
						<p>No data found</p>
					)}
              </div>
            </div>
          </div>
        </div>

				
			</section>

			<section class="spacethis">
				<div class="row">
					<div class="col-md-4">
						<h5 class="title">Priority</h5>
						<PriorityComp></PriorityComp>
						
					</div>

					<div class="col-md-4">
						<h5 class="title">Status</h5>
						
						   <StatusComp></StatusComp>
					</div>
					<div class="col-md-4">
						<h5 class="title">Category</h5>
						
						   <CategoryComp></CategoryComp>
					</div>
				</div>
			</section>
			<section class="spacethis">
				<div class="row">
					

				

					<div class="col-md-6">
						<h5 class="title">Departments</h5>
						<DepartmentsComp></DepartmentsComp>
						
					</div>

					<div class="col-md-6">
						<h5 class="title">Teams</h5>
						<TeamsComp></TeamsComp>
						
					</div>
				</div>
			</section>
			<section class="spacethis">
				<div class="row">
					

				

					<div class="col-md-12">
						<h5 class="title">Assignees</h5>
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
