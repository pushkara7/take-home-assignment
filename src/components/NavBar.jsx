import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/NavBar.css";

const NavBarComponent = () => {
    const jsonData = useSelector((state) => state.getData);

    const { data, site, profile, error } = jsonData;
    return (
        <>
            {error ? (
                <div className="error-message"> Data is currently unavailable</div>
            ) : (
                <ul id="nav">
                    <li className="logo">
                        <NavLink to={{ pathname: "/", state: { home: data } }}>
                            <img className="logo-image" src={site.logoImage}></img>
                        </NavLink>
                    </li>
                    <li className="page-title">{site.title}</li>
                    <li className="profile-link">
                        <NavLink to={{ pathname: "/profile", state: { profile: profile } }}>
                            Welcome {profile.firstName}
                        </NavLink>
                    </li>
                </ul>
            )}
        </>
    );
};

export default NavBarComponent;
