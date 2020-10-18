import React from "react";
import { NavLink } from "react-router-dom";
import web from "../ImagesWeb/3.jpeg";
const Home = () => {
  return (
    <>
      <section className="d-flex align-items-center" id="header">
        <div className="container-fluid">
          <div className="row gy-5">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 my-5 col-xxl-6 mx-auto  order-2 order-lg-1 d-flex flex-column justify-content-center">
                  <h1 className="home_h1">"AGE IS NO BARRIER WHEN IT COMES TO TRAVEL"</h1>
                  <h3 className="home_h2">PLAN YOUR NEXT DREAM HOLIDAYS WITH YOURS
      <strong className="brand-name">   TRAVEL WITH NOBEL.   </strong></h3>
                  <div className="my-3 text-center">
                    <NavLink to="/about" className="btn btn-outline-info text-center"> GO AHEAD</NavLink>
                  </div>
                </div>
                <div className="col-lg-6  order-1 order-lg-2 home_img" >
                  <img src={web} className="img-fluid animated" alt="home_img" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
    </>

  );
};
export default Home;