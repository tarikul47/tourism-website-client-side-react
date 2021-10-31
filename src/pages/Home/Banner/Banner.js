import React from 'react';
import { Link } from 'react-router-dom';
import "./Banner.css";

const Banner = () => {
    return (
        // Banner
        <div className="single-hero-slide bg-img">
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12">
                        <div className="hero-slides-content">
                            <h2>We provide top Travel services</h2>
                            <h5>We complete More than 300 professionals tour.</h5>
                            <div className="slide-btn-group mt-4">
                                <Link to="/addService" className="btn medica-btn">Add New Service</Link>
                                <Link to="/myOrders" className="btn medica-btn ms-2 btn-2">My Order</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;