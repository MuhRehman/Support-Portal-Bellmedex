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
  <a class="navbar-brand" href="#">Logo</a>
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
      {/* <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
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
