import React, { useState } from 'react';
import "./Admin.css";

// ======= Sidebar: thanh điều hướng bên trái =======
const Sidebar = ({ onSelect, isSidebarVisible, toggleSidebar }) => {
    const menuItems = [
        { key: 'courses', label: 'Các bài học' },
        { key: 'users', label: 'Danh sách học viên' },
    ];

    return (
        <nav className={`sidebar-menu ${isSidebarVisible ? 'open' : ''}`}>
            <ul>
                {menuItems.map(({ key, label }) => (
                    <li key={key}>
                        <button
                            onClick={() => {
                                onSelect(key); // Khi chọn, đổi tab
                                toggleSidebar(); // Ẩn sidebar sau khi chọn
                            }}
                        >
                            {label}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

// ======= CourseManager: Quản lý khóa học =======
const CourseManager = () => {
    const [courses, setCourses] = useState([
        { name: "Google Classroom Cơ bản", date: "2025-06-01" },
        { name: "Tạo bài kiểm tra với Google Forms", date: "2025-06-02" },
        { name: "Tổ chức lớp học hiệu quả", date: "2025-06-03" },
        { name: "Theo dõi tiến độ học tập", date: "2025-06-04" }
    ]);

    const [newCourseName, setNewCourseName] = useState(""); // Dữ liệu tên mới
    const [newCourseDate, setNewCourseDate] = useState(""); // Dữ liệu ngày mới
    const [editIndex, setEditIndex] = useState(null); // Vị trí đang chỉnh sửa (nếu có)

    const handleAddCourse = () => {
        if (!newCourseName || !newCourseDate) return;

        const updatedCourses = [...courses];
        if (editIndex !== null) {
            // Nếu đang sửa: cập nhật lại dữ liệu
            updatedCourses[editIndex] = { name: newCourseName, date: newCourseDate };
            setEditIndex(null); // Thoát chế độ chỉnh sửa
        } else {
            // Nếu không sửa: thêm mới
            updatedCourses.push({ name: newCourseName, date: newCourseDate });
        }

        setCourses(updatedCourses);
        setNewCourseName("");
        setNewCourseDate("");
    };

    const handleEditCourse = (index) => {
        // Gán dữ liệu vào form để sửa
        setNewCourseName(courses[index].name);
        setNewCourseDate(courses[index].date);
        setEditIndex(index);
    };

    const handleDeleteCourse = (index) => {
        // Xóa bài học
        const updatedCourses = courses.filter((_, i) => i !== index);
        setCourses(updatedCourses);
    };

    return (
        <div>
            <h2>Danh sách bài học</h2>
            {/* Form thêm/sửa khóa học */}
            <div style={{ marginBottom: "16px" }}>
                <input
                    type="text"
                    placeholder="Tên bài học"
                    value={newCourseName}
                    onChange={(e) => setNewCourseName(e.target.value)}
                    style={{ marginRight: "8px" }}
                />
                <input
                    type="date"
                    value={newCourseDate}
                    onChange={(e) => setNewCourseDate(e.target.value)}
                    style={{ marginRight: "8px" }}
                />
                <button className="btn-add" onClick={handleAddCourse}>
                    {editIndex !== null ? "Lưu chỉnh sửa" : "+ Thêm bài học"}
                </button>
            </div>

            {/* Bảng danh sách khóa học */}
            <table border="1" cellPadding="10" width="100%">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên bài học</th>
                        <th>Ngày tạo</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{course.name}</td>
                            <td>{course.date}</td>
                            <td>
                                <button onClick={() => handleEditCourse(index)}>Sửa</button>
                                <button onClick={() => handleDeleteCourse(index)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// ======= UserManager: Quản lý học viên =======
const UserManager = () => {
    const [users, setUsers] = useState([
        { name: "Nguyễn Văn A", email: "a@gmail.com", role: "Giáo viên" },
        { name: "Trần Thị B", email: "b@gmail.com", role: "Giáo viên" },
        { name: "Lê Văn C", email: "c@gmail.com", role: "Giảng viên" },
        { name: "Phạm Thị D", email: "d@gmail.com", role: "Giảng viên" }
    ]);

    const [editIndex, setEditIndex] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");

    const handleEdit = (index) => {
        // Nạp dữ liệu để sửa
        const user = users[index];
        setName(user.name);
        setEmail(user.email);
        setRole(user.role);
        setEditIndex(index);
    };

    const handleSave = () => {
        // Cập nhật người dùng
        if (editIndex !== null) {
            const updatedUsers = [...users];
            updatedUsers[editIndex] = { name, email, role };
            setUsers(updatedUsers);
            setEditIndex(null);
            setName("");
            setEmail("");
            setRole("");
        }
    };

    const handleDelete = (index) => {
        // Xóa người dùng
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);

        // Nếu đang sửa người dùng vừa bị xóa thì reset form
        if (editIndex === index) {
            setEditIndex(null);
            setName("");
            setEmail("");
            setRole("");
        }
    };

    return (
        <div>
            <h2>Danh sách học viên</h2>

            {/* Form sửa người dùng */}
            {editIndex !== null && (
                <div style={{ marginBottom: "16px" }}>
                    <input
                        type="text"
                        placeholder="Tên"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ marginRight: "8px" }}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ marginRight: "8px" }}
                    />
                    <input
                        type="text"
                        placeholder="Vai trò"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        style={{ marginRight: "8px" }}
                    />
                    <button onClick={handleSave}>Lưu chỉnh sửa</button>
                </div>
            )}

            {/* Bảng danh sách người dùng */}
            <table border="1" cellPadding="10" width="100%">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Email</th>
                        <th>Vai trò</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <button onClick={() => handleEdit(index)}>Sửa</button>
                                <button onClick={() => handleDelete(index)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// ======= Admin: Component chính =======
const Admin = () => {
    const [activeTab, setActiveTab] = useState('courses'); // Tab đang được chọn
    const [isSidebarVisible, setIsSidebarVisible] = useState(false); // Hiện/ẩn sidebar

    const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible); // Toggle sidebar

    return (
        <div className="admin-container">
            {/* Nút toggle sidebar */}
            <button
                className="sidebar-toggle-btn"
                onClick={toggleSidebar}
                aria-label={isSidebarVisible ? "Đóng menu" : "Mở menu"}
            >
                {isSidebarVisible ? '☰' : '☰'}
            </button>

            {/* Thanh menu bên trái */}
            <Sidebar
                onSelect={setActiveTab}
                isSidebarVisible={isSidebarVisible}
                toggleSidebar={toggleSidebar}
            />

            {/* Khu vực nội dung chính */}
            <div
                className="admin-main"
                style={{
                    marginLeft: isSidebarVisible ? '250px' : '0',
                    transition: 'margin-left 0.3s ease',
                }}
            >
                {/* Hiển thị component tương ứng */}
                {activeTab === 'courses' ? <CourseManager /> : <UserManager />}
            </div>
        </div>
    );
};

export default Admin;
