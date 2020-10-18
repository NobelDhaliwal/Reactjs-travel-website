import React from 'react';
import { useState } from 'react';
const Contact = () => {
  //useState Hooks
  const [data, setData] = useState({
    fullname: " ",
    mobile: " ",
    email: " ",
    msg: " ",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target; //object destructuring
    setData((preVal) => {
      return {
        ...preVal, //spread operator
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert("We will Contact You soon!")
  }
  return (
    <>
      <div className="my-5 contact_gg">
        <h1 className="text-center"> Contact Us</h1>
      </div>
      <div className=" container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">FullName</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" required
                placeholder="Enter Your First Name"
                name="fullname" value={data.fullname}
              />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Phone No</label>
              <input type="number" class="form-control" id="exampleFormControlInput1" required
                placeholder="Mobile no"
                name="mobile" value={data.mobile}
              />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" required
                placeholder="EMAIL" name="email" onChange={InputEvent} value={data.email}
              />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                name="msg" value={data.msg} onChange={InputEvent}
              >
              </textarea>
            </div>


            <div class="col-12">
              <button class="btn btn-outline-success" onSubmit={formSubmit} type="submit">Submit form
    </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;