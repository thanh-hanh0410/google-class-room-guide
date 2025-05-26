import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => (
    <nav className="bg-blue-600 p-4 text-white">
        <div className="flex gap-4">
            <Link to="/">Trang chủ</Link>
            <Link to="/lessons">Bài học</Link>
            <Link to="/quizzes">Quiz</Link>
            <Link to="/forum">Diễn đàn</Link>
            <Link to="/login">Đăng nhập</Link>
            <Link to="/admin">Admin</Link>
        </div>
    </nav>
);

export default Navbar;
