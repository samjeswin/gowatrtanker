import React from "react";
import logo from "./img/gowatr_logo.png";
import lorry2 from "./img/lorry2.jpg";
import truck1 from "./img/gowatr-truck-1.png";
import course3 from "./img/courses-3.jpg";
import course2 from "./img/courses-2.jpg";
import course1 from "./img/courses-1.jpg";
import about1 from "./img/about-1.jpg";
import about2 from "./img/about-2.jpg";
import team1 from "./img/team-1.jpg";
import team2 from "./img/team-2.jpg";
import team3 from "./img/team-3.jpg";
import team4 from "./img/team-4.jpg";
import testimonial1 from "./img/testimonial-1.jpg";
import testimonial2 from "./img/testimonial-2.jpg";
import testimonial3 from "./img/testimonial-3.jpg";
function Main() {
  return (

    <section>
      {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-grow text-primary" role="status"></div>
      </div> */}

      <div className="container-fluid bg-dark text-light p-0">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center me-4">
              <small className="fa fa-map-marker-alt text-primary me-2"></small>
              <small>No-3, 3rd Cross Street, Sterling Road, Nungambakkam, Chennai - 600 034</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <small className="far fa-clock text-primary me-2"></small>
              <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center me-4">
              <small className="fa fa-phone-alt text-primary me-2"></small>
              <small>9 444 222 000</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center mx-n2">
              <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
              <a className="btn btn-square btn-link rounded-0" href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
      
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
      <li className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5" >
        <h2 className="m-0">
          <img className="logo" src={logo} alt="water tanker" />
        </h2>
      </li>
      <button  type="button"   className="navbar-toggler me-4"  data-bs-toggle="collapse" data-bs-target="#navbarCollapse"  >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <a className="nav-item nav-link active">Home</a>
          <a  className="nav-item nav-link">Water Management</a>
          <a  className="nav-item nav-link">Company</a>

          <a  className="nav-item nav-link">Contact</a>
        </div>
        <a  className="btn btn-primary py-4 px-lg-5 d-none d-lg-block" style={{color: "#0C2B4B"}} >Book Now<i className="fa fa-arrow-right ms-3"></i ></a>
      </div>
    </nav>

{/* carousel */}
    <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
      <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className=""  style={{width: "100%"}} src={lorry2} alt="Image" />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-7">
                    <h1 className="display-2 text-light mb-5 animated slideInDown">
                      #1 Tanker Water Supplier in Chennai
                    </h1>
                    <a href="" className="btn btn-primary py-sm-3 px-sm-5" >Book Tanker</a >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
{/* carousel */}
{/* Fact Start */}
<div className="container-fluid facts py-3 pt-lg-0">
      <div className="container py-5 pt-lg-0">
        <div className="row gx-0">
          <div className="col-lg-3 wow fadeIn" data-wow-delay="0.1s">
            <div  className="bg-white shadow d-flex align-items-center h-100 p-4" style={{minHeight: "150px"}} >
              <div className="d-flex">
                <div className="flex-shrink-0 btn-lg-square bg-primary">
                  <i className="fa fa-car text-white"></i>
                </div>
                <div className="ps-4">
                  <h5>Booking Made Easy</h5>
                  <span >Book water tankers effortlessly! Register with us, schedule
                    a time and get water delivered at the appointed time.</span >
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 wow fadeIn" data-wow-delay="0.3s">
            <div className="bg-white shadow d-flex align-items-center h-100 p-4" style={{minHeight: "150px"}}    >
              <div className="d-flex">
                <div className="flex-shrink-0 btn-lg-square bg-primary">
                  <i className="fa fa-users text-white"></i>
                </div>
                <div className="ps-4">
                  <h5>Cost Transparency</h5>
                  <span  >GoWatr with higher business ethical standards ensures a
                    favorable business environment for all our customers.</span >
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 wow fadeIn" data-wow-delay="0.5s">
            <div className="bg-white shadow d-flex align-items-center h-100 p-4" style={{minHeight: "150px"}}    >
              <div className="d-flex">
                <div className="flex-shrink-0 btn-lg-square bg-primary">
                  <i className="fa fa-file-alt text-white"></i>
                </div>
                <div className="ps-4">
                  <h5>Assured Delivery</h5>
                  <span  >Experience a seamless water delivery supply with GoWatr. We
                    promise to deliver you clean and hygienic water around the
                    clock.</span >
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 wow fadeIn" data-wow-delay="0.5s">
            <div className="bg-white shadow d-flex align-items-center h-100 p-4" style={{minHeight: "150px"}}    >
              <div className="d-flex">
                <div className="flex-shrink-0 btn-lg-square bg-primary">
                  <i className="fa fa-file-alt text-white"></i>
                </div>
                <div className="ps-4">
                  <h5>Residential and Commercial</h5>
                  <span >We supply water for all residential and commercial purposes
                    like MNCs, high-rise apartments, malls, hospitals, and
                    more.</span >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
{/* Fact End */}

{/* About Start */}
<div className="container-xxl py-6">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="position-relative overflow-hidden ps-5 pt-5 h-100"  style={{minHeight: "400px"}} >
              <img  className="position-absolute w-90 h-100"  src={truck1}  alt="" />
           
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="h-100">
              <h1 className="display-6 mb-4">PEACE OF MIND, DELIVERED.</h1>
              <p>
                Booking water is a cumbersome process, due to an existing
                haphazard system that puts you in tenterhooks regarding
                availability and delivery times and a fickle price system.
              </p>
              <p className="mb-4">
                With Gowatr, water sourcedis of the highest quality, and is
                delivered through 3000 tankers on call. Be it a community of 500
                residents or a corporate organization / industry of 1000
                employees, Gowatr answers your call.
              </p>
              <div className="row g-2 mb-4 pb-2">
                <div className="col-sm-6">
                  <i className="fa fa-check text-primary me-2"></i>Easy Booking
                </div>
                <div className="col-sm-6">
                  <i className="fa fa-check text-primary me-2"></i>Online Tracking
                </div>
                <div className="col-sm-6">
                  <i className="fa fa-check text-primary me-2"></i>Afordable Cost
                </div>
                <div className="col-sm-6">
                  <i className="fa fa-check text-primary me-2"></i>24/7 Service
                </div>
              </div>
              <div className="row g-4">
                <div className="col-sm-6">
                  <a className="btn btn-primary py-3 px-5" href="">Read More</a>
                </div>
                <div className="col-sm-6">
                  <a className="d-inline-flex align-items-center btn btn-outline-primary border-2 p-2" href="tel:+0123456789" >
                    <span className="flex-shrink-0 btn-square bg-primary">
                      <i className="fa fa-phone-alt text-white"></i>
                    </span>
                    <span className="px-3">+012 345 6789</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
{/* About  End */}

{/* Courses Start */}
<div className="container-xxl courses my-6 py-6 pb-0" style={{backgroundColor: "red"}}>

      <div className="container">
        <div  className="text-center mx-auto mb-5 wow fadeInUp"  data-wow-delay="0.1s" style={{maxWidth: "500px"}}>
          <h6 className="text-primary text-uppercase mb-2">Tranding Courses</h6>
          <h1 className="display-6 mb-4">
            Our Courses Upskill You With Driving Training
          </h1>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div  className="courses-item d-flex flex-column bg-white overflow-hidden h-100" >
              <div className="text-center p-4 pt-0">
                <div  className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4"  >
                  $99
                </div>
                <h5 className="mb-3">Automatic Car Lessons</h5>
                <p>
                  Tempor erat elitr rebum at clita dolor diam ipsum sit diam
                  amet diam et eos
                </p>
                <ol className="breadcrumb justify-content-center mb-0">
                  <li className="breadcrumb-item small">
                    <i className="fa fa-signal text-primary me-2"></i>Beginner
                  </li>
                  <li className="breadcrumb-item small">
                    <i className="fa fa-calendar-alt text-primary me-2"></i>3 Week
                  </li>
                </ol>
              </div>
              <div className="position-relative mt-auto">
                <img className="img-fluid" src={course1} alt="" />
                <div className="courses-overlay">
                  <a className="btn btn-outline-primary border-2" href=""  >Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100"  >
              <div className="text-center p-4 pt-0">
                <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4" >
                  $99
                </div>
                <h5 className="mb-3">Highway Driving Lesson</h5>
                <p>
                  Tempor erat elitr rebum at clita dolor diam ipsum sit diam
                  amet diam et eos
                </p>
                <ol className="breadcrumb justify-content-center mb-0">
                  <li className="breadcrumb-item small">
                    <i className="fa fa-signal text-primary me-2"></i>Beginner
                  </li>
                  <li className="breadcrumb-item small">
                    <i className="fa fa-calendar-alt text-primary me-2"></i>3 Week
                  </li>
                </ol>
              </div>
              <div className="position-relative mt-auto">
                <img className="img-fluid" src={course2} alt="" />
                <div className="courses-overlay">
                  <a className="btn btn-outline-primary border-2" href=""  >Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100"   >
              <div className="text-center p-4 pt-0">
                <div  className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4" >
                  $99
                </div>
                <h5 className="mb-3">International Driving</h5>
                <p>
                  Tempor erat elitr rebum at clita dolor diam ipsum sit diam
                  amet diam et eos
                </p>
                <ol className="breadcrumb justify-content-center mb-0">
                  <li className="breadcrumb-item small">
                    <i className="fa fa-signal text-primary me-2"></i>Beginner
                  </li>
                  <li className="breadcrumb-item small">
                    <i className="fa fa-calendar-alt text-primary me-2"></i>3 Week
                  </li>
                </ol>
              </div>
              <div className="position-relative mt-auto">
                <img className="img-fluid" src={course3} alt="" />
                <div className="courses-overlay">
                  <a className="btn btn-outline-primary border-2" href=""  >Read More</a  >
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 my-6 mb-0 wow fadeInUp" data-wow-delay="0.1s">
            <div className="bg-primary text-center p-5">
              <h1 className="mb-4">Make Appointment</h1>
              <form>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input  type="text"  className="form-control border-0" id="gname"  placeholder="Gurdian Name" />
                      <label >Your Name</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input type="email"  className="form-control border-0" id="gmail"  placeholder="Gurdian Email" />
                      <label >Your Email</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input type="text"  className="form-control border-0"  id="cname" placeholder="Child Name"  />
                      <label >Courses Type</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input type="text"  className="form-control border-0"  id="cage"    placeholder="Child Age"  />
                      <label >Car Type</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control border-0"  placeholder="Leave a message here" id="message"  style={{height: "100px"}}   ></textarea>
                      <label >Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-dark w-100 py-3" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>


{/* Courses  End */}


{/* Features  End */}
  <div className="container-xxl py-6">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase mb-2">Why Choose Us!</h6>
            <h1 className="display-6 mb-4">
              Best Driving Training Agency In Your City
            </h1>
            <p className="mb-5">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <div className="row gy-5 gx-4">
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-shrink-0 btn-square bg-primary me-3">
                    <i className="fa fa-check text-white"></i>
                  </div>
                  <h5 className="mb-0">Fully Licensed</h5>
                </div>
                <span >Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span  >
              </div>
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-shrink-0 btn-square bg-primary me-3">
                    <i className="fa fa-check text-white"></i>
                  </div>
                  <h5 className="mb-0">Online Tracking</h5>
                </div>
                <span  >Magna sea eos sit dolor, ipsum amet ipsum lorem diam  eos</span >
              </div>
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-shrink-0 btn-square bg-primary me-3">
                    <i className="fa fa-check text-white"></i>
                  </div>
                  <h5 className="mb-0">Afordable Fee</h5>
                </div>
                <span  >Magna sea eos sit dolor, ipsum amet ipsum lorem diam  eos</span >
              </div>
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-shrink-0 btn-square bg-primary me-3">
                    <i className="fa fa-check text-white"></i>
                  </div>
                  <h5 className="mb-0">Best Trainers</h5>
                </div>
                <span >Magna sea eos sit dolor, ipsum amet ipsum lorem diam
                  eos</span >
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="position-relative overflow-hidden pe-5 pt-5 h-100" style={{minHeight: "400px"}}    >
              <img  className="position-absolute w-100 h-100"   src={about1}  alt="" style={{objectFit: "cover"}}    />
              <img  className="position-absolute top-0 end-0 bg-white ps-3 pb-3"  src={about2}  alt="" style={{width: "200px",  height: "200px"}}   />
            </div>
          </div>
        </div>
      </div>
    </div>
{/* Features  End */}

{/* Team Start */}
<div className="container-xxl py-6">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp"  data-wow-delay="0.1s" style={{maxWidth: "500px"}}   >
          <h6 className="text-primary text-uppercase mb-2">Meet The Team</h6>
          <h1 className="display-6 mb-4">We Have Great Experience Of Driving</h1>
        </div>
        <div className="row g-0 team-items">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item position-relative">
              <div className="position-relative">
                <img className="img-fluid" src={team1} alt="" />
                <div className="team-social text-center">
                  <a  className="btn btn-square btn-outline-primary border-2 m-1"  href="" >
                    <i className="fab fa-facebook-f"></i ></a>
                  <a className="btn btn-square btn-outline-primary border-2 m-1"  href=""><i className="fab fa-twitter"></i ></a>
                  <a  className="btn btn-square btn-outline-primary border-2 m-1"  href=""  ><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              <div className="bg-light text-center p-4">
                <h5 className="mt-2">Full Name</h5>
                <span>Trainer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item position-relative">
              <div className="position-relative">
                <img className="img-fluid" src={team2} alt="" />
                <div className="team-social text-center">
                  <a  className="btn btn-square btn-outline-primary border-2 m-1"  href=""   ><i className="fab fa-facebook-f"></i ></a>
                  <a  className="btn btn-square btn-outline-primary border-2 m-1" href="" ><i className="fab fa-twitter"></i ></a>
                  <a   className="btn btn-square btn-outline-primary border-2 m-1" href=""  ><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              <div className="bg-light text-center p-4">
                <h5 className="mt-2">Full Name</h5>
                <span>Trainer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item position-relative">
              <div className="position-relative">
                <img className="img-fluid" src={team3} alt="" />
                <div className="team-social text-center">
                  <a className="btn btn-square btn-outline-primary border-2 m-1" href="" ><i className="fab fa-facebook-f"></i ></a>
                  <a  className="btn btn-square btn-outline-primary border-2 m-1"  href=""    ><i className="fab fa-twitter"></i ></a>
                  <a  className="btn btn-square btn-outline-primary border-2 m-1"  href="" ><i className="fab fa-instagram"></i ></a>
                </div>
              </div>
              <div className="bg-light text-center p-4">
                <h5 className="mt-2">Full Name</h5>
                <span>Trainer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="team-item position-relative">
              <div className="position-relative">
                <img className="img-fluid" src={team4} alt="" />
                <div className="team-social text-center">
                  <a  className="btn btn-square btn-outline-primary border-2 m-1"  href="" ><i className="fab fa-facebook-f"></i ></a>
                  <a  className="btn btn-square btn-outline-primary border-2 m-1"  href=""  ><i className="fab fa-twitter"></i  ></a>
                  <a className="btn btn-square btn-outline-primary border-2 m-1"  href="" ><i className="fab fa-instagram"></i ></a>
                </div>
              </div>
              <div className="bg-light text-center p-4">
                <h5 className="mt-2">Full Name</h5>
                <span>Trainer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


{/* Team  End */}



{/* Testimonial Start */}
<div className="container-xxl py-6">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s"  style={{maxWidth: "500px"}} >
          <h6 className="text-primary text-uppercase mb-2">Testimonial</h6>
          <h1 className="display-6 mb-4">What Our Clients Say!</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
            <div className="owl-carousel testimonial-carousel">
              <div className="testimonial-item text-center">
                <div className="position-relative mb-5">
                  <img className="img-fluid rounded-circle mx-auto" src={testimonial1}  alt=""  />
                  <div   className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle"
                  style={{width: "60px", height: "60px"}}  >
                    <i className="fa fa-quote-left fa-2x text-primary"></i>
                  </div>
                </div>
                <p className="fs-4">
                  Dolores sed duo clita tempor justo dolor et stet lorem kasd
                  labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy
                  et labore et tempor diam tempor erat.
                </p>
                <hr className="w-25 mx-auto" />
                <h5>Client Name</h5>
                <span>Profession</span>
              </div>
              <div className="testimonial-item text-center">
                <div className="position-relative mb-5">
                  <img className="img-fluid rounded-circle mx-auto"  src={testimonial2} alt=""  />
                  <div  className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle"
                    style={{width: "60px", height: "60px"}}  >
                    <i className="fa fa-quote-left fa-2x text-primary"></i>
                  </div>
                </div>
                <p className="fs-4">
                  Dolores sed duo clita tempor justo dolor et stet lorem kasd
                  labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy
                  et labore et tempor diam tempor erat.
                </p>
                <hr className="w-25 mx-auto" />
                <h5>Client Name</h5>
                <span>Profession</span>
              </div>
              <div className="testimonial-item text-center">
                <div className="position-relative mb-5">
                  <img  className="img-fluid rounded-circle mx-auto" src={testimonial3}   alt="" />
                  <div   className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle"
                    style={{width: "60px", height: "60px"}} >
                    <i className="fa fa-quote-left fa-2x text-primary"></i>
                  </div>
                </div>
                <p className="fs-4">
                  Dolores sed duo clita tempor justo dolor et stet lorem kasd
                  labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy
                  et labore et tempor diam tempor erat.
                </p>
                <hr className="w-25 mx-auto" />
                <h5>Client Name</h5>
                <span>Profession</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


{/* Testimonial  End */}



{/* Footer Start */}
    <div  className="container-fluid bg-dark text-light footer my-6 mb-0 py-6 wow fadeIn"  data-wow-delay="0.1s" >
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Get In Touch</h4>
            <h2 className="text-primary mb-4">
              <i className="fa fa-car text-white me-2"></i>Drivin
            </h2>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA
            </p>
            <p className="mb-2"> <i className="fa fa-phone-alt me-3"></i>+012 345 67890  </p>
            <p className="mb-2">  <i className="fa fa-envelope me-3"></i>info@example.com </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Quick Links</h4>
            <a className="btn btn-link" href="">About Us</a>
            <a className="btn btn-link" href="">Contact Us</a>
            <a className="btn btn-link" href="">Our Services</a>
            <a className="btn btn-link" href="">Terms & Condition</a>
            <a className="btn btn-link" href="">Support</a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Popular Links</h4>
            <a className="btn btn-link" href="">About Us</a>
            <a className="btn btn-link" href="">Contact Us</a>
            <a className="btn btn-link" href="">Our Services</a>
            <a className="btn btn-link" href="">Terms & Condition</a>
            <a className="btn btn-link" href="">Support</a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Newsletter</h4>
            <form action="">
              <div className="input-group">
                <input type="text" className="form-control p-3 border-0" placeholder="Your Email Address" />
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <h6 className="text-white mt-4 mb-3">Follow Us</h6>
            <div className="d-flex pt-2">
              <a className="btn btn-square btn-outline-light me-1" href=""  ><i className="fab fa-twitter"></i ></a>
              <a className="btn btn-square btn-outline-light me-1" href="" ><i className="fab fa-facebook-f"></i ></a>
              <a className="btn btn-square btn-outline-light me-1" href="" ><i className="fab fa-youtube"></i ></a>
              <a className="btn btn-square btn-outline-light me-0" href="" ><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>


{/* Footer  End */}



    </section>
  );
}

export default Main;
