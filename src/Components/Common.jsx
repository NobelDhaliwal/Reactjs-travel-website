import React from "react";
import { NavLink } from "react-router-dom";
import web from "../ImagesWeb/girl.jpeg";
const Common=(props)=>{
return(
  <>
  <section  class="my-4">
    <h1 class="display-4">
About Us
    </h1>
  </section>
  
  <div className="container-fluid">
    <div className="row">
<div className="col-10 col-md-6 col-lg-6  col-xxl-6 mx-auto d-flex flex-column
 justify-content-center">
  <h2 className="h2_g text-capitalize text-center my-3">{props.quotes}</h2>
  </div>
    </div>
    <div className="col-10 col-md-6 order-1 order-lg-2 col-lg-6 col-xxl-6 my-5 mx-auto">
      <figure>
        <img src={web}  className="img_fluid about_img animated shadow" alt="about_img"/>
        </figure>
      </div>
<div className="col-10 col-md-6 col-lg-6 col-xxl-6 mx-auto">
<p> <strong className="brand-name mt-3"> TRAVEL WITH NOBEL </strong> {props.text}</p>
</div>
<div className="col-10 col-md-6 col-xxl-6 mx-auto  text-center my-3">
  <NavLink to={props.visit} className="btn btn-outline-info">{props.btnname} </NavLink>
  
  </div>    

  </div>
  </>
)
};
export default Common;