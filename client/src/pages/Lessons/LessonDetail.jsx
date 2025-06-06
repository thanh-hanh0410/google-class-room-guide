import React, { useState } from "react";


const ForumPage = () => {
  const lessons = [
    "Bài 1: Tạo lớp học",
    "Bài 2: Thêm học viên",
    "Bài 3: Giao bài tập",
  ];

  const [selectedLesson, setSelectedLesson] = useState(lessons[0]);
  const [comments, setComments] = useState([
    { user: "Linh", text: "Mình không thấy nút thêm học viên?" },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { user: "Bạn", text: newComment }]);
      setNewComment("");
    }
  };

  return (
    <div className="forum-container">
      <h1>Diễn đàn thảo luận</h1>
      <p className="forum-description">
        Đặt câu hỏi, chia sẻ và phản hồi dưới mỗi bài học.
      </p>

      <section className="lesson-select">
        <h2>Chọn bài học:</h2>
        <ul>
          {lessons.map((lesson, index) => (
            <li key={index}>
              <button
                className={lesson === selectedLesson ? "active" : ""}
                onClick={() => setSelectedLesson(lesson)}
              >
                {lesson}
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="comment-area">
        <h3>Bình luận cho: {selectedLesson}</h3>
        {comments.map((cmt, index) => (
          <div key={index} className="comment">
            <p>
              <strong>{cmt.user}:</strong> {cmt.text}
            </p>
            <div className="comment-actions">
              <button>Sửa</button>
              <button>Xoá</button>
            </div>
          </div>
        ))}

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
