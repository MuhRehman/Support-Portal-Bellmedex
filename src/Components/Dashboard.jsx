import React from 'react'

export default function Dashboard() {
  return (
    <>
    
  	
<header>

	<nav class="navbar navbar-expand-lg navbar-light bg-white custom-nav">
		<i class="fa fa-bars mobile-menu"></i>
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
          <div class="col-xl-4 col-lg-6">
            <div class="card card-inverse card-success">
              <div class="card-block bg-successs">
                <div class="rotate">
                  <i class="fa fa-user fa-5x"></i>
                </div>
                <h6 class="text-uppercase">Users</h6>
                <h1 class="display-1">134</h1>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6 shadow-bottom-left">
            <div class="card card-inverse card-danger">
              <div class="card-block bg-dangers">
                <div class="rotate">
                  <i class="fa fa-list fa-4x"></i>
                </div>
                <h6 class="text-uppercase">Posts</h6>
                <h1 class="display-1">87</h1>
              </div>
            </div>
          </div>
       
          <div class="col-xl-4 col-lg-6 shadow-bottom-left">
            <div class="card card-inverse card-warning">
              <div class="card-block bg-warnings">
                <div class="rotate">
                  <i class="fa fa-share fa-5x"></i>
                </div>
                <h6 class="text-uppercase">Shares</h6>
                <h1 class="display-1">36</h1>
              </div>
            </div>
          </div>
        </div>

				
			</section>

			<section class="spacethis">
				<div class="row">
					<div class="col-md-6">
						<h5 class="title">Requests</h5>
						<div class="md-card">
							<table class="table table-hover no-border">
						  <thead>
						    <tr>
						      <th scope="col">Name</th>
						      <th scope="col">LTR</th>
						      <th scope="col">Location</th>
						      <th scope="col">Status</th>
						    </tr>
						  </thead>
						  <tbody>
						    <tr>
						      <td>
						      	<img class="table-user" src="https://avatar.iran.liara.run/public/boy" alt=""/> Pearl Chavez
						      </td>
						      <td>100<sub>LTR</sub></td>
						      <td>Noida</td>
						      <td>
						      	<span class="badge badge-pill badge-danger">Ongoing</span>

						      </td>
						    </tr>

						   
						    
						    <tr>
						      <td>
						      	<img class="table-user" src="https://avatar.iran.liara.run/public/boy" alt=""/> 
						      Pearl Chavez
						  	</td>
						      <td>100<sub>LTR</sub></td>
						      <td>Noida</td>
						      <td>
						      	<span class="badge badge-pill badge-success">Delivered</span>

						      </td>
						    </tr>
						     <tr>
						      <td>
						      	<img class="table-user" src="https://avatar.iran.liara.run/public/boy" alt=""/> 
						      	Pearl Chavez
						  	</td>
						      <td>100<sub>LTR</sub></td>
						      <td>Noida</td>
						      <td>
						      	<span class="badge badge-pill badge-warning">Pending</span>

						      </td>
						    </tr>
						    <tr>
						      <td>
						      	<img class="table-user" src="https://avatar.iran.liara.run/public/boy" alt=""/> 
						      Pearl Chavez
						  	</td>
						      <td>100<sub>LTR</sub></td>
						      <td>Noida</td>
						      <td>
						      	<span class="badge badge-pill badge-danger">Ongoing</span>

						      </td>
						    </tr>

						  </tbody>
						</table>
						</div>
						
					</div>

					<div class="col-md-6">
						<h5 class="title">Recent Delivered</h5>
						<div class="md-card por">
						<table class="table table-hover no-border">
						 
						  <tbody>
						    <tr class="read-reviews-btn">
						      <td>
						      	<img class="table-user" src="https://avatar.iran.liara.run/public/girl" alt=""/> Pearl Chavez
						      </td>

						      <td><img src="image/starts.png" alt=""/></td>
						      <td align="right">
						      	<button type="button" class="btn btn-sm btn-success">Read Reviews</button>

						      </td>
						    </tr>
							<tr>
						      <td>
						      	<img class="table-user" src="https://avatar.iran.liara.run/public/girl"alt=""/> Pearl Chavez
						      </td>

						      <td><img src="image/starts.png" alt=""/></td>
						      <td align="right">
						      	<button type="button" class="btn btn-sm btn-success">Read Reviews</button>

						      </td>
						    </tr>
							<tr>
						      <td>
						      	<img class="table-user" src="https://avatar.iran.liara.run/public/girl" alt=""/> Pearl Chavez
						      </td>

						      <td><img src="image/starts.png" alt=""/></td>
						      <td align="right">
						      	<button type="button" class="btn btn-sm btn-success">Read Reviews</button>

						      </td>
						    </tr>
							<tr>
						      <td>
						      	<img class="table-user" src="https://avatar.iran.liara.run/public/girl" alt=""/> Pearl Chavez
						      </td>

						      <td><img src="image/starts.png" alt=""/></td>
						      <td align="right">
						      	<button type="button" class="btn btn-sm btn-success">Read Reviews</button>

						      </td>
						    </tr>
							<tr>
						      <td>
						      	<img class="table-user" src="https://avatar.iran.liara.run/public/girl" alt=""/> Pearl Chavez
						      </td>

						      <td><img src="image/starts.png" alt=""/></td>
						      <td align="right">
						      	<button type="button" class="btn btn-sm btn-success">Read Reviews</button>

						      </td>
						    </tr>

						  </tbody>
						</table>


						<div class="read-reviews">
							<div class="name">
								<h4>Mr. Jhone Doe</h4>
								<img src="image/starts.png" alt=""/>
								<i  class="fa fa-times close-reviews"></i>
    
							</div>
							<p class="text-muted">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa adipisci dolores dignissimos magnam. Ratione tenetur rem numquam officiis minus aliquid quaerat ipsum tempora ducimus blanditiis officia nobis nesciunt, dignissimos, expedita.
							</p>
						  </div>

						</div>
						
					</div>
				</div>
			</section>

			<section class="spacethis">
				<div class="row">
					

				

					<div class="col-md-4">
						<h5 class="title">New Orders</h5>
						<div class="md-card">
							<table class="table table-hover no-border">
						  <thead>
						    <tr>
						      <th scope="col">Name</th>
						      <th scope="col">LTR</th>
						      <th scope="col">Location</th>
						      <th scope="col">Status</th>
						    </tr>
						  </thead>
						  <tbody>
						    <tr>
						      <td>
						      	<img class="table-user" src="https://avatar.iran.liara.run/public/girl" alt=""/> Pearl Chavez
						      </td>
						      <td>100<sub>LTR</sub></td>
						      <td>Noida</td>
						      <td>
						      	<button type="button" class="btn btn-sm btn-outline-success">process</button>
						      </td>
						    </tr>

						    <tr>
						      <td>
						      	<img class="table-user" src="https://avatar.iran.liara.run/public/girl" alt=""/> 
						      Pearl Chavez
						  	</td>
						      <td>100<sub>LTR</sub></td>
						      <td>Noida</td>
						      <td>
						      	<button type="button" class="btn btn-sm btn-outline-success">Process</button>
						      </td>
						    </tr>
						     <tr>
						      <td>
						      	<img class="table-user" src="https://avatar.iran.liara.run/public/girl" alt=""/> 
						      Pearl Chavez
						  	</td>
						      <td>100<sub>LTR</sub></td>
						      <td>Noida</td>
						      <td>
						      	<button type="button" class="btn btn-sm btn-outline-success">process</button>
						      </td>
						    </tr>
						    <tr>
						      <td>
						      	<img class="table-user" src="https://avatar.iran.liara.run/public/girl" alt=""/> 
						      Pearl Chavez
						  	</td>
						      <td>100<sub>LTR</sub></td>
						      <td>Noida</td>
						     <td>
						      	<button type="button" class="btn btn-sm btn-outline-success">process</button>
						      </td>
						    </tr>

						  </tbody>
						</table>
						</div>
						
					</div>

				</div>
			</section>
		</main>
	</div>
</div>
    </>
  )
}
