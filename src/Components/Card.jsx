
import React from 'react';
import {NavLink} from "react-router-dom";

const Card=(props)=>{
  return(
      <>
      {/* first card */}
           <div className="col-md-4 col-10 mx-auto title_g ">
               {/* For making card of same height use h-100 class */}
          <div class="card w-90 h-100 text-center shadow mx-auto">
  <img src={props.imgsrc}  class="card-img-top img-fluid img_1" alt="service_img"/>
  <div class="card-body ">
  <h5 class="card-title ">{props.title}</h5>
  <p class="card-text">{props.text}</p>
    <NavLink to="#" class="btn btn-primary">Enquire</NavLink>
  </div>
</div>
</div>
</>
);
};
export default Card;