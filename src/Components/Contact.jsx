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
//   onChange eveny handler functio
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
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label
                  for="exampleFormControlInput1"
                  className="form-label">
                  FullName
                 </label>
                <input type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  required
                  onChange={InputEvent}
                  placeholder="Enter Your First Name"
                  name="fullname" 
                  value={data.fullname}
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1"
                  className="form-label">
                  Phone No
              </label>
                <input type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  required onChange={InputEvent}
                  placeholder="Mobile no"
                  name="mobile"
                  value={data.mobile}
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1"
                  className="form-label">
                  Email address
                </label>
                <input type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  required
                  placeholder="EMAIL" name="email"
                  onChange={InputEvent}
                  value={data.email}
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlTextarea1"
                  className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                >
                </textarea>
              </div>


              <div className="col-12">
                <button
                  className="btn btn-outline-success"
                  onClick={formSubmit}
                  type="submit">
                  Submit form
                      </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
