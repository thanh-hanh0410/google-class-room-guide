import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Navbar = () => (
    <nav className="navbar">
        <div className="navbar-left">
            <img src="/logo.png" alt="Logo" className="logo" />
            <span className="site-title"><strong>EduCoach</strong></span>
        </div>
        <div className="navbar-right">
            <NavLink to="/" className="nav-link">Trang chủ</NavLink>
            <NavLink to="/lessons" className="nav-link">Bài học</NavLink>
            <NavLink to="/quizzes" className="nav-link">Quiz</NavLink>
            <NavLink to="/forum" className="nav-link">Diễn đàn</NavLink>
            <NavLink to="/login" className="nav-link">Đăng nhập</NavLink>
             <NavLink to="/user" className="nav-link">
                <i className="fa-regular fa-circle-user"></i>
            </NavLink>
            <NavLink to="/admin" className="nav-link">
                <i className="fa-regular fa-circle-user"></i>
            </NavLink>


        </div>
    </nav>
);

export default Navbar;
