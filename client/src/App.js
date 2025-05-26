import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import LessonDetail from "./pages/LessonDetail";
import Quizzes from "./pages/Quizzes";
import QuizPlay from "./pages/QuizPlay";
import Forum from "./pages/Forum";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lessons/:id" element={<LessonDetail />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/quizzes/:id/play" element={<QuizPlay />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
