import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      {/* Navbar from Bootstrap */}
      {/* first three div to make our website responsive */}
      {/* container- which sets a max-width at each responsive breakpoint and 
  it makes items center.
.container-fluid will set 100% width  at all breakpoints */}
      <div className="container-fluid nav_bg ">
        <div className="row">
          {/* To show our navar in center and it use 10 coloumn */}
          <div className="col-10  col-md-10  col-xxl-10 mx-auto ">
            <nav className="navbar navbar-expand-lg  navbar-light nav_g">
              <div className="container-fluid">
                {/* So far, our app is only navigable by typing the URLs.
  To add clickable links to the site, 
  we use the Link element or navlink from React Router
   and set up a new Navbar component.
    Once again, don't forget to import the new component into the app. */}

                {/* Now add a Link for each component in the app and use to="URL" to link them. 
instead of href which is used in anchor tag we use to attribute*/}
                <NavLink className="navbar-brand text-white " to="#"> Travel With Nobel</NavLink>
                <button className="navbar-toggler" type="button"
                  data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  {/* WE need ml-auto ml means margin left or mr means margin right */}
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    {/*first navlink  */}
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link active text-white"
                        aria-current="page" to="/home">Home</NavLink>
                    </li>
                    {/* Second Navlink */}
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link text-white" to="/service">Services</NavLink>
                    </li>
                    {/* Third Navlink */}
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active"
                        className="nav-link text-white" to="/about">About</NavLink>
                    </li>
                    {/* Fourth Navlink */}
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active"
                        className="nav-link active text-white" aria-current="page"
                        to="/contact">Contact Us</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* Navbar ends here */}
    </>

  )
};
export default Navbar;
          /* React-Router help to render component or page without loading it ,
which anchor tag does not do ,therefore we use NavLink or Link */
/* Using links or NavLink to switch pages(same as anchor tag.instead of href
  we use to attribute) */


/* With help of NavLink we can use this attribute activeClassName
   to show which component is active */
