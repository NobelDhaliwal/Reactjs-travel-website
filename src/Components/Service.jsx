import React from 'react';
import Servicedata from "./Servicedata";
import Card from "./Card";
const Service=()=>{
  return (
<>
<div className="my-5">
  <h1 className="text-center"> Our Services</h1>
    </div>

  <div className="container-fluid mb-5">
    <div className="row">
      <div className="col-10 mx-auto">
        {/* gutter to give space between div */}
        <div className="row gy-4">
      {
        // Array.map method to show cards images one by one
        Servicedata.map((val,ind)=>{
          return (
            <Card  
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            />
          )
        })
      }

</div>
</div>
</div>
</div>

</>


  );
};
export default Service;