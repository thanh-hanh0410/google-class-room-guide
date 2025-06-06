import React, { useState } from "react";
import "./Forum.css";

const ForumPage = () => {
  const lessons = [
    {
      title: "Bài 1: Tạo lớp học",
      youtube: "https://www.youtube.com/embed/l5gfef5qEOU",
      image: "https://via.placeholder.com/300x150?text=B%C3%A0i+1"
    },
    {
      title: "Bài 2: Thêm học viên",
      youtube: "https://www.youtube.com/embed/12FbuqtchKs",
      image: "https://via.placeholder.com/300x150?text=B%C3%A0i+2"
    },
    {
      title: "Bài 3: Giao bài tập",
      youtube: "https://www.youtube.com/embed/5tmbkq0vBn4",
      image: "https://via.placeholder.com/300x150?text=B%C3%A0i+3"
    },
    {
      title: "Bài 4: Chấm điểm",
      youtube: "https://www.youtube.com/embed/gttKY6pVgwI",
      image: "https://via.placeholder.com/300x150?text=B%C3%A0i+4"
    },
    {
      title: "Bài 5: Quản lý lớp học",
      youtube: "https://www.youtube.com/embed/JP6KIThqQB0",
      image: "https://via.placeholder.com/300x150?text=B%C3%A0i+5"
    },
    {
      title: "Bài 6: Xuất báo cáo",
      youtube: "https://www.youtube.com/embed/JP6KIThqQB0",
      image: "https://via.placeholder.com/300x150?text=B%C3%A0i+6"
    },
  ];

  const [db, setDb] = useState({
    "Bài 1: Tạo lớp học": [
      { id: 1, user: "Linh", role: "user", text: "Mình không thấy nút thêm học viên?" },
      { id: 2, user: "admin", role: "admin", text: "Bạn thử vào tab Thành viên nhé!", replyTo: 1 },
    ],
    "Bài 2: Thêm học viên": [],
    "Bài 3: Giao bài tập": [],
    "Bài 4: Chấm điểm": [],
    "Bài 5: Quản lý lớp học": [],
    "Bài 6: Xuất báo cáo": [],
  });

  const currentUser = { name: "admin", role: "admin" };
  const [selectedLesson, setSelectedLesson] = useState(lessons[0].title);
  const [newComment, setNewComment] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [replyTo, setReplyTo] = useState(null);

  // Xử lý gửi bình luận mới
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCmt = {
        id: Date.now(),
        user: currentUser.name,
        role: currentUser.role,
        text: newComment.trim(),
        replyTo: replyTo,
      };
      setDb((prevDb) => ({
        ...prevDb,
        [selectedLesson]: [...prevDb[selectedLesson], newCmt],
      }));
      setNewComment("");
      setReplyTo(null);
    }
  };

  // Xóa bình luận (chỉ người tạo mới xóa được)
  const handleDelete = (id, user) => {
    if (user !== currentUser.name) return;
    const updated = db[selectedLesson].filter((cmt) => cmt.id !== id);
    setDb((prevDb) => ({
      ...prevDb,
      [selectedLesson]: updated,
    }));
  };

  // Bắt đầu sửa bình luận
  const handleEditStart = (id, currentText, user) => {
    if (user !== currentUser.name) return;
    setEditingId(id);
    setEditingText(currentText);
  };

  // Lưu sửa bình luận
  const handleEditSave = () => {
    const updated = db[selectedLesson].map((cmt) =>
      cmt.id === editingId ? { ...cmt, text: editingText } : cmt
    );
    setDb((prevDb) => ({
      ...prevDb,
      [selectedLesson]: updated,
    }));
    setEditingId(null);
    setEditingText("");
  };

  // Hủy sửa
  const handleCancelEdit = () => {
    setEditingId(null);
    setEditingText("");
  };

  return (
    <div className="forum-container">
      <h1>Diễn đàn thảo luận</h1>
      <p className="forum-description">
        Đặt câu hỏi, chia sẻ và phản hồi dưới mỗi bài học.
      </p>

      <section className="lesson-select">
        <h2>Chọn bài học:</h2>
        <div className="course-grid">
          {lessons.map((lesson, index) => (
            <div
              key={index}
              className={`course-card ${lesson.title === selectedLesson ? "active" : ""}`}
              onClick={() => {
                setSelectedLesson(lesson.title);
                setEditingId(null);
              }}
            >
              {/* Nhúng video Youtube bằng iframe */}
              <iframe
                width="300"
                height="150"
                src={lesson.youtube}
                title={lesson.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <div className="course-content">
                <p className="course-meta">Bài học số {index + 1}</p>
                <h3 className="course-title">{lesson.title}</h3>
                {/* Bỏ hiển thị "Đang xem" */}
                {/* Nút chuyển thành "Học ngay" */}
                <a
                  href={lesson.youtube.replace("embed/", "watch?v=")}
                  className="view-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Học ngay
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="comment-area">
        <h3>Bình luận cho: {selectedLesson}</h3>
        {db[selectedLesson].length === 0 ? (
          <p>Chưa có bình luận nào.</p>
        ) : (
          db[selectedLesson].map((cmt) => (
            <div key={cmt.id} className="comment">
              {editingId === cmt.id ? (
                <>
                  <textarea
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                  />
                  <div className="comment-actions">
                    <button onClick={handleEditSave}>Lưu</button>
                    <button onClick={handleCancelEdit}>Hủy</button>
                  </div>
                </>
              ) : (
                <>
                  <p>
                    <strong>{cmt.user}:</strong> {cmt.replyTo && <em>(trả lời bình luận #{cmt.replyTo})</em>} {cmt.text}
                  </p>
                  <div className="comment-actions">
                    {cmt.user === currentUser.name && (
                      <>
                        <button onClick={() => handleEditStart(cmt.id, cmt.text, cmt.user)}>
                          Sửa
                        </button>
                        <button onClick={() => handleDelete(cmt.id, cmt.user)}>Xoá</button>
                      </>
                    )}
                    {currentUser.role === "admin" && cmt.role === "user" && !cmt.replyTo && (
                      <button onClick={() => setReplyTo(cmt.id)}>Trả lời</button>
                    )}
                  </div>
                </>
              )}
            </div>
          ))
        )}

        {replyTo && <p>Đang trả lời bình luận #{replyTo}</p>}

        <form className="comment-form" onSubmit={handleSubmit}>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Nhập câu hỏi hoặc phản hồi..."
          />
          <button type="submit">Gửi bình luận</button>
        </form>
      </section>
    </div>
  );
};

export default ForumPage;
