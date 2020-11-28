import React from "react";
import "./HomeHeader.css";
import logo from "../nonglogo.webp";

function HomeHeader() {
    return (
        <div className="homeHeader">
            <img className="homeHeader__logo" src={logo} alt="nong_logo" />
            <div className="homeHeader__item">
                <h3 className="homeHeader__navAllData">All data</h3>
            </div>
            <div className="homeHeader__item">
                <h3 className="homeHeader__navLogout">Logout</h3>
            </div>
        </div>
    );
}

export default HomeHeader;
