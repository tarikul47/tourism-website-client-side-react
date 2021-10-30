import React from "react";
import "./Service.css";

const Service = () => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="single_place">
        <div className="thumb">
          <img
            src="https://preview.colorlib.com/theme/travelo/img/place/x1.png.pagespeed.ic.PhjDw51Df0.webp"
            alt=""/>
          <a href="#" className="prise">$50</a>
        </div>
        <div className="place_info">
          <a href="destination_details.html">
            <h3>California</h3>
          </a>
          <p>United State of America</p>
          <div className="rating_days d-flex justify-content-between">
            <span className="d-flex justify-content-center align-items-center">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <a href="#">(20 Review)</a>
            </span>
            <div className="days">
              <i className="fa fa-clock-o"></i>
              <a href="#">5 Days</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
