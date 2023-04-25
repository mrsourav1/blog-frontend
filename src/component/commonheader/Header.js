import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class Header extends Component {
    render() {
        return (
            <>
                {/* navbar */}
                <nav className="navbar navbar-expand-md sticky-top nav-shadow" style={{ height: "81px", backgroundColor: "#e7dae0" }}> 
                    <div className="container-fluid" style={{ width: "100%", backgroundColor: '#e7dae0' }}>
                        <NavLink className="navbar-brand" to='/'><img src='/assets/image/logoHM.png' alt="logo" style={{ height: "60px", width: "80px", }} /></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse ms-3" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                {/* <li className="nav-item">
                                    <NavLink className="active text-dark nav-link ms-3 colorEffect" aria-current="page" to="/home">Home</NavLink>
                                </li> */}
                                <li className="nav-item">
                                    <NavLink className="active text-dark nav-link ms-3 colorEffect" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink className="active text-dark nav-link ms-3 colorEffect" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</NavLink>
                                     <div>
                                     <ul className="dropdown-menu  text-dark fs-6" style={{backgroundColor:'#FFFFFF'}}>
                                        <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/web-designing">Web Designing</NavLink></li>
                                        <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/web-development">Web Development</NavLink></li>
                                        <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/app-development">App Development</NavLink></li>
                                        <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/software-development">Software Development</NavLink></li>
                                        <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/digital-marketing">Digital Marketing</NavLink></li>
                                        <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/automated-system">Automated System</NavLink></li>
                                        <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/business-analysis">Business Analysis</NavLink></li>
                                        <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/socialMedia-marketing">Social Media Marketing</NavLink></li>
                                    </ul>
                                     </div>
                                   
                                </li>
                                <li className="nav-item">
                                    <NavLink className="active text-dark nav-link ms-3 colorEffect" aria-current="page" to="/gallery">Gallery</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="active text-dark nav-link ms-3 colorEffect" aria-current="page" to="/MYB-Scholarship">MYB Scholarship</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="active text-dark nav-link ms-3 colorEffect" aria-current="page" to="/contactUs">Contact us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="active text-dark nav-link ms-3 colorEffect" aria-current="page" to="/blogs">Blogs</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

