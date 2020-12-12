import React from "react";
import "./HomeHeader.css";
import logo from "../nonglogo.webp";
import { auth } from "../firebase";
import { Link, useHistory } from "react-router-dom";

function HomeHeader({ user }) {
    //console.log("HomeHeader", user);
    const history = useHistory("");
    if (user === false) {
        history.push("/login");
        //console.log("CheckUser", user?.email);
    }
    const userLogout = (event) => {
        event.preventDefault();
        auth.signOut();
        history.push("/login");
        //console.log("Signout", event);
    };

    return (
        <div className="homeHeader">
            <img className="homeHeader__logo" src={logo} alt="nong_logo" />
            <Link to="/home" style={{ textDecoration: "none" }}>
                <div className="homeHeader__item">
                    <h3 className="homeHeader__navDataEntry">Data Entry</h3>
                </div>
            </Link>

            <Link to="/alldata" style={{ textDecoration: "none" }}>
                <div className="homeHeader__item">
                    <h3 className="homeHeader__navAllData">All data</h3>
                </div>
            </Link>
            <div className="homeHeader__item">
                <h3 onClick={userLogout} className="homeHeader__navLogout">
                    Logout
                </h3>
            </div>
        </div>
    );
}

export default HomeHeader;
