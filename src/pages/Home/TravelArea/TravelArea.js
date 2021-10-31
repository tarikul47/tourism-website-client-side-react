import React from "react";
import "./TravelArea.css";

const TravelArea = () => {
  return (
    <div className="travel_variation_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single_travel text-center">
              <div className="icon">
                <img
                  src="https://preview.colorlib.com/theme/travelo/img/svg_icon/1.svg"
                  alt=""/>
              </div>
              <h3>Comfortable Journey</h3>
              <p>
                A wonderful serenity has taken to the possession of my entire
                soul.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single_travel text-center">
              <div className="icon">
                <img
                  src="https://preview.colorlib.com/theme/travelo/img/svg_icon/2.svg"
                  alt=""/>
              </div>
              <h3>Luxuries Hotel</h3>
              <p>
                A wonderful serenity has taken to the possession of my entire
                soul.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single_travel text-center">
              <div className="icon">
                <img
                  src="https://preview.colorlib.com/theme/travelo/img/svg_icon/3.svg"
                  alt=""/>
              </div>
              <h3>Travel Guide</h3>
              <p>
                A wonderful serenity has taken to the possession of my entire
                soul.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelArea;
