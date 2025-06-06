import React, { useState, useEffect } from 'react';
import "./User.css";

const UserProfile = () => {
  // Lấy thông tin user từ localStorage (nếu có), để giữ dữ liệu khi reload trang
  const storedUser = JSON.parse(localStorage.getItem('user')) || {};

  // Khởi tạo state user với dữ liệu lấy từ localStorage hoặc mặc định rỗng
  const [user, setUser] = useState({
    id: storedUser.id || '', // id user để phân biệt, nếu có
    avatar: storedUser.avatar || null, // avatar có thể là URL hoặc null
    name: storedUser.name || '', // họ tên user
    email: storedUser.email || '', // email user
    password: '', // password lúc đầu để trống (để bảo mật, không lưu mật khẩu vào localStorage)
    role: storedUser.role || 'Giáo viên', // vai trò (chức danh) mặc định là Giáo viên
  });

  // Nếu bạn có token đăng nhập (JWT hoặc session), có thể lấy ở đây để dùng khi gửi API
  // const token = localStorage.getItem('token');

  // Mỗi khi state user thay đổi, ta cập nhật lại localStorage để dữ liệu không bị mất khi reload
  useEffect(() => {
    // Lưu toàn bộ user (trừ password hoặc có thể xử lý riêng) vào localStorage
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]); // chỉ chạy khi user thay đổi

  // Hàm xử lý khi người dùng nhập thay đổi input (name, email, password, role)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Cập nhật lại state user cho trường tương ứng
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  // Hàm xử lý khi người dùng chọn ảnh avatar mới
  const handleAvatarChange = (e) => {
    const file = e.target.files[0]; // Lấy file đầu tiên người dùng chọn
    if (file) {
      // Tạo URL tạm cho ảnh để hiển thị luôn mà chưa cần upload server
      const url = URL.createObjectURL(file);
      // Cập nhật avatar trong state
      setUser((prev) => ({ ...prev, avatar: url }));
    }
  };

  // Hàm xử lý khi người dùng nhấn nút Lưu thay đổi
  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirmSave = window.confirm("Bạn có chắc muốn lưu các thay đổi?");
    if (!confirmSave) return;

    try {
      // Đây là vị trí bạn có thể gọi API backend để lưu thông tin user lên server
      // Ví dụ:
      // const response = await fetch(`/api/users/${user.id}`, {
      //   method: 'PUT',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${token}`, // nếu dùng token xác thực
      //   },
      //   body: JSON.stringify(user),
      // });
      // const data = await response.json();

      alert('Thông tin đã được lưu (giả lập).');
      // Cập nhật lại localStorage để lưu tạm khi chưa có server
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      alert('Lỗi khi lưu thông tin');
      console.error(error);
    }
  };

  // Hàm xử lý khi người dùng muốn xoá tài khoản (có thể gọi API backend)
  const handleDelete = () => {
    const confirmDelete = window.confirm("Bạn có chắc chắn muốn xoá tài khoản này?");
    if (confirmDelete) {
      // Xử lý xóa tài khoản tại đây
      console.log("Tài khoản đã bị xoá");
      localStorage.removeItem('user'); // xoá dữ liệu localStorage

      // Bạn có thể redirect user về trang đăng nhập hoặc trang khác
      // Ví dụ: window.location.href = '/login';
    }
  };

  return (
    <div className="user-container">
      <h2 className="user-title">Thông tin cá nhân</h2>

      <div className="user-avatar-section">
        {/* Hiển thị avatar nếu có, nếu không hiển thị ảnh mặc định */}
        <img
          src={user.avatar || "/default-avatar.png"}
          alt="Avatar"
          className="user-avatar"
        />

        {/* Label kèm input file để chọn ảnh mới */}
        <label htmlFor="avatar-upload" className="btn-upload">Chọn ảnh</label>
        <input
          type="file"
          id="avatar-upload"
          accept="image/*"
          style={{ display: 'none' }} // Ẩn input file thật đi, chỉ hiện label làm nút chọn
          onChange={handleAvatarChange} // xử lý chọn file mới
        />
      </div>

      <form onSubmit={handleSubmit} className="user-form">
        <div className="user-form-group">
          <label>Họ và tên</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
            placeholder="Nhập tên của bạn"
            required
          />
        </div>

        <div className="user-form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            placeholder="email@example.com"
            required
          />
        </div>

        <div className="user-form-group">
          <label>Mật khẩu</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
            placeholder="********"
            required
          />
        </div>

        <div className="user-form-group">
          <label>Vai trò</label>
          <select
            name="role"
            value={user.role}
            onChange={handleInputChange}
          >
            <option>Giáo viên</option>
            <option>Người dùng</option>
            <option>Giảng viên</option>
            <option>Sinh viên</option>
          </select>
        </div>

        <div className="user-button-group">
          {/* Nút lưu thông tin */}
          <button type="submit" className="btn-save">Lưu thay đổi</button>

          {/* Nút xoá tài khoản */}
          <button type="button" onClick={handleDelete} className="btn-delete">Xoá tài khoản</button>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
