function Tables() {
    return (
        <div className="table-container">
          <nav class="navbar navbar-top navbar-expand navbar-dashboard navbar-dark ps-0 pe-2 pb-0">
                <div class="container-fluid px-0">
                <div class="d-flex justify-content-between w-100" id="navbarSupportedContent">
                    <div class="d-flex align-items-center">
                        <form class="navbar-search form-inline" id="navbar-search-main">
                            <div class="input-group input-group-merge search-bar">
                            <span class="input-group-text" id="topbar-addon">
                                <svg class="icon icon-xs" x-description="Heroicon name: solid/search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                                </svg>
                            </span>
                            <input type="text" class="form-control" id="topbarInputIconLeft" placeholder="Search" aria-label="Search" aria-describedby="topbar-addon" />
                            </div>
                        </form>
                    </div>
                    <ul class="navbar-nav align-items-center">
                        <li class="nav-item dropdown">
                            <a class="nav-link text-dark notification-bell unread dropdown-toggle" data-unread-notifications="true" href="#" role="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                            <svg class="icon icon-sm text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                            </svg>
                            </a>
                            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-center mt-2 py-0">
                            <div class="list-group list-group-flush">
                                <a href="#" class="text-center text-primary fw-bold border-bottom border-light py-3">Notifications</a> 
                                <a href="#" class="list-group-item list-group-item-action border-bottom">
                                    <div class="row align-items-center">
                                        <div class="col-auto"> <img alt="Image placeholder" src="assets/img/profile-picture-1.jpg" class="avatar-md rounded" /></div>
                                        <div class="col ps-0 ms-2">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h4 class="h6 mb-0 text-small">Jose Leos</h4>
                                            </div>
                                            <div class="text-end"><small class="text-danger">a few moments ago</small></div>
                                        </div>
                                        <p class="font-small mt-1 mb-0">Added you to an event "Project stand-up" tomorrow at 12:30 AM.</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" class="list-group-item list-group-item-action border-bottom">
                                    <div class="row align-items-center">
                                        <div class="col-auto"> <img alt="Image placeholder" src="assets/img/profile-picture-2.jpg" class="avatar-md rounded" /></div>
                                        <div class="col ps-0 ms-2">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h4 class="h6 mb-0 text-small">Neil Sims</h4>
                                            </div>
                                            <div class="text-end"><small class="text-danger">2 hrs ago</small></div>
                                        </div>
                                        <p class="font-small mt-1 mb-0">You've been assigned a task for "Awesome new project".</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" class="list-group-item list-group-item-action border-bottom">
                                    <div class="row align-items-center">
                                        <div class="col-auto"> <img alt="Image placeholder" src="assets/img/profile-picture-3.jpg" class="avatar-md rounded" /></div>
                                        <div class="col ps-0 m-2">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h4 class="h6 mb-0 text-small">Roberta Casas</h4>
                                            </div>
                                            <div class="text-end"><small>5 hrs ago</small></div>
                                        </div>
                                        <p class="font-small mt-1 mb-0">Tagged you in a document called "Financial plans",</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" class="list-group-item list-group-item-action border-bottom">
                                    <div class="row align-items-center">
                                        <div class="col-auto"> <img alt="Image placeholder" src="assets/img/profile-picture-4.jpg" class="avatar-md rounded" /></div>
                                        <div class="col ps-0 ms-2">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h4 class="h6 mb-0 text-small">Joseph Garth</h4>
                                            </div>
                                            <div class="text-end"><small>1 d ago</small></div>
                                        </div>
                                        <p class="font-small mt-1 mb-0">New message: "Hey, what's up? All set for the presentation?"</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" class="list-group-item list-group-item-action border-bottom">
                                    <div class="row align-items-center">
                                        <div class="col-auto"> <img alt="Image placeholder" src="assets/img/profile-picture-5.jpg" class="avatar-md rounded" /></div>
                                        <div class="col ps-0 ms-2">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h4 class="h6 mb-0 text-small">Bonnie Green</h4>
                                            </div>
                                            <div class="text-end"><small>2 hrs ago</small></div>
                                        </div>
                                        <p class="font-small mt-1 mb-0">New message: "We need to improve the UI/UX for the landing page."</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" class="dropdown-item text-center fw-bold rounded-bottom py-3">
                                    <svg class="icon icon-xxs text-gray-400 me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    View all
                                </a>
                            </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown ms-lg-3">
                            <a class="nav-link dropdown-toggle pt-1 px-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <div class="media d-flex align-items-center">
                                <img class="avatar rounded-circle" alt="Image placeholder" src="assets/img/profile-picture-3.jpg" />
                                <div class="media-body ms-2 text-dark align-items-center d-none d-lg-block"><span class="mb-0 font-small fw-bold text-gray-900">Bonnie Green</span></div>
                            </div>
                            </a>
                            <div class="dropdown-menu dashboard-dropdown dropdown-menu-end mt-2 py-1">
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <svg class="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
                                </svg>
                                My Profile 
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <svg class="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                                </svg>
                                Settings 
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <svg class="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd"></path>
                                </svg>
                                Messages 
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <svg class="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path>
                                </svg>
                                Support
                            </a>
                            <div role="separator" class="dropdown-divider my-1"></div>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <svg class="dropdown-icon text-danger me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                </svg>
                                Logout
                            </a>
                            </div>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
            <div class="py-4">
                <nav aria-label="breadcrumb" class="d-none d-md-inline-block">
                <ol class="breadcrumb breadcrumb-dark breadcrumb-transparent">
                    <li class="breadcrumb-item">
                        <a href="#">
                            <svg class="icon icon-xxs" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                            </svg>
                        </a>
                    </li>
                    <li class="breadcrumb-item"><a href="#">Tables</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Bootstrap tables</li>
                </ol>
                </nav>
                <div class="d-flex justify-content-between w-100 flex-wrap">
                <div class="mb-3 mb-lg-0">
                    <h1 class="h4">Bootstrap tables</h1>
                    <p class="mb-0">Dozens of reusable components built to provide buttons, alerts, popovers, and more.</p>
                </div>
                <div>
                    <a href="https://therichpost.com/docs/Rich-bootstrap-5-dashboard/components/tables/" class="btn btn-outline-gray-600 d-inline-flex align-items-center">
                        <svg class="icon icon-xs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                        </svg>
                        Bootstrap Tables Docs
                    </a>
                </div>
                </div>
            </div>
            <div class="card border-0 shadow mb-4">
                <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-centered table-nowrap mb-0 rounded">
                        <thead class="thead-light">
                            <tr>
                            <th class="border-0 rounded-start">#</th>
                            <th class="border-0">Traffic Source</th>
                            <th class="border-0">Source Type</th>
                            <th class="border-0">Category</th>
                            <th class="border-0">Global Rank</th>
                            <th class="border-0">Traffic Share</th>
                            <th class="border-0 rounded-end">Change</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td><a href="#" class="text-primary fw-bold">1</a></td>
                            <td class="fw-bold d-flex align-items-center">
                                <svg class="icon icon-xxs text-gray-500 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"></path>
                                </svg>
                                Direct
                            </td>
                            <td>Direct</td>
                            <td>-</td>
                            <td>--</td>
                            <td>
                                <div class="row d-flex align-items-center">
                                    <div class="col-12 col-xl-2 px-0">
                                        <div class="small fw-bold">51%</div>
                                    </div>
                                    <div class="col-12 col-xl-10 px-0 px-xl-1">
                                        <div class="progress progress-lg mb-0">
                                        <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="51" aria-valuemin="0" aria-valuemax="100" style={{width: "51%"}}></div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td class="text-success">
                                <div class="d-flex align-items-center">
                                    <svg class="icon icon-xs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="fw-bold">2.45%</span>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td><a href="#" class="text-primary fw-bold">2</a></td>
                            <td class="fw-bold d-flex align-items-center">
                                <svg class="icon icon-xxs text-gray-500 me-2" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                    <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                                </svg>
                                Google Search
                            </td>
                            <td>Search / Organic</td>
                            <td>-</td>
                            <td>--</td>
                            <td>
                                <div class="row d-flex align-items-center">
                                    <div class="col-12 col-xl-2 px-0">
                                        <div class="small fw-bold">18%</div>
                                    </div>
                                    <div class="col-12 col-xl-10 px-0 px-xl-1">
                                        <div class="progress progress-lg mb-0">
                                        <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100" style={{width: "18%"}}></div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td class="text-success">
                                <div class="d-flex align-items-center">
                                    <svg class="icon icon-xs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="fw-bold">17.78%</span>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td><a href="#" class="text-primary fw-bold">3</a></td>
                            <td class="fw-bold d-flex align-items-center">
                                <svg class="icon icon-xxs text-gray-500 me-2" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                                </svg>
                                youtube.com
                            </td>
                            <td>Social</td>
                            <td><a class="small fw-bold" href="#">Arts and Entertainment</a></td>
                            <td>#2</td>
                            <td>
                                <div class="row d-flex align-items-center">
                                    <div class="col-12 col-xl-2 px-0">
                                        <div class="small fw-bold">18%</div>
                                    </div>
                                    <div class="col-12 col-xl-10 px-0 px-xl-1">
                                        <div class="progress progress-lg mb-0">
                                        <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100" style={{width: "18%"}}></div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>-</td>
                            </tr>
                            <tr>
                            <td><a href="#" class="text-primary fw-bold">4</a></td>
                            <td class="fw-bold d-flex align-items-center">
                                <svg class="icon icon-xxs text-gray-500 me-2" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="yahoo" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M223.69,141.06,167,284.23,111,141.06H14.93L120.76,390.19,82.19,480h94.17L317.27,141.06Zm105.4,135.79a58.22,58.22,0,1,0,58.22,58.22A58.22,58.22,0,0,0,329.09,276.85ZM394.65,32l-93,223.47H406.44L499.07,32Z"></path>
                                </svg>
                                yahoo.com
                            </td>
                            <td>Referral</td>
                            <td><a class="small fw-bold" href="#">News and Media</a></td>
                            <td>#11</td>
                            <td>
                                <div class="row d-flex align-items-center">
                                    <div class="col-12 col-xl-2 px-0">
                                        <div class="small fw-bold">8%</div>
                                    </div>
                                    <div class="col-12 col-xl-10 px-0 px-xl-1">
                                        <div class="progress progress-lg mb-0">
                                        <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="8" aria-valuemin="0" aria-valuemax="100" style={{width: "8%"}}></div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td class="text-danger">
                                <div class="d-flex align-items-center">
                                    <svg class="icon icon-xs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="fw-bold">9.45%</span>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td><a href="#" class="text-primary fw-bold">5</a></td>
                            <td class="fw-bold d-flex align-items-center">
                                <svg class="icon icon-xxs text-gray-500 me-2" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                </svg>
                                twitter.com
                            </td>
                            <td>Social</td>
                            <td><a class="small fw-bold" href="#">Social Networks</a></td>
                            <td>#4</td>
                            <td>
                                <div class="row d-flex align-items-center">
                                    <div class="col-12 col-xl-2 px-0">
                                        <div class="small fw-bold">4%</div>
                                    </div>
                                    <div class="col-12 col-xl-10 px-0 px-xl-1">
                                        <div class="progress progress-lg mb-0">
                                        <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="4" aria-valuemin="0" aria-valuemax="100" style={{width: "4%"}}></div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
            <div class="card border-0 shadow">
                <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-centered table-nowrap mb-0 rounded">
                        <thead class="thead-light">
                            <tr>
                            <th class="border-0 rounded-start">Country</th>
                            <th class="border-0">All</th>
                            <th class="border-0">All Change</th>
                            <th class="border-0">Travel & Local</th>
                            <th class="border-0">Travel & Local Change</th>
                            <th class="border-0">Widgets</th>
                            <th class="border-0 rounded-end">Widgets Change</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td class="border-0">
                                <a href="#" class="d-flex align-items-center">
                                    <img class="me-2 image image-small rounded-circle" alt="Image placeholder" src="assets/img/united-states-of-america.svg" />
                                    <div><span class="h6">United States</span></div>
                                </a>
                            </td>
                            <td class="border-0 fw-bold">106</td>
                            <td class="border-0 text-danger">
                                <div class="d-flex align-items-center">
                                    <svg class="icon icon-xs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="fw-bold">5</span>
                                </div>
                            </td>
                            <td class="border-0 fw-bold">3</td>
                            <td class="border-0">=</td>
                            <td class="border-0 fw-bold">32</td>
                            <td class="border-0 text-success">
                                <div class="d-flex align-items-center">
                                    <svg class="icon icon-xs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="fw-bold">3</span>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td class="border-0">
                                <a href="#" class="d-flex align-items-center">
                                    <img class="me-2 image image-small rounded-circle" alt="Image placeholder" src="assets/img/canada.svg" />
                                    <div><span class="h6">Canada</span></div>
                                </a>
                            </td>
                            <td class="border-0 fw-bold">76</td>
                            <td class="border-0 text-success">
                                <div class="d-flex align-items-center">
                                    <svg class="icon icon-xs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="fw-bold">17</span>
                                </div>
                            </td>
                            <td class="border-0 fw-bold">4</td>
                            <td class="border-0">=</td>
                            <td class="border-0 fw-bold">30</td>
                            <td class="border-0 text-success">
                                <div class="d-flex align-items-center">
                                    <svg class="icon icon-xs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="fw-bold">3</span>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td class="border-0">
                                <a href="#" class="d-flex align-items-center">
                                    <img class="me-2 image image-small rounded-circle" alt="Image placeholder" src="assets/img/united-kingdom.svg" />
                                    <div><span class="h6">United Kingdom</span></div>
                                </a>
                            </td>
                            <td class="border-0 fw-bold">147</td>
                            <td class="border-0 text-success">
                                <div class="d-flex align-items-center">
                                    <svg class="icon icon-xs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="fw-bold">10</span>
                                </div>
                            </td>
                            <td class="border-0 fw-bold">5</td>
                            <td class="border-0">=</td>
                            <td class="border-0 fw-bold">34</td>
                            <td class="border-0 text-success">
                                <div class="d-flex align-items-center">
                                    <svg class="icon icon-xs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="fw-bold">7</span>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td class="border-0">
                                <a href="#" class="d-flex align-items-center">
                                    <img class="me-2 image image-small rounded-circle" alt="Image placeholder" src="assets/img/france.svg" />
                                    <div><span class="h6">France</span></div>
                                </a>
                            </td>
                            <td class="border-0 fw-bold">112</td>
                            <td class="border-0 text-success">
                                <div class="d-flex align-items-center">
                                    <svg class="icon icon-xs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="fw-bold">3</span>
                                </div>
                            </td>
                            <td class="border-0 fw-bold">5</td>
                            <td class="border-0 text-success">
                                <div class="d-flex align-items-center">
                                    <svg class="icon icon-xs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="fw-bold">1</span>
                                </div>
                            </td>
                            <td class="border-0 fw-bold">34</td>
                            <td class="border-0 text-danger">
                                <div class="d-flex align-items-center">
                                    <svg class="icon icon-xs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="fw-bold">2</span>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td class="border-0">
                                <a href="#" class="d-flex align-items-center">
                                    <img class="me-2 image image-small rounded-circle" alt="Image placeholder" src="assets/img/japan.svg" />
                                    <div><span class="h6">Japan</span></div>
                                </a>
                            </td>
                            <td class="border-0 fw-bold">115</td>
                            <td class="border-0 text-danger">
                                <div class="d-flex align-items-center">
                                    <svg class="icon icon-xs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="fw-bold">12</span>
                                </div>
                            </td>
                            <td class="border-0 fw-bold">6</td>
                            <td class="border-0 text-danger">
                                <div class="d-flex align-items-center">
                                    <svg class="icon icon-xs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="fw-bold">1</span>
                                </div>
                            </td>
                            <td class="border-0 fw-bold">37</td>
                            <td class="border-0 text-danger">
                                <div class="d-flex align-items-center">
                                    <svg class="icon icon-xs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="fw-bold">5</span>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td class="border-0">
                                <a href="#" class="d-flex align-items-center">
                                    <img class="me-2 image image-small rounded-circle" alt="Image placeholder" src="assets/img/germany.svg" />
                                    <div><span class="h6">Germany</span></div>
                                </a>
                            </td>
                            <td class="border-0 fw-bold">220</td>
                            <td class="border-0 text-danger">
                                <div class="d-flex align-items-center">
                                    <svg class="icon icon-xs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="fw-bold">56</span>
                                </div>
                            </td>
                            <td class="border-0 fw-bold">7</td>
                            <td class="border-0 text-danger">
                                <div class="d-flex align-items-center">
                                    <svg class="icon icon-xs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="fw-bold">3</span>
                                </div>
                            </td>
                            <td class="border-0 fw-bold">30</td>
                            <td class="border-0 text-success">
                                <div class="d-flex align-items-center">
                                    <svg class="icon icon-xs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="fw-bold">2</span>
                                </div>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
   );
}

export default Tables;