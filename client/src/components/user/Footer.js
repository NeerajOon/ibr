// import React from 'react'

// export default function Footer() {
//   return (
//     <div>
//            <footer className="site-footer">
//         <div className="container">
//             <div className="row">
//                 <div className="col-lg-3 col-12 mb-4">
//                     <img src="images/logo.png" className="logo img-fluid" alt=""/>
//                 </div>

//                 <div className="col-lg-4 col-md-6 col-12 mb-4">
//                     <h5 className="site-footer-title mb-3">Quick Links</h5>

//                     <ul className="footer-menu">
//                         <li className="footer-menu-item"><a href="#" className="footer-menu-link">Our Story</a></li>

//                         <li className="footer-menu-item"><a href="#" className="footer-menu-link">Newsroom</a></li>

//                         <li className="footer-menu-item"><a href="#" className="footer-menu-link">Causes</a></li>

//                         <li className="footer-menu-item"><a href="#" className="footer-menu-link">Become a volunteer</a></li>

//                         <li className="footer-menu-item"><a href="#" className="footer-menu-link">Partner with us</a></li>
//                     </ul>
//                 </div>

//                 <div className="col-lg-4 col-md-6 col-12 mx-auto">
//                     <h5 className="site-footer-title mb-3">Contact Infomation</h5>

//                     <p className="text-white d-flex mb-2">
//                         <i className="bi-telephone me-2"></i>

//                         <a href="tel: 305-240-9671" className="site-footer-link">
//                             305-240-9671
//                         </a>
//                     </p>

//                     <p className="text-white d-flex">
//                         <i className="bi-envelope me-2"></i>

//                         <a href="mailto:info@yourgmail.com" className="site-footer-link">
//                             donate@charity.org
//                         </a>
//                     </p>

//                     <p className="text-white d-flex mt-3">
//                         <i className="bi-geo-alt me-2"></i>
//                         Akershusstranda 20, 0150 Oslo, Norway
//                     </p>

//                     <a href="#" className="custom-btn btn mt-3">Get Direction</a>
//                 </div>
//             </div>
//         </div>

//         <div className="site-footer-bottom">
//             <div className="container">
//                 <div className="row">

//                     <div className="col-lg-6 col-md-7 col-12">
//                         <p className="copyright-text mb-0">Copyright © 2036 <a href="#">Kind Heart</a> Charity Org.
//                             Design: <a href="https://templatemo.com" target="_blank">TemplateMo</a><br/>Distribution:
//                             <a href="https://themewagon.com">ThemeWagon</a>
//                         </p>
//                     </div>

//                     <div className="col-lg-6 col-md-5 col-12 d-flex justify-content-center align-items-center mx-auto">
//                         <ul className="social-icon">
//                             <li className="social-icon-item">
//                                 <a href="#" className="social-icon-link bi-twitter"></a>
//                             </li>

//                             <li className="social-icon-item">
//                                 <a href="#" className="social-icon-link bi-facebook"></a>
//                             </li>

//                             <li className="social-icon-item">
//                                 <a href="#" className="social-icon-link bi-instagram"></a>
//                             </li>

//                             <li className="social-icon-item">
//                                 <a href="#" className="social-icon-link bi-linkedin"></a>
//                             </li>

//                             <li className="social-icon-item">
//                                 <a href="https://youtube.com/templatemo" className="social-icon-link bi-youtube"></a>
//                             </li>
//                         </ul>
//                     </div>

//                 </div>
//             </div>
//         </div>

//         <div style={{width:"100%", height:"10px"}} className="bg-danger">
            
//         </div>
//     </footer>

      
//     </div>
//   )
// }



// new footer

import React from 'react'

