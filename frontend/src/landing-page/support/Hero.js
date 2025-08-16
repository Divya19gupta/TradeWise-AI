import React from "react";

function Hero() {
  return (
    <div className="container mt-5 bg-light">
      <div className="d-flex justify-content-between align-items-baseline p-3">
        <h1>Support Portal</h1>
        <button className="btn btn-primary mt-3">My tickets</button>
      </div>
      <form role="search">
        <div className="row mt-5 pb-5 ms-auto">
          <div className="col-md-11 m">
            <input
              className="form-control "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <div className="col-md-1 p-0">
            <i className="fa fa-search search-icon m-2" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Hero;
