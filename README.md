# 📘 Google Classroom Guide – Instructional Website for Teachers

A web platform designed to help teachers learn how to use Google Classroom effectively. It provides structured tutorials, video guides, quizzes, and progress tracking.

---

## 🚀 Features

- Step-by-step documentation for Google Classroom
- Instructional video content
- User account management (for teachers)
- Learning progress tracking
- Responsive design for both desktop and mobile

---

## 🛠️ Tech Stack

- **Frontend**: ReactJS
- **Backend**: Node.js + Express
- **Database**: MySQL (via XAMPP)
- **Tools**: Postman, Git, GitHub

---

## 🚀 Running the Project

1. Clone the Project

```bash
git clone https://github.com/AC2070-20242/group_09.git
cd google-classroom-guide

2. Set Up MySQL with XAMPP
Download and install XAMPP https://www.apachefriends.org/download.html
Open XAMPP Control Panel and:
  Start Apache
  Start MySQL
Access phpMyAdmin by visiting: http://localhost/phpmyadmin
Create a new database named: google_classroom_guide
Open the file server/db/db.sql, copy its contents, and paste into the SQL tab in phpMyAdmin to run it.

3. Start Backend

```bash
cd server
npm install
node server.js

4. Start Frontend

```bash
cd client
npm install
npm start