export default function Footer() {
  return (
    <div>

  <footer style={{backgroundImage:"linear-gradient(130deg, black, black, #ab2330, black)"}} className=" text-center text-lg-start text-white">
    {/* <!-- Grid container --> */}
    <div  className="container p-4">
      {/* <!--Grid row--> */}
      <div  className="row my-4">
        {/* <!--Grid column--> */}
        <div  className="col-lg-3 col-md-6 mb-4 mb-md-0">

          <div  className="rounded-circle shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style={{width: "150px", height: "150px"}}>
            <img src={process.env.PUBLIC_URL + '/logo.png'} height="100" alt=""
                 loading="lazy" />
          </div>

          <p  className="text-center">Homless animal shelter The budgetary unit of the Capital City of Warsaw</p>

          <ul  className="list-unstyled d-flex flex-row justify-content-center">
            <li>
              <a  className="text-white px-2" href="#!">
                <i  className="fab fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a  className="text-white px-2" href="#!">
                <i  className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a  className="text-white ps-2" href="#!">
                <i  className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>

        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div  className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5  className="text-uppercase mb-4">Animals</h5>

          <ul  className="list-unstyled">
            <li  className="mb-2">
              <a href="#!"  className="text-white"><i  className="bi bi-arrow-right "> </i>  When your pet is missing</a>
            </li>
            <li  className="mb-2">
              <a href="#!"  className="text-white"><i  className="bi bi-arrow-right "> </i>  Recently found</a>
            </li>
            <li  className="mb-2">
              <a href="#!"  className="text-white"><i  className="bi bi-arrow-right "> </i>  How to adopt?</a>
            </li>
            <li  className="mb-2">
              <a href="#!"  className="text-white"><i  className="bi bi-arrow-right "> </i>  Pets for adoption</a>
            </li>
            <li  className="mb-2">
              <a href="#!"  className="text-white"><i  className="bi bi-arrow-right "> </i>  Material gifts</a>
            </li>
            <li  className="mb-2">
              <a href="#!"  className="text-white"><i  className="bi bi-arrow-right "> </i>  Help with walks</a>
            </li>
            <li  className="mb-2">
              <a href="#!"  className="text-white"><i  className="bi bi-arrow-right "> </i>  Volunteer activities</a>
            </li>
          </ul>
        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div  className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5  className="text-uppercase mb-4">Animals</h5>

          <ul  className="list-unstyled">
            <li  className="mb-2">
              <a href="#!"  className="text-white"><i  className="bi bi-arrow-right"></i>  General information</a>
            </li>
            <li  className="mb-2">
              <a href="#!"  className="text-white"><i  className="bi bi-arrow-right"></i>  About the shelter</a>
            </li>
            <li  className="mb-2">
              <a href="#!"  className="text-white"><i  className="bi bi-arrow-right"></i>  Statistic data</a>
            </li>
            <li  className="mb-2">
              <a href="#!"  className="text-white"><i  className="bi bi-arrow-right"></i>  Job</a>
            </li>
            <li  className="mb-2">
              <a href="#!"  className="text-white"><i  className="bi bi-arrow-right"></i>  Tenders</a>
            </li>
            <li  className="mb-2">
              <a href="#!"  className="text-white"><i  className="bi bi-arrow-right"></i>  Contact</a>
            </li>
          </ul>
        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div  className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5  className="text-uppercase mb-4">Contact</h5>

          <ul  className="list-unstyled">
            <li>
              <p><i  className="fas fa-map-marker-alt pe-2"></i>Warsaw, 57 Street, Poland</p>
            </li>
            <li>
              <p><i  className="fas fa-phone pe-2"></i>+ 01 234 567 89</p>
            </li>
            <li>
              <p><i  className="fas fa-envelope pe-2 mb-0"></i>contact@example.com</p>
            </li>
          </ul>
        </div>
        {/* <!--Grid column--> */}
      </div>
      {/* <!--Grid row--> */}
    </div>
    {/* <!-- Grid container --> */}

    {/* <!-- Copyright --> */}
    <div  className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
      © 2020 Copyright:
      <a  className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
    {/* <!-- Copyright --> */}
    <div style={{width:"100%", height:"10px",backgroundImage:"linear-gradient(180deg, red, #ab2330, black)"}} className="bg-danger"> </div>
  </footer>

</div>
  )
}
